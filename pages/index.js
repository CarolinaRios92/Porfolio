import { Layout } from "@/layout/Layout";
import { Projects } from "@/components/Projects";
import { AboutMe } from "@/components/AboutMe";
import {Inicio} from "@/components/Inicio";
import { Contact } from "@/components/Contact";
import {Technologies} from "@/components/Technologies";

const Home = () => {
  return (
    <Layout>
        <Inicio />
        <AboutMe />
        <Projects />
        <Technologies />
        <Contact />
    </Layout>
  )
}

export default Home;
