import { createContext, useState } from "react"
import firebase from "../../firebase/config"
import User from "../../model/User"
import router from "next/router"

interface AuthContextInterface {
    user?: User
    loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextInterface>({})

// async function userNormalize(userFirebase: firebase.User): Promise<User> {
//     const token = await userFirebase.getIdToken()

//     return {
//         uid: userFirebase.uid,
//         name: userFirebase.displayName,
//         email: userFirebase.email,
//         token,
//         provider: userFirebase.providerData[0].providerId,
//         imageUrl: userFirebase.photoURL
//     }
// }

export function AuthProvider(props) {
    const [user, setUser] = useState<User>(null)

    async function loginGoogle(){
        console.log('Login do google');
        router.push('/')
        
    }

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext

