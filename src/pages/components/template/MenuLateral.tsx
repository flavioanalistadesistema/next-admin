import { MenuItem } from "./MenuItem";
import { IconAdjustments, IconHome, IconLogout, IconNotifications } from "../icon";
import Logo from "./Logo";

export function MenuLateral() {
    return (
        <div>
            <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900 dark:text-gray-200
            `}>
                <div  className={`
                    flex flex-col items-center justify-center
                    bg-gradient-to-r from-indigo-500 to-purple-800
                    h-20 w-20
                `}>
                    <Logo />
                </div>
                <ul className={`mb-72`}>
                    <MenuItem title="Inicio" url="/" icon={IconHome}/>
                    <MenuItem title="Ajuste" url="/Adjustments" icon={IconAdjustments}/>
                    <MenuItem title="Notificações" url="/Notifications" icon={IconNotifications}/>
                </ul>
                <ul className={`mt-64`}>
                    <MenuItem 
                        title="Sair" 
                        icon={IconLogout}
                        onClick={() => console.log('logout')}
                        className={`
                            text-red-600
                            hover:bg-red-400 hover:text-white
                            dark:text-red-400 dark:hover:text-white
                        `}/>
                </ul>
            </aside>
        </div>
    )
}