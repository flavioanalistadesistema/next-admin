import useAppData from "../../data/hook/useAppData"
import ButtonAlterThema from "./ButtonAlterThema"
import { Title } from "./Title"

interface HeadProps {
    title: string,
    subtext: string
}
export function Head(props: HeadProps) {
    const { thema, alterThema } = useAppData()
    return (
        <div className={`flex`}>
            <Title title={props.title} subtext={props.subtext} />
            <div className={`flex flex-grow justify-end`}>
                <ButtonAlterThema thema={thema} alterThema={alterThema} />
            </div>
        </div>
    )
}