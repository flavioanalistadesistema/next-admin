import Link from "next/link"

interface MenuItemPropos {
    title: string
    icon: any
    url?: string
    className?: string
    onClick?: (event: any) => void
}

export function MenuItem(props: MenuItemPropos) {

    function renderLink() {
        return (
            <a className={`
                flex flex-col 
                justify-center 
                items-center 
                text-gray-600
                dark:text-gray-200
                h-20 
                w-20
                ${props.className}`}>
                {props.icon}
                <span className={`text-xs font-light`}>
                    {props.title}
                </span>
            </a>
        )
    }

    return (
        <div>
            <li onClick={props.onClick} className={`
            hover:bg-gray-100 
            dark:hover:bg-gray-800 
            cursor-pointer
            `}>
                {props.url ? (
                    <Link href={props.url}>
                        {renderLink()}
                    </Link>
                ) : (
                    renderLink()
                )}
            </li>
        </div>
    )
}