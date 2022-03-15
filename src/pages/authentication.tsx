import { useState } from "react"
import InputAuthentication from "../components/authentication/inputAuthentication"
import { Layout } from "../components/template/Layout"

export default function Authentication(props) {
    type typeModel= 'login' | 'cadastro'
    
    const [model, setModel] = useState<typeModel>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <Layout title="Authentication" subtext="Esta é a tela de authetication">
                <InputAuthentication
                    type="email"
                    label="Email"
                    value={email}
                    valueUpdate={setEmail}
                />
                <InputAuthentication
                    type="password"
                    label="Senha"
                    value={password}
                    valueUpdate={setPassword}
                />

                <InputAuthentication
                    type="password"
                    label="Re-Senha"
                    value={password}
                    valueUpdate={setPassword}
                    notRender={true}
                />
            </Layout>
        </div>
    )
}