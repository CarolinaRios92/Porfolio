import { Layout } from "@/layout/Layout";
import { Projects } from "@/components/Projects";
import { Readme } from "@/components/Readme";
import {Inicio} from "@/components/Inicio";
import { Contact } from "@/components/Contact";
import {Technologies} from "@/components/Technologies";

const index = () => {
  return (
    <Layout>
        <Inicio />
        <Readme />
        <Projects />
        <Technologies />
        <Contact />
    </Layout>
  )
}

export default index;
