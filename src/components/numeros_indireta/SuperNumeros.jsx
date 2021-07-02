/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import Sub from './SubNumeros'

export default (props) => {

    const [num, setNum] = useState([])

    function quandoClicar(valorGerado) {
        setNum(valorGerado)
    }

    return (
        <div>
            <h4>numeros: {num.join(' ')}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}
