export const Header = () => {
    return (
        <header className="flex lg:justify-between justify-center py-5 px-14">
            <p className="lg:block hidden">Bienvenido! Soy Carolina Ríos!</p>
            <nav className="flex gap-5 items-center">
                <a href="#readme" className="hover:scale-110">README</a>
                <a href="#projects" className="hover:scale-110">Proyectos</a>
                <a href="#technologies" className="hover:scale-110">Tecnologias</a>
                <a href="#contact" className="hover:scale-110">Contacto</a>
            </nav>
        </header>
    )
}