interface ContentProps{
    children?: any
}
export function Content(props: ContentProps) {
    return ( 
        <div className={`
            flex flex-lo mt-7
        `}>
            {props.children}
        </div>
    )
}