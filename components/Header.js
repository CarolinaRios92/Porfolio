export const Header = () => {
    return (
        <header className="flex justify-between py-5 px-14">
            <p>Bienvenido! Soy Carolina Ríos!</p>
            <nav className="flex gap-5">
                <a href="#readme" className="hover:scale-110">README</a>
                <a href="#projects" className="hover:scale-110">Proyectos</a>
                <a href="#technologies" className="hover:scale-110">Tecnologias</a>
                <a href="#contact" className="hover:scale-110">Contacto</a>
            </nav>
        </header>
    )
}