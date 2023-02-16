import { useState, ChangeEvent } from "react";



export const useForm = <T extends Object>( initState: T ) => {

    const [formulario, setformulario] = useState(initState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = target
        console.log(name, value);

        setformulario({
            ...formulario,
            [name]: value

        })
    }

    return {

        formulario,
        handleChange,
        ...formulario

    }

}