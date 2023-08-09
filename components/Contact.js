import { useState } from "react";

export const Contact = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div id="contact" className="w-3/5 m-auto mt-10 bg-secondary p-7">
            <h3 className="text-3xl font-medium pb-2">_Contáctame</h3>
            <form className="flex flex-col">
                <div className="flex gap-3 pt-3">
                    <div className="basis-1/2 flex">
                        <label className="basis-1/5">Nombre: </label>
                        <input 
                            type="text"
                            placeholder="Nombre..."
                            className="p-1 rounded-md basis-4/5"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    
                    <div className="basis-1/2">
                        <label className="pr-2">Apellido: </label>
                        <input 
                            type="text"
                            placeholder="Apellido..."
                            className="p-1 rounded-md"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                
                <div className="pt-3">
                    <label className="pr-2">Asunto: </label>
                    <input 
                        type="text"
                        placeholder="Asunto..."
                        className="p-1 rounded-md"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}/>
                </div>
                
                <div className="pt-3">
                    <label className="pr-2">Mensaje: </label>
                    <input 
                        type="text"
                        placeholder="Mensaje..."
                        className="p-1 rounded-md"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                </div>
                

                <button
                    type="submit">
                    Enviar!
                </button>
            </form>
        </div>
    )
}