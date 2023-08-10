import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export const Contact = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
        setErrors(validate({...input, [e.target.name]: e.target.value}))
    }

    const validate = ({name, email, subject, message}) => {
        const isBlankSpace = new RegExp("^\\s+$")
        const isEmailAddress = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        const errors = {};

        if(!name || isBlankSpace.test(name)) errors.name = "Se requiere que ingrese un nombre";
        if(!email || isBlankSpace.test(email)) errors.email = "Se requiere que ingrese un email";
        if(!isEmailAddress.test(email)) errors.email = "Ups, parece que el email no es valido";
        if(!subject || isBlankSpace.test(subject)) errors.subject = "Se requiere que ingrese un asunto";
        if(!message || isBlankSpace.test(message)) errors.message = "Se requiere que ingrese un mensaje";
        if(message.length < 10) errors.message = "El mensaje debe tener al menos 10 caracteres";

        return errors;
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const newMessage = {
            name: input.name.trim(),
            email: input.email,
            subject: input.subject.trim(),
            message: input.message.trim(),
        }
        setInput({
                name: "",
                email: "",
                subject: "",
                message: ""
        })
        try {
            await axios.post("https://submit-form.com/R14WI3qY", newMessage)
            .then(response => {
                if(response.statusText === "OK"){
                Swal.fire({
                    title: "Muchas gracias por el mensaje, me comunicare lo antes posible contigo",
                    icon: "success",
                })
            }
            })
        } catch (error) {
            console.log(error.message)            
        }
    }

    return (
        <div id="contact" className="w-3/5 m-auto mt-10 bg-third p-7">
            <h3 className="text-3xl font-medium pb-2">_Contáctame</h3>
            <form 
                className="flex flex-col"
                onSubmit={handleSubmit}>
                <div className="flex gap-3 py-3">
                    <div className="basis-1/2">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="pb-1">Nombre: </label>
                            <input 
                                type="text"
                                id="name"
                                placeholder="Nombre..."
                                 className="p-2 rounded-md basis-4/5"
                                name="name"
                                required
                                value={input.name}
                                onChange={handleChange}/>
                        </div>
                        {errors.name && (<p className="text-xs uppercase text-center text-gray-500 font-medium pt-2">{`${errors.name}`}</p>)}
                    </div>
                    
                    <div className="basis-1/2">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="pb-1">Email: </label>
                            <input 
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email..."
                                className="p-2 rounded-md basis-4/5"
                                required
                                value={input.email}
                                onChange={handleChange}/>
                        </div>
                        {errors.email && (<p className="text-xs uppercase text-center text-gray-500 font-medium pt-2">{`(${errors.email})`}</p>)}
                    </div>
                </div>
                
                <div className="pt-3 flex flex-col pb-3">
                    <label htmlFor="subject" className="pb-1">Asunto: </label>
                    <input 
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Asunto..."
                        className="p-2 rounded-md w-full"
                        value={input.subject}
                        required
                        onChange={handleChange}/>
                    {errors.subject && (<p className="text-xs uppercase text-center text-gray-500 font-medium pt-2">{`(${errors.subject})`}</p>)}
                </div>
                
                <div className="pt-3 flex flex-col">
                    <label htmlFor="message" className="pb-1">Mensaje: </label>
                    <textarea 
                        type="text"
                        placeholder="Mensaje..."
                        id="message"
                        rows="5"
                        name="message"
                        className="p-1 rounded-md"
                        required
                        value={input.message}
                        onChange={handleChange}/>
                    {errors.message && (<p className="text-xs uppercase text-center text-gray-500 font-medium pt-2">{`(${errors.message})`}</p>)}
                </div>
                

                <button
                    className="bg-primary w-fit py-2 px-4 rounded-md mt-7 m-auto text-lg hover:scale-110 hover:text-white"
                    type="submit">
                    Enviar!
                </button>
            </form>
        </div>
    )
}