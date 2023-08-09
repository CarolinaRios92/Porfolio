import {TecnologiesLogotype} from "@/data/dataProjects";
import { useState } from "react";

export const CardProject = ({project}) => {
    const {title, description, images, fixtures, technologies, repositorie, deploy} = project;
    const [activeImage, setActiveImage] = useState(images?.[0]);

    return (
        <div className="flex gap-3 flex-col border-white border-2 p-5">
            <p className="text-2xl font-medium">{`// ${title}`}</p>
            <div className="flex gap-5">
                <div className="w-full basis-4/6">
                    <img src={activeImage} alt={title}/>
                    <div className="flex flex-row gap-2 pt-3">
                        {images?.length > 0 && (
                        images.map((image, index) => (
                            <button
                                onClick={() => setActiveImage(image)}
                                key={index}>
                                <img src={image} alt={title}/>
                            </button>
                        ))
                        )}
                    </div>
                </div>
                <div className="basis-2/6">
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
            <div className="flex gap-5 py-4 justify-center">
                <a href={repositorie} className="bg-secondary py-1 px-2 text-center rounded-lg text-white hover:scale-110">Link al Repositorio</a>
                <a href={deploy} className="bg-[#FFCDB2] py-1 px-2 text-center rounded-lg hover:scale-110">Link al Deploy</a>
            </div>                  
        </div>
    )
}