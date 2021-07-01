/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho{...props}><strong>João</strong></Filho> {/*spread*/}
        <Filho sobrenome={props.sobrenome}><strong>Maria</strong></Filho>
        <Filho sobrenome="Silva"><strong>Pedro</strong></Filho>
    </div>