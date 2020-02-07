import React, { Component } from 'react'

export class AccountCard extends Component {
    
    deleteAccount = (e) =>{
        this.props.deleteAccount(this.props.info.key);
    }
    
    render() {
        const {accountName}= this.props.info
        return (
            <div className="Card">
                <h4>Account Name: {accountName}</h4>
                <button>Select</button>
                <button onClick={this.deleteAccount} >Close</button>
            </div>
        )
    }
}

export default AccountCard;