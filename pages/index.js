import { Layout } from "@/layout/Layout";
import { Projects } from "@/components/Projects";
import { AboutMe } from "@/components/AboutMe";
import {Inicio} from "@/components/Inicio"

const Home = () => {
  return (
    <Layout>
        <Inicio />
        <AboutMe />
        <Projects />
    </Layout>
  )
}

export default Home;
