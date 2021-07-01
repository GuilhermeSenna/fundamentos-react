/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {

    function acao() {
        props.onClicar(Math.random(), "Gerar")
    }

    return (
        <div>
            <button onClick={acao}> Alterar</button>
        </div >
    )
}
