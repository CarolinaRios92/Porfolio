import { useEffect, useState } from "react";
import { actualProjects} from "@/data/dataProjects"
import { CardProject } from "./CardProject"
import { Tabs, Tab, Card, CardBody, Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { ChevronDownIcon } from "./ChevronDownIcon";

export default function Projects(){
    const [titleActualProject, setTitleActualProject] = useState(actualProjects[0].title);

    let selectedOptionValue = Array.from(titleActualProject).join("");

    const project = actualProjects.find(project => project.title === selectedOptionValue)
    
    return (
        <section className="pt-0 mt-0">
            
            <svg className="mb-0 pt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#9381ff" fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,245.3C384,245,480,235,576,208C672,181,768,139,864,122.7C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>

            <div className="bg-primary mt-0 pt-0 border-0"> 
                <div className="lg:w-4/6 w-5/6 m-auto pt-10">
                    <h3 id="projects" className="text-3xl font-medium pb-3 text-white">
                        _Proyectos
                    </h3>
                    <div className="flex w-full flex-col hidden md:block">
                        <Tabs aria-label="Dynamic tabs" color="primary" items={actualProjects}>
                            {(item) => (
                            <Tab 
                                key={item.id} 
                                title={item.title}>
                                <Card>
                                <CardBody>
                                    <CardProject project={item} />
                                </CardBody>
                                </Card>  
                            </Tab>
                            )}
                        </Tabs>
                    </div>

                    <div className="md:hidden block">
                            <ButtonGroup variant="flat">
                                <Button>{titleActualProject}</Button>
                                <Dropdown placement="bottom-end">
                                    <DropdownTrigger>
                                        <Button isIconOnly>
                                            <ChevronDownIcon />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        disallowEmptySelection
                                        aria-label="E-commerce options"
                                        selectedKeys={titleActualProject}
                                        selectionMode="single"
                                        onSelectionChange={setTitleActualProject}
                                        className="max-w-[300px]"
                                        >
                                            {actualProjects?.map(project => (
                                                <DropdownItem key={project.title}>
                                                    {project.title}
                                                </DropdownItem>
                                ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </ButtonGroup>

                        <div className="pt-3">
                            <CardProject project={project} />
                                            </div>
                    </div>
                    
                </div>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#9381ff" fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,245.3C384,245,480,235,576,208C672,181,768,139,864,122.7C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
            </svg>
        </section>
    )
}