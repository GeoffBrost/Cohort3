import React from 'react';
import './MainNav.css'
// import { ReactComponent as Castle } from '../../images/castle.svg'
import {ReactComponent as Panick} from '../../images/panick.svg'
import {ReactComponent as Money} from '../../images/money.svg'
import {ReactComponent as Rocket} from '../../images/rocket.svg'
import {ReactComponent as HomeMe} from '../../images/home.svg'
import {ReactComponent as Cities} from '../../images/office.svg'
// import { Neutral} from '../ReactIcon.js'

export const Caslte = (props) => {
    return (
        <HomeMe className={"icon"} alt="home" onClick={props.homeClick} />
    )
}
export const Select = (props) => {
    return (
        <Panick className={"icon"} alt="Tic Tac Toe" onClick={props.ticTacToeClick} />
    )
}
export const Robo = (props) => {
    return(
        <Rocket className={"icon"} alt="Rocket" onClick={props.rocketClick} />
    )
}
export const Account = (props) => {
    return(
        <Money className={"icon"} alt="Account" onClick={props.accountClick} />
    )
}
export const City = (props) => {
    return (
        <Cities className={"icon"} alt="cities" onClick={props.citiesClick} />
    )
}