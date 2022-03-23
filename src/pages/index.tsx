import Link from "next/link";
import { Layout } from "../components/template/Layout";


export default function Home() {
  return (
    <Layout title="Página inicial" subtext="Esta é a pagina HOME/Admin">
      <div className={`
        flex justify-center items-center 
        mt-10 ml-10
        text-6xl
      `}>
          <a href="https://github.com/flavioanalistadesistema/next-admin">Segue o link do <strong>REPOSITÓRIO</strong></a>
      </div>
    </Layout>
  )
}
