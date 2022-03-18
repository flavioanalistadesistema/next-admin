import { createContext, useEffect, useState } from "react"
import firebase from "../../firebase/config"
import User from "../../model/User"
import router from "next/router"
import Cookies from "js-cookie"

interface AuthContextInterface {
    user?: User
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
            return user.email
        }else {
            manageCookie(false)
            setUser(null)
            return false
        }
    }

    async function loginGoogle(){
        try{
            setLoading(false)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            
            configurationSession(resp.user)
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
            setLoading(true)
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-thema-auth')) {
            const funcCanceled = firebase.auth().onIdTokenChanged(configurationSession)
            return () => funcCanceled()
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext

