import { useState } from "react"
import InputAuthentication from "../components/authentication/inputAuthentication"
import { IconExclamation, IconGoogle } from "../components/icon"
import useAuth from "../data/hook/useAuth"

export default function Authentication(props) {
    type typeModel = 'login' | 'cadastro'

    const { register, login, loginGoogle } = useAuth()

    const [error, setError] = useState(null)
    const [model, setModel] = useState<typeModel>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function viewError(msg, time = 5) {
        setError(msg);
        setTimeout(() => setError(null), time * 1000)
    }

    async function Submit() {
        try {
            if (model === 'login') {
                await login(email, password)
            } else {
                await register(email, password)
            }

        } catch (e) {
            viewError(e.message)
        }
    }
    return (
        <div className={`flex h-screen justify-center items-center`}>
            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img
                    src="https://source.unsplash.com/random"
                    alt="Login Admin"
                    className={`h-screen w-full object-cover`} />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`
                    text-3xl font-bold mb-4
                    `}>
                    {model === 'login' ? 'Entre com sua conta' : 'Cadastra-se na plataforma'}
                </h1>

                {error ? (
                    <div className={`
                        flex
                        bg-red-600 px-4 py-4 mt-4
                        border border-red-700 rounded-lg
                        text-white
                    `}>
                        {IconExclamation()}
                        <span className={`
                            items-center ml-2
                        `}>
                            {error}
                        </span>
                    </div>
                ) : false}

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

                <button onClick={loginGoogle} className={`
                    flex justify-center items-center
                    w-full bg-red-600 border-2 hover:bg-red-400 
                    text-white rounded-lg px-2 py-3
                `}>
                    {IconGoogle(18)} Entrar com Google
                </button>

                {model === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModel('cadastro')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Criar uma conta gratuitamente</a>
                    </p>

                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModel('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Entre com suas credenciais</a>
                    </p>
                )}
            </div>
        </div>
    )
}