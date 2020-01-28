import React from 'react'
import './Account.css'
import MainAccountComponent from './MainAccountComponent'
import AccountCurrent from './CurrentAccountComponent'
import { Caslte } from '../nav/menu'

class AccountCard extends React.Component {
    constructor(props){
        super()
        this.state = {
            select:<AccountCurrent />
        }
    }

homeClick = () => {
    {console.log(this.props)}
}

render(){
    return(
        <div>
        <div>
            <Caslte homeClick={this.homeClick} />
        </div>
        <div>{this.state.select}</div>
    </div>
    )
}
};