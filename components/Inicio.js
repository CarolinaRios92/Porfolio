import Image from "next/image"
import Link from "next/link"

export const Inicio = () => {
    return (
        <section className="flex justify-center items-center gap-5">
            <div>
                <h1>Leandra Carolina Ríos</h1>
                <h2>Hola! Soy Full Stack Web Developer</h2>
            </div>
            
            <div>
                <div>
                    <a href="#contact">Contactame!</a>
                    <a>Aquí te dejo mi CV</a>
                </div>
                
                <div className="flex gap-5">
                    <a href="https://www.linkedin.com/in/leandra-carolina-rios-431965151/">
                        <Image src="/images/Logos/linkedin.png" alt="linkedin" width={40} height={40}/>
                    </a>
                    <a href="https://github.com/CarolinaRios92">
                         <Image src="/images/Logos/github.png" alt="github" width={40} height={40}/>
                    </a>
                </div>

            </div>
            
        </section>
    )
}