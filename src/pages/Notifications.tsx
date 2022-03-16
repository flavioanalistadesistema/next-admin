import { Layout } from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notifications() {
  const {alterThema} = useAppData();
  
  return (

    <Layout title="Notificações" subtext="Aqui teremos nossas notificações">
      <button onClick={alterThema}>alter Thema</button>
    </Layout>
  )
}