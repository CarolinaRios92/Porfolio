import {TecnologiesLogotype} from "@/data/dataProjects";

export const CardProject = ({project}) => {
    const {title, description, images, fixtures, technologies, repositorie, deploy} = project;

    return (
        <div className="flex gap-3 flex-col">
            <p className="text-2xl font-medium">{`// ${title}`}</p>
            <div className="flex gap-5">
                <img src={images[0]} alt={title} className="w-full basis-1/2"/>
                <div className="basis-1/2">
                    <p>{description}</p>
                    <p className="py-3 font-medium">Herramientas y tecnologias utilizadas:</p>
                    <ul className="grid grid-cols-4 gap-2">
                        {technologies.length > 0 && 
                            (technologies.map((technologie, index) => (
                                <div key={index} className="flex flex-col justify-center items-center">
                                    <img src={TecnologiesLogotype[technologie]} className="w-10"/>
                                    <li className="w-28 text-center">{technologie}</li>
                                </div>
                            

                        )))}
                    </ul>
                </div>
            </div>

        </div>
    )
}