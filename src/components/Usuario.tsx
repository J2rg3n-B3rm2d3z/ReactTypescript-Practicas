import {useState} from 'react';


interface User {
    uid: string;
    name: string;
}

const user:User = {
    uid: '12341',
    name: 'Jurgen Bermudez',
}


export const Usuario = () => {

    const [user, setUser] = useState<User>({
        uid: 'A',
            name: 'A'
    });

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Fernando Herrera'
        });
    }

    return(
        <div>
            <h3>Usuario: useState</h3>

            <button className='btn btn-outline-primary'
            onClick={login}>
                Login
            </button>

            <pre>{JSON.stringify(user)}</pre>


        </div>
    )
}