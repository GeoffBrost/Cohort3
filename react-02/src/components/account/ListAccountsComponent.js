import React from 'react'
import AccountCard from './AccountCard'

class AccountList extends React.Component {
    render() {
        // const accounts = this.props.accts.accountList;
        // const cards = accounts.map((account, i,balance ) =>
        // )
        // console.log(cards)
        return (
            <div className="AccountListDiv">
                <AccountCard />
            </div>
        )
    }
}

export default AccountList;