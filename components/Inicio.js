import { RevealWrapper } from "next-reveal"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export const Inicio = () => {
    return (
        <section className="flex lg:flex-row justify-center items-center content-start gap-20 py-12 lg:py-28 background-image flex-col " >
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl lg:text-5xl font-bold m-auto lg:m-0">Leandra Carolina Ríos</h1>
                <h2 className="text-1xl lg:text-2xl m-auto lg:m-0">Hola! Soy 
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
                <div className="flex lg:flex-col flex-row py-7 gap-5">
                    <RevealWrapper 
                        origin={"right"} 
                        delay={200}
                        className="load-hidden">
                        <a href="#contact" 
                            className="bg-primary px-8 border-white text-md border text-center text-white py-1 rounded-lg hover:bg-white hover:border-primary hover:border-2 hover:text-primary">
                            Contactame!
                        </a>
                    </RevealWrapper>
                    
                    <RevealWrapper 
                        origin={"right"} 
                        delay={300}
                        className="load-hidden">
                         <a href="/CV_Leandra_Carolina_Ríos_Full_Stack_Web_Developer.pdf" 
                            target='_blank' 
                            className="bg-fourth text-md text-center border-white border py-1 rounded-lg px-3 hover:bg-white hover:border-fourth hover:border-2 hover:text-fourth">
                            Aquí te dejo mi CV!
                        </a>
                    </RevealWrapper>
                </div>
                  
                <RevealWrapper 
                    origin="bottom" 
                    delay={400}
                    className="load-hidden">
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
                </RevealWrapper>
                

            </div>
            
        </section>
    )
}