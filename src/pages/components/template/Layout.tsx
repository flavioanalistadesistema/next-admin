import { Content } from "./Content"
import { Head } from "./head"
import { MenuLateral } from "./MenuLateral"

interface LayoutProps{
    title: string,
    subtext: string,
    children?: any
}
export function Layout(props: LayoutProps) {
    return (
        <div>
            <MenuLateral/>
            <Head title={props.title} subtext={props.subtext}/>
            <Content children={props.children}/>
        </div>
    )
}