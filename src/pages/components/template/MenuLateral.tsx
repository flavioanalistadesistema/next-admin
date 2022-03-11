import { MenuItem } from "./MenuItem";
import { IconAdjustments, IconHome, IconNotifications } from "../icon";
import Logo from "./Logo";

export function MenuLateral() {
    return (
        <div>
            <aside>
                <div  className={`
                    flex flex-col items-center justify-center
                    bg-gradient-to-r from-indigo-500 to-purple-800
                    h-20 w-20
                `}>
                    <Logo />
                </div>
                <ul>
                    <MenuItem title="Inicio" url="/" icon={IconHome}/>
                    <MenuItem title="Ajuste" url="/Adjustments" icon={IconAdjustments}/>
                    <MenuItem title="Notificações" url="/Notifications" icon={IconNotifications}/>
                </ul>
            </aside>
        </div>
    )
}