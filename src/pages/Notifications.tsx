import { Layout } from "../components/template/Layout";

export default function Notifications() {

  return (

    <Layout title="Notificações" subtext="Aqui teremos nossas notificações">
      <button onClick={alterThema}>alter Thema</button>
    </Layout>
  )
}