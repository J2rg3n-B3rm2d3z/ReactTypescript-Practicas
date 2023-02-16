import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    milisegundos:number,
}

export const Timer = ( {milisegundos}:TimerArgs ) => {

    const [segundos,setsegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout>();

    useEffect( () => {
        ref.current && clearInterval(ref.current);
        console.log('useEffect');
        ref.current = setInterval( () => setsegundos( s => s+1), milisegundos);
        return () => {
            console.log('Componente destruido')
        }
    },[milisegundos])

    return (
        <>
            <h4>Timer: <small>{segundos}</small></h4>
        </>
    )
}