import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface AvatarProps {
    ClassName?: string
}

export default function Avatar(props: AvatarProps) {
    const { user } = useAuth()

    return (
        <Link href="/profile">
            <img 
                src={user?.imageUrl ?? '/images/avatar.svg'} 
                alt="image Avatar" 
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.ClassName}
                `}
                />
        </Link>
    )
}