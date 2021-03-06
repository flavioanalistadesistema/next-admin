import useAppData from "../../data/hook/useAppData";
import ValidationsAuthentication from "../authentication/validationsAuthentication";
import { Content } from "./Content"
import { Head } from "./head"
import { MenuLateral } from "./MenuLateral"

interface LayoutProps {
    title: string,
    subtext: string,
    children?: any
}
export function Layout(props: LayoutProps) {
    const { thema } = useAppData();

    return (
        <ValidationsAuthentication>
            <div className={`${thema} flex h-screen w-screen`}>
                <MenuLateral />
                <div className={`
                    flex flex-col w-full p-7 
                    bg-gray-300 dark:bg-gray-800
                `}>
                    <Head title={props.title} subtext={props.subtext} />
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
        </ValidationsAuthentication>
    )
}