import React from 'react';
import './MainNav.css'
import {ReactComponent as Castle} from '../../images/castle.svg'
import {ReactComponent as Panick} from '../../images/panick.svg'
import {ReactComponent as Money} from '../../images/money.svg'
import {ReactComponent as Rocket} from '../../images/rocket.svg'
// import { Neutral} from '../ReactIcon.js'


class MainNav extends React.Component {
    render() {
        return (
            <div>
                <Castle className={"icon"} />
                <Panick className={"icon"} />
                <Money className={"icon"} />
                <Rocket className={"icon"} />
            </div>
        )
    }
}


export  default MainNav ;