import React, { useState } from 'react'

export const Counter = () => {

    const [counter, setcounter] = useState(0);

    const increment = (num: number): void => {
        setcounter(counter + num);
    }

    return (
        <div className='mt-5'>
            <h3>Counter: useState</h3>
            <span>Valor: {counter}</span>
            <br />
            <button className='btn btn-outline-primary mt-2'
                onClick={() => increment(1)}>
                +1

            </button>

            <button className='btn btn-outline-primary mt-2'
                onClick={() => increment(2)}>
                +2

            </button>

            <button className='btn btn-outline-danger mt-2'
                onClick={() => setcounter(0)}>
                Reset

            </button>

        </div>
    )
} 