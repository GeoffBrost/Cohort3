import React, { Component } from 'react'
import './Account.css'

export class AccountCard extends Component {
    
    deleteAccount = (e) =>{
        this.props.deleteAccount(this.props.info.key);
    }
    selectAccount = (e) =>{
        this.props.selectAccount(this.props.info.key)
    }
    render() {
        const {accountName}= this.props.info
        return (
            <div className="Card">
                <h4>Account Name: {accountName}</h4>
                <button onClick={this.selectAccount}>Select</button>
                <button onClick={this.deleteAccount} >Close</button>
            </div>
        )
    }
}

export default AccountCard;