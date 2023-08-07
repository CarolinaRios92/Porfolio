import Image from "next/image"

export const Projects = () => {

    const actualProyects = [
        {
            title: "E-commerce Malaika",
            description: "Desarrolle un e-commerce y el panel de administrador para un local que se dedica a la venta de indumentaria femenina y marroquineria",
            images: [
                "/images/Malaika/1.png",
                "/images/Malaika/2.png",
                "/images/Malaika/3.png",
                "/images/Malaika/4.png",
                "/images/Malaika/5.png",
                "/images/Malaika/6.png",
                "/images/Malaika/7.png",
                "/images/Malaika/8.png",
                "/images/Malaika/9.png",
                "/images/Malaika/10.png",
                "/images/Malaika/11.png",
                "/images/Malaika/12.png",
                "/images/Malaika/13.png",
            ]

        }
    ]
    return (
        <section id="projects">
            <h3>Proyectos</h3>
            <Image src="/images/Malaika/1.png" alt="img" width={200} height={300} />
        </section>
    )
}