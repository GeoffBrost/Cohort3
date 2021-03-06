import React from 'react'
import AccountCard from './AccountCard'
// import AccountCurrent from './CurrentAccountComponent';


class AccountList extends React.Component {
    render() {
        return this.props.accountInfo.map((info) => (
            <AccountCard key={info.key} info={info} deleteAccount={this.props.deleteAccount} selectAccount={this.props.selectAccount} totalBal={this.props.totalBal} />
        ));
    }
}
export default AccountList;
