import { IconMoon, IconSun } from "../icon"

interface ButtonAlterThemaProps {
    thema: string
    alterThema: () => void
}

export default function ButtonAlterThema(props: ButtonAlterThemaProps) {
    return props.thema === 'dark' ? (
        <div onClick={props.alterThema} className={`
            hidden sm:flex items-center cursor-pointer
            bg-gradient-to-r from-yellow-300 to-orange-600
            w:14 lg:w-24 h-8 p-1 rounded-full
        `}>
            <div className={`
                flex items-center justify-center
                bg-white text-orange-600 
                w-6 h-6 rounded-full
            `}>
                {IconSun(3)}
            </div>
            <div className={`
                hidden lg:flex items-center ml-4
                text-white
            `}>
                <span className="text-sm">Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.alterThema} className={`
            hidden sm:flex items-center justify-end cursor-pointer
            bg-gradient-to-r from-gray-500 to-gray-900
            w:14 lg:w-24 h-8 p-1 rounded-full
        `}>
            <div className={`
                hidden lg:flex items-center mr-2
                text-gray-300
            `}>
                <span className="text-sm">Escuro</span>
            </div>
            <div className={`
                flex items-center justify-center
                bg-black text-yellow-300
                w-6 h-6 rounded-full
            `}>
                {IconMoon(3)}
            </div>
        </div>
    )
}