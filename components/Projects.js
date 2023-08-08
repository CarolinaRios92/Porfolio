import Image from "next/image"

export const Projects = () => {

    const actualProyects = [
        {
            id: 1,
            title: "E-commerce Malaika",
            description: "Desarrolle un e-commerce para un local que se dedica a la venta de indumentaria femenina y marroquineria",
            images: [
                "/images/Malaika/1.png",
                "/images/Malaika/2.png",
                "/images/Malaika/3.png",
                "/images/Malaika/4.png",
                "/images/Malaika/5.png",
                "/images/Malaika/6.png",
                "/images/Malaika/7.png",
                "/images/Malaika/8.png",
            ],
            fixtures: [
                "Visualización de todos los productos, detalle de cada producto",
                "Filtrado por características de los productos, por categorías. Ordenamiento",
                "Logueo con cuenta de google",
                "Posibilidad de agregar productos a favoritos",
                "Carrito de compras y pasarela de pagos de MercadoPago",
                "En el apartado mi cuenta se puede visualizar todas las ordenes realizadas en la pagina",
                "Buscador de productos por barra de búsqueda"],
            technologies: [
                "Next.js",
                "MongoDB",
                "Styled Components",
                "MercadoPago",
                "React",
                "JavaScript",
                "VSCode",
                "HTML5",
                "Git"
            ],
            repositorie: "https://github.com/CarolinaRios92/Ecommerce-Malaika-Front",
            deploy: "https://ecommerce-malaika-front.vercel.app"
        },
        {
            id: 2,
            title: "Panel de Administrador E-commerce Malaika",
            description: "Panel de Administrador que le permite la carga de productos al e-commerce Malaika",
            images: [
                "/images/Admin/1.png",
                "/images/Admin/2.png",
                "/images/Admin/3.png",
                "/images/Admin/4.png",
                "/images/Admin/5.png",
            ],
            fixtures: [
                "Dashboard donde podes ver las estadísticas de las ventas del e-commerce",
                "Tiene autenticación de google",
                "Podes ver el listado de productos, editarlos, agregar nuevos o eliminarlos",
                "Ver las ordenes de compras realizadas en el e-commerce",
            ],
            technologies: [
                "MongoDb",
                "Next.js",
                "React",
                "Tailwind",
                "JavaScript",
                "AWS S3",
                "VSCode",
                "HTML5",
                "Git"
            ],
            repositorie: "https://github.com/CarolinaRios92/EcommerceAdmin"
        },
        {
            id: 3,
            title: "App ToDo",
            description: "Aplicación para organización de tareas diarias. Almacena las tareas en el local storage para que se mantengan aunque se recargue la pagina.",
            images: [
                "/images/ToDo/1.png",
                "/images/ToDo/2.png",
                "/images/ToDo/3.png",
                "/images/ToDo/4.png",
                "/images/ToDo/5.png",
                "/images/ToDo/6.png",
                "/images/ToDo/7.png"
            ],
            fixtures:[
                "Crear nuevas tareas",
                "Marcar la tarea como completada",
                "Modificar o eliminar las tareas existentes",
                "Eliminar las totalidad de tareas completadas",
                "Filtrado por tareas completadas o activas"
            ],
            technologies: [
                "React",
                "TypeScript",
                "VSCode",
                "HTML5",
                "Git"
            ],
            repositorie: "https://github.com/CarolinaRios92/ToDoTypescript",
            deploy: "https://to-do-typescript-psi.vercel.app/"
        },
        {
            id: 4,
            title: "Proyecto Individual Food",
            description: "Desarrollo de una SPA (Single Page Application) de dietas al cual consume datos de una API (“Spoonacular”) y utiliza una base de datos propia para almacenar las dietas cargadas en la página.",
            images: [
                "/images/Food/1.png",
                "/images/Food/2.png",
                "/images/Food/3.png",
                "/images/Food/4.png",
                "/images/Food/5.png",
                "/images/Food/6.png",
                "/images/Food/7.png",
                "/images/Food/8.png",
                "/images/Food/9.png",
                "/images/Food/10.png",
                "/images/Food/11.png",
                "/images/Food/12.png",
            ],
            fixtures: [
                "Recetas culinarias: Explora, busca, filtra por dietas y ordena recetas",
                "Crea, publica, modifica y elimina tus propias recetas",
                "Ver detalle de cada receta",
            ],
            technologies: [
                "JavaScript",
                "React",
                "Redux",
                "Express",
                "CSS",
                "Node.js",
                "PostgreSQL",
                "Sequelize",
                "VSCode",
                "HTML5",
                "Git"
            ],
            repositorie: "https://github.com/CarolinaRios92/PI-Food-main",
            deploy: "https://pi-food-front-production-9997.up.railway.app/"
        }
    ]
    return (
        <section id="projects" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#E5989B" fill-opacity="1" d="M0,224L480,96L960,224L1440,160L1440,320L960,320L480,320L0,320Z"></path>
            </svg>
            <div className="bg-[#E5989B]"> 
            <h3>Proyectos</h3>
            <div >
                {actualProyects.length > 0 && (
                    actualProyects.map(proyect => (
                        <div key={proyect.id}>
                            <h4>{proyect.title}</h4>
                            <Image src={proyect.images[0]} alt="img" width={200} height={300} />
                        </div>
                    ))
                )}
            </div>
           
            </div>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#E5989B" fill-opacity="1" d="M0,96L480,192L960,64L1440,96L1440,0L960,0L480,0L0,0Z">
                    </path>
                </svg>
        </section>
    )
}