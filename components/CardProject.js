import {TecnologiesLogotype} from "@/data/dataProjects";
import { useEffect, useState } from "react";

export const CardProject = ({project}) => {
    const {title, description, images, fixtures, technologies, repositorie, deploy} = project;
    const [activeImage, setActiveImage] = useState(images[0]);

    useEffect(() => {
        setActiveImage(images[0])
    }, [images])

    return (
        <div className="flex gap-3 flex-col border-white border-2 p-5">
            <p className="text-2xl font-medium">{`// ${title}`}</p>
            <p>{description}</p>
            <div className="flex gap-5">
                
                <div className="w-full">
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

            </div>
             <p className="py-3 text-lg font-medium pb-5 text-center">{`// Herramientas y tecnologias utilizadas:`}</p>
            <ul className="grid md:grid-cols-6 grid-cols-4 gap-3">
                        {technologies.length > 0 && 
                            (technologies.map((technologie, index) => (
                                <div key={index} className="flex flex-col justify-center items-center">
                                    <img src={TecnologiesLogotype[technologie]} className="w-10"/>
                                    <li className="w-28 text-center">{technologie}</li>
                                </div>
                        )))}
                    </ul>
            <div className="pl-5">
                <p className="text-lg font-medium pt-5 pb-2">_Funcionalidades:</p>
                <ul className="list-image-[url(/images/Icons/comprobado.png)]">
                    {fixtures?.map((fixtur, index) => (
                        <li className="py-1" key={index}>{fixtur}</li>
                    ))}
                </ul>
                
            </div>
            <div className="flex gap-5 py-4 justify-center">
                <a href={repositorie} className="bg-primary text-white py-1 px-2 text-center rounded-lg hover:scale-110">Link al Repositorio</a>
                <a href={deploy} className="bg-primary text-white py-1 px-2 text-center rounded-lg hover:scale-110">Link al Deploy</a>
            </div>                  
        </div>
    )
}