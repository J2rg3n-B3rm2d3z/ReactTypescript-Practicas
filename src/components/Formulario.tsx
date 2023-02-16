// import { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';

interface FormData{
    email:string;
    nombre: string;
    edad: number
}

export const Formulario = () => {

    const { nombre,email,edad, handleChange, formulario} = useForm<FormData>({
            email: 'jurgenfbermudezpicado@gmail.com',
            nombre: 'Jurgen Bermudez',
            edad: 35,
        });


    // const [formulario, setformulario] = useState({
    //     email: '',
    //     nombre: '',
    // });

    // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {

    //     const { name, value } = target
    //     console.log(name, value);

    //     setformulario({
    //         ...formulario,
    //         [name]: value

    //     })
    // }

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={ /*(ev) => handleChange(ev) es lo mismo que solo ponga esto*/ handleChange} />

            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text"
                    className="form-control"
                    name="nombre"
                    value={nombre}
                    onChange={ /*(ev) => handleChange(ev) es lo mismo que solo ponga esto*/ handleChange} />

            </div>

            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input type="number"
                    className="form-control"
                    name="edad"
                    value={edad}
                    onChange={ /*(ev) => handleChange(ev) es lo mismo que solo ponga esto*/ handleChange} />

            </div>

            <pre>{JSON.stringify(formulario)}</pre>

        </form>
    )
}