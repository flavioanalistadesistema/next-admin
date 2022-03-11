interface TitleProps {
    title: string,
    subtext: string
}
export function Title(props: TitleProps) {
    return (
        <div>
            <h1 className={`
                font-black text-3xl text-gray-600
            `}>
                {props.title}
            </h1>
            <h2 className={`
                font-light text-sm text-gray-600
            `}>
                {props.subtext}
            </h2>
        </div>
    )
}