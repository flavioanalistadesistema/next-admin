import { createContext, useEffect, useState } from "react"
import firebase from "../../firebase/config"
import User from "../../model/User"
import router from "next/router"
import Cookies from "js-cookie"

interface AuthContextInterface {
    user?: User
    loading?: boolean
    register?: (email: string, password: string) => Promise<void>
    login?: (email: string, password: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextInterface>({})

async function userNormalize(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken()

    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0].providerId,
        imageUrl: userFirebase.photoURL
    }
}

function manageCookie(logged: boolean) {
    if(logged) {
        Cookies.set('admin-thema-auth', logged, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-thema-auth')
    }
}

export function AuthProvider(props) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>(null)

    async function configurationSession(userFirebase) {
        if(userFirebase?.email) {
            const user = await userNormalize(userFirebase)
            manageCookie(true)
            setUser(user)
            setLoading(false)
            return user.email
        }else {
            manageCookie(false)
            setUser(null)
            setLoading(false)
            return false
        }
    }

    async function register(email: string, password: string){
        try{
            setLoading(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)
            
            await configurationSession(resp.user)
            router.push('/')

        } finally {
            setLoading(false)
        }
    }

    async function login(email: string, password: string){
        try{            
            setLoading(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email, password)
            
            await configurationSession(resp.user)
            router.push('/')

        } finally {
            setLoading(false)
        }
    }

    async function loginGoogle(){
        try{
            setLoading(false)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            
            await configurationSession(resp.user)
            router.push('/')

        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try{
            setLoading(true)
            await firebase.auth().signOut()
            await configurationSession(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-thema-auth')) {
            const funcCanceled = firebase.auth().onIdTokenChanged(configurationSession)
            return () => funcCanceled()
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            register,
            login,
            loginGoogle,
            logout,
            loading
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext

