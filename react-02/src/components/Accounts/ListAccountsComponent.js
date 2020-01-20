import React from 'react'
import AccountCard from "./AccountCard"

class AccountList extends React.Component {
    render() {
        const accounts = this.props.accts.getAccounts();
        // const accountList = accounts.map((account, i) =>
        //     <li key={i}>{account.accountName}</li>
        // );
        const cards = accounts.map((account, i) =>
            <AccountCard account={account} key={i} />
        )

        return (
            <div>
                {cards}
                {/* <ol>{accountList}</ol> */}
            </div>
        )
    }
}

export default AccountList;