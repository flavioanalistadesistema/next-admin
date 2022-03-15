import { useState } from "react"
import InputAuthentication from "../components/authentication/inputAuthentication"
import { IconGoogle } from "../components/icon"

export default function Authentication(props) {
    type typeModel = 'login' | 'cadastro'

    const [model, setModel] = useState<typeModel>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function Submit() {
        if (model === 'login') {
            console.log('login');
        } else {
            console.log('cadastrar');

        }
    }
    return (
        <div className={`flex flex-col h-screen justify-center items-center`}>
            <div className="w-1/2">
                <h1 className={`
                    text-xl font-bold mb-4
                    `}>
                    {model === 'login' ? 'Entre com sua conta' : 'Cadastra-se na plataforma'}
                </h1>
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
                <button onClick={Submit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {model === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className={`my-6 border-gray-300 w-full`} />

                <button onClick={Submit} className={`
                    flex justify-center items-center
                    w-full bg-red-600 border-2 hover:bg-red-400 
                    text-white rounded-lg px-2 py-3
                `}>
                    {IconGoogle(18)} Entrar com Google
                </button>
            </div>
        </div>
    )
}