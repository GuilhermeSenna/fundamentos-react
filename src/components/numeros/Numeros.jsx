
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'


export default props => {
    const [ar, setAr] = useState([])

    function acao() {
        setAr(Array.from({ length: 6 }, () => Math.floor(Math.random() * 40)))
    }

    return (
        <div>
            <h4>Numeros: {ar.join(' ')}</h4>
            <button onClick={acao}>Clique</button>
        </div >
    )
}
