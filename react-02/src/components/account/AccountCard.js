import React, { Component } from 'react'

export class AccountCard extends Component {
    render() {
        const accountinfo = this.props.accts
        console.log(accountinfo.accountName)
        return (
            <div>
                
            </div>
        )
    }
}

export default AccountCard
