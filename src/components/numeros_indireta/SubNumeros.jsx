/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {

    function acao() {
        props.onClicar(Array.from({ length: 6 }, () => Math.floor(Math.random() * 40)))
    }

    return (
        <div>
            <button onClick={acao}> Gerar</button>
        </div >
    )
}
