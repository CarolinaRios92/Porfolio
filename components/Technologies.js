import { TecnologiesLogotype } from "@/data/dataProjects"

export const Technologies = () => {
    return (
        <div id="technologies" className="lg:w-3/5 w-4/5 m-auto">
            <h3 className="text-3xl font-medium pb-2">{`// Tecnologias`}</h3>
            <ul className="grid md:grid-cols-6 grid-cols-4">
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.JavaScript} alt="JavaScript" className="w-16"/>
                    <p className="pt-2">JavaScript</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.TypeScript} alt="TypeScript" className="w-16"/>
                    <p className="pt-2">TypeScript</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.HTML5} alt="HTML5" className="w-16"/>
                    <p className="pt-2">HTML5</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.CSS3} alt="CSS3" className="w-16"/>
                    <p className="pt-2">CSS3</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Figma} alt="Figma" className="w-16"/>
                    <p className="pt-2">Figma</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.React} alt="React" className="w-16"/>
                    <p className="pt-2">React</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Redux} alt="Redux" className="w-16"/>
                    <p className="pt-2">Redux</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Next} alt="Next" className="w-16"/>
                    <p className="pt-2">Next</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.MongoDb} alt="MongoDb" className="w-16"/>
                    <p className="pt-2">MongoDb</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Sequelize} alt="Sequelize" className="w-16"/>
                    <p className="pt-2">Sequelize</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.PostgreSQL} alt="PostgreSQL" className="w-16"/>
                    <p className="pt-2">PostgreSQL</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Node} alt="Node" className="w-16"/>
                    <p className="pt-2">Node</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Express} alt="Express" className="w-16"/>
                    <p className="pt-2">Express</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Tailwind} alt="Tailwind" className="w-16"/>
                    <p className="pt-2">Tailwind</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Styled_Components} alt="Styled Components" className="w-16"/>
                    <p className="pt-2 text-center">Styled Components</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.AWS_S3} alt="AWS S3" className="w-16"/>
                    <p className="pt-2">AWS S3</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Vercel} alt="Vercel" className="w-16"/>
                    <p className="pt-2">Vercel</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.GitHub} alt="GitHub" className="w-16"/>
                    <p className="pt-2">GitHub</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Firebase} alt="Firebase" className="w-16"/>
                    <p className="pt-2">Firebase</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Git} alt="Git" className="w-16"/>
                    <p className="pt-2">Git</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.VSCode} alt="VSCode" className="w-16"/>
                    <p className="pt-2">VSCode</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Slack} alt="Slack" className="w-16"/>
                    <p className="pt-2">Slack</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Discord} alt="Discord" className="w-16"/>
                    <p className="pt-2">Discord</p>
                </li>
                <li className="flex flex-col items-center py-3">
                    <img src={TecnologiesLogotype.Trello} alt="Trello" className="w-16"/>
                    <p className="pt-2">Trello</p>
                </li>
            </ul>
        </div>
    )
}