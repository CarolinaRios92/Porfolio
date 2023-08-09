import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export const Inicio = () => {
    return (
        <section className="flex justify-center items-center content-start gap-20 py-20 background-image" >
            <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold">Leandra Carolina Ríos</h1>
                <h2 className="text-lg">Hola! Soy 
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
                    <a href="#contact" className="bg-primary text-center py-1 rounded-lg hover:bg-transparent hover:border-primary hover:border-2">Contactame!</a>
                    <a href="/CV_Leandra_Carolina_Ríos_Full_Stack_Web_Developer.pdf" target='_blank' className="bg-secondary text-center py-1 rounded-lg text-white px-3 hover:bg-transparent hover:border-secondary hover:border-2 hover:text-black">Aquí te dejo mi CV</a>
                </div>
                
                <div className="flex gap-5 items-center justify-center">
                    <a href="https://www.linkedin.com/in/leandra-carolina-rios-431965151/" target='_blank'>
                        <Image src="/images/Logos/linkedin.png" alt="linkedin" width={30} height={30}/>
                    </a>
                    <a href="https://github.com/CarolinaRios92" target='_blank'>
                         <Image src="/images/Logos/github.png" alt="github" width={30} height={30}/>
                    </a>
                </div>

            </div>
            
        </section>
    )
}