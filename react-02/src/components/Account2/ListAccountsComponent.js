import React from 'react'
import Thingy from "./thingy";
import './Account.css'

class AccountList extends React.Component {
    render() {
        const accounts = this.props.accts.getAccounts();
        const cards = accounts.map((account, i,balance ) =>
            <Thingy account={account} balance={balance} key={i}  />
        )

        return (
            <div className="AccountListDiv">
                {cards}
            </div>
        )
    }
}

export default AccountList;