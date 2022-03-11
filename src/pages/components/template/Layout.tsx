import { Content } from "./Content"
import { Head } from "./head"
import { MenuLateral } from "./MenuLateral"

interface LayoutProps {
    title: string,
    subtext: string,
    children?: any
}
export function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex h-screen w-screen
        `}>
            <MenuLateral />
            <div className={`
                flex flex-col w-full p-7 bg-gray-300
            `}>
                <Head title={props.title} subtext={props.subtext} />
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    )
}