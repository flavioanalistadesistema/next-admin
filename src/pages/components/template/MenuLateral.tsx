import { MenuItem } from "./MenuItem";
import { IconAdjustments, IconHome, IconNotifications } from "../icon";

export function MenuLateral() {
    return (
        <div>
            <aside>
                <ul>
                    <MenuItem title="Inicio" url="/Home" icon={IconHome}/>
                    <MenuItem title="Ajuste" url="/Adjustments" icon={IconAdjustments}/>
                    <MenuItem title="Notificações" url="/Notifications" icon={IconNotifications}/>
                </ul>
            </aside>
        </div>
    )
}