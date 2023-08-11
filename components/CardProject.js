import {TecnologiesLogotype} from "@/data/dataProjects";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

export const CardProject = ({project}) => {
    const {title, description, images, fixtures, technologies, repositorie, deploy} = project;
    const [indexActiveImage, setIndexActiveImage] = useState(0);

    useEffect(() => {
        setIndexActiveImage(0)
    }, [images])

    const handleBackButton = () => {
        if(indexActiveImage === 0) return;
        setIndexActiveImage(indexActiveImage - 1)
    }

    const handleNextButton = () => {
        if(indexActiveImage === (images.length - 1)) return;
        setIndexActiveImage(indexActiveImage + 1)
    }

    return (
        <div className="flex gap-3 flex-col bg-white px-1 rounded-lg py-5">
            <p className="text-2xl font-medium px-5">{`// ${title}`}</p>
            <p className="px-5">{description}</p>
            <div className="flex gap-5">
                
                <div className="w-full">
                    <div className="flex items-center gap-1">
                        <Button 
                            isIconOnly 
                            radius="full" 
                            onClick={handleBackButton}
                            className="bg-gradient-to-tr from-primary to-secondary text-white shadow-lg hidden md:block">
                            <img src="/images/Icons/flecha-izquierda.png" alt="flecha" className="m-auto"/>
                        </Button>
                        <img src={images[indexActiveImage]} alt={title} className="md:w-11/12"/>
                        <Button 
                            isIconOnly 
                            radius="full" 
                            className="bg-gradient-to-tr from-primary to-secondary text-white shadow-lg hidden md:block"
                            onClick={handleNextButton}>
                            <img src="/images/Icons/flecha-derecha.png" alt="flecha" className="m-auto"/>
                        </Button>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-2 pt-3 content-center px-5">
                        {images?.length > 0 && (
                        images.map((image, index) => (
                            <button
                                onClick={() => setIndexActiveImage(index)}
                                key={index}>
                                <img src={image} alt={title}/>
                            </button>
                        ))
                        )}
                    </div>
                </div>

            </div>
             <p className="py-3 text-lg font-medium pb-5 text-center px-0 lg:px-5">{`// Herramientas y tecnologias utilizadas:`}</p>
            <ul className="grid lg:grid-cols-6 grid-cols-4 gap-3 lg:px-5 px-1">
                        {technologies.length > 0 && 
                            (technologies.map((technologie, index) => (
                                <div key={index} className="flex flex-col justify-center items-center">
                                    <img src={TecnologiesLogotype[technologie]} className="w-10 md:w-14"/>
                                    <li className="text-xs md:text-base w-28 text-center">{technologie}</li>
                                </div>
                        )))}
                    </ul>
            <div className="pl-5 px-5">
                <p className="text-lg font-medium pt-5 pb-2">_Funcionalidades:</p>
                <ul className="list-image-[url(/images/Icons/comprobado.png)] px-5">
                    {fixtures?.map((fixtur, index) => (
                        <li className="py-1" key={index}>{fixtur}</li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-5 py-4 justify-center px-5">
                <a href={repositorie} className="bg-primary text-white py-1 px-2 text-center rounded-lg hover:scale-110">Link al Repositorio</a>
                <a href={deploy} className="bg-primary text-white py-1 px-2 text-center rounded-lg hover:scale-110">Link al Deploy</a>
            </div>                  
        </div>
    )
}