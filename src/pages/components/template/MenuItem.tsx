interface MenuItemPropos {
    url: string
    title: string
    icon: any
}

export function MenuItem(props: MenuItemPropos) {
    return (
        <div>
            <li>
                {props.icon}
            </li>
        </div>
    )
}