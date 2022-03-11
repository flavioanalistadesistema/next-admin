import { Title } from "./Title"

interface HeadProps{
    title: string,
    subtext: string
}
export function Head(props: HeadProps) {
    return (
        <div>
            <Title title={props.title} subtext={props.subtext}/>
        </div>
    )
}