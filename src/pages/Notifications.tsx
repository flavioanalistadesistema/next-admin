import { Layout } from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";


export default function Notifications() {
  
  const data = useAppData();

  return (
    <Layout title="Notificações" subtext="Aqui teremos nossas notificações">
      <h3>{data.name}</h3>
    </Layout>
  )
}