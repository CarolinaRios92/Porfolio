import {TecnologiesLogotype} from "@/data/dataProjects";

export const CardProject = ({project}) => {
    const {title, description, images, fixtures, technologies, repositorie, deploy} = project
  
    const technologiesLowerCase = technologies.map(technologie => (
        technologie.toLowerCase()
    ));

      console.log(technologiesLowerCase)
    return (
        <div className="flex gap-3 flex-col">
            <p className="text-lg">{title}</p>
            <div className="flex gap-5">
                <img src={images[0]} alt={title} className="w-full basis-1/2"/>
                <div className="basis-1/2">
                    <p>{description}</p>
                    <p>Herramientas y tecnologias utilizadas:</p>
                    <ul>
                        {technologies.length > 0 && 
                            (technologies.map((technologie, index) => (
                                <div key={index}>
                                    <img src={TecnologiesLogotype[technologie]} className="w-10"/>
                                    <li >{technologie}</li>
                                </div>
                            

                        )))}
                    </ul>
                </div>
            </div>

        </div>
    )
}