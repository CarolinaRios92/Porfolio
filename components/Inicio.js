import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export const Inicio = () => {
    return (
        <section className="flex justify-center items-center content-start gap-20 py-28 background-image" >
            <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold">Leandra Carolina Ríos</h1>
                <h2 className="text-2xl">Hola! Soy 
                    <TypeAnimation
                        sequence={[
                            "_Full Stack Web Developer",
                            1000,
                            "_Front-end Developer",
                            1000,
                            "_Back-end Developer",
                            1000,
                        ]}
                        speed={50}
                        wrapper="SectionText"
                        repeat={Infinity}
                    />
                </h2>
            </div>
            
            <div>
                <div className="flex flex-col py-7 gap-3">
                    <a href="#contact" 
                        className="bg-primary border-white text-md border text-center text-white py-1 rounded-lg hover:bg-white hover:border-primary hover:border-2 hover:text-primary">
                        Contactame!
                    </a>
                    <a href="/CV_Leandra_Carolina_Ríos_Full_Stack_Web_Developer.pdf" 
                        target='_blank' 
                        className="bg-fourth text-md text-center border-white border py-1 rounded-lg px-3 hover:bg-white hover:border-fourth hover:border-2 hover:text-fourth">
                        Aquí te dejo mi CV!
                    </a>
                </div>
                
                <div className="flex gap-5 items-center justify-center">
                    <a href="https://www.linkedin.com/in/leandra-carolina-rios-431965151/" 
                        target='_blank'
                        className="bg-white p-3 rounded-full hover:scale-110">
                        <Image src="/images/Icons/linkedin.png" alt="linkedin" width={25} height={25}/>
                    </a>
                    <a href="https://github.com/CarolinaRios92" 
                        target='_blank'
                        className="bg-white p-3 rounded-full hover:scale-110">
                         <Image src="/images/Icons/github.png" alt="github" width={25} height={25}/>
                    </a>
                </div>

            </div>
            
        </section>
    )
}