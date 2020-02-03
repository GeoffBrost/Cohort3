import React from 'react';
// import AccountController from './AccountController'
// import MainAccountComponent from './MainAccountComponent'
import AccountCurrent from './CurrentAccountComponent'
// import AccountList from './ListAccountsComponent'

class AccountComp extends React.Component {
        state = {
            account:[
                {
                    name:"Checking",
                    balance:"500"
                },
                {
                    name:"Saving",
                    balance:"1000"
                }
            ]
        }
    render() {
        return (
        <div>
            {/* <MainAccountComponent /> */}
            <AccountCurrent steve={this.state.account}/>
            {/* <AccountList accts={this.acctController}/> */}
        </div>
        )
    }
}

export default AccountComp;