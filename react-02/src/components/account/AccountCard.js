import React, { Component } from 'react'

export class AccountCard extends Component {
    
    render() {
        const {accountName}= this.props.info
        console.log(accountName)
        return (
            <div className="Card">
                <h4>Account Name: {accountName}</h4>
                <button>Select</button>
                <button>Close</button>
            </div>
        )
    }
}

export default AccountCard;