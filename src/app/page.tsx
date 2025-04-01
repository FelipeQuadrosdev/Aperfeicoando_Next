import { Metadata } from "next";
import styles from "./page.module.css";
import { OwnerRepo } from "@/OwnerRepo";

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string
  }
}

export const metadata: Metadata = {
  title: "Aperfeiçoando Next",
  description: "Aprendendo Seo,para melhor indexado nos buscadores do google",
  keywords: ["CSS", "SEO", "JavaScript", "TypeScript"],
  openGraph: {
    title: "Foto do Perfil Linkedin",
    images: ["https://encurtador.com.br/VbVMY"],
    description: "Essa minha foto do Linkedin",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }

}


async function fetchDelay(url: string, delay: number) {
  await new Promise(resolver => setTimeout(resolver, delay))
  const response = await fetch(url)
  return response.json()
}

async function getData() {
  const data = fetchDelay("https://api.github.com/users/devfraga/repos", 1500)
  return data

}

console.log(getData())

export default async function Home() {
  const data: DataProps[] = await getData()

  return (
    <div className={styles.page}>
      <h1>Seja Bem-vindo</h1>
      {data.map((item) => (
        <section key={item.id}>
          <strong>Repositorio:</strong><a>{item.name}</a>
          <br /><br />
          <OwnerRepo
            avatar_url={item.owner.avatar_url}
            nome={item.owner.login}
          />
        </section>
      ))}

    </div>
  );
}
