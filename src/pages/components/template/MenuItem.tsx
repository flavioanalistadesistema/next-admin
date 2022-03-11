import Link from "next/link"

interface MenuItemPropos {
    url: string
    title: string
    icon: any
}

export function MenuItem(props: MenuItemPropos) {
    return (
        <div>
            <li className={`hover:bg-gray-100 `}>
                <Link href={props.url}>
                    <a className={`
                        flex flex-col justify-center items-center
                        h-20 w-20                    
                    `}>
                        {props.icon}
                        <span className={`
                            text-xs font-light text-gray-600
                        `}>{props.title}</span>
                    </a>
                </Link>
            </li>
        </div>
    )
}