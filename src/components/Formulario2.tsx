import { useForm } from "../hooks/useForm"

interface FormData{
    postal: string,
    ciudad: string
}

export const Formulario2 = () => {
    
    const {formulario,handleChange} = useForm<FormData>({postal:'+505',ciudad:'Managua'});

    const {ciudad,postal} = formulario

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Codigo Postal:</label>
                <input type="text"
                    className="form-control"
                    name="postal"
                    value={postal}
                    onChange={ /*(ev) => handleChange(ev) es lo mismo que solo ponga esto*/ handleChange} />

            </div>
            <div className="mb-3">
                <label className="form-label">Ciudad:</label>
                <input type="text"
                    className="form-control"
                    name="ciudad"
                    value={ciudad}
                    onChange={ /*(ev) => handleChange(ev) es lo mismo que solo ponga esto*/ handleChange} />

            </div>


            <pre>{JSON.stringify(formulario)}</pre>

        </form>
    )
}