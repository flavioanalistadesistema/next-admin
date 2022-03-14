import { IconSun } from "../icon"

interface ButtonAlterThemaProps {
    thema: string
    alterThema: () => void
}

export default function ButtonAlterThema(props: ButtonAlterThemaProps) {
    return props.thema === 'dark' ? (
        <div onClick={props.alterThema} className={``}>
            <div className={``}>
                {IconSun}
            </div>
            <div className={``}>
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div className={``}>

        </div>
    )
}