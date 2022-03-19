import Image from "next/image"
import Router from "next/router"
import Loading from "../../../public/images/loading.gif"
import useAuth from "../../data/hook/useAuth"

export default function ValidationsAuthentication(props) {

    const { user, loading } = useAuth()

    function renderContext() {
        return (
            <>
                <div>
                    {props.children}
                </div>
            </>
        )
    }

    function renderLoading() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={Loading} />
            </div>
        )
    }
    
    if (!loading && user?.email) {
        return renderContext()
    } else if (loading) {
        return renderLoading()
    } else {
        Router.push('/authentication')
        return null
    }
}