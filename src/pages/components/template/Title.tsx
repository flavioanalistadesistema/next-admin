interface TitleProps {
    title: string,
    subtext: string
}
export function Title(props: TitleProps) {
    return (
        <div>
            <h1 className={`
        
            `}>
                {props.title}
            </h1>
            <h2 className={`
        
            `}>
                {props.subtext}
            </h2>
        </div>
    )
}