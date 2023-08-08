import Image from "next/image"
import { actualProjects } from "@/data/dataProjects"
import { CardProject } from "./CardProject"

export const Projects = () => {
    return (
        <section id="projects" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E5989B" fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,245.3C384,245,480,235,576,208C672,181,768,139,864,122.7C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="bg-primary"> 
            <div className="w-3/5 m-auto pt-10">
                <h3 className="text-3xl font-medium pb-3 text-white">_Proyectos</h3>
            <div className="grid grid-cols-1 gap-7">
                {actualProjects?.length > 0 && (
                    actualProjects.map(project => (
                        <CardProject key={project.id} project={project} />
                    ))
                )}
            </div>
           
            </div>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E5989B" fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,245.3C384,245,480,235,576,208C672,181,768,139,864,122.7C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </section>
    )
}