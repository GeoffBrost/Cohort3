import React from 'react';
import AccountController from './AccountController'
import MainAccountComponent from './MainAccountComponent'
import AccountCurrent from './CurrentAccountCom'
import AccountList from './AccountList'

// let newAccController = new AccountController();

class AccountComp extends React.Component {
    constructor(props) {
        super();
        this.newAccController = new AccountController();
        this.state = {
            accountList: this.newAccController.accountList
        }
        // this.state ={
        //     AccountController : newAccController
        // }
        this.newAccController.createAccount("Checking", 1000);
        // this.state.AccountController.createAccount("Saving", 5000);
        // this.state.AccountController.createAccount("Collage Fund", 1);
    }
    createAccount = (accountName,balance) => {
        this.newAccController.createAccount(accountName, balance)
        this.setState({
            accountList: this.newAccController.accountList
        });
        console.log(this.state)
}

    render() {
        return (
            <div>
                <MainAccountComponent createAccount={this.createAccount}/>
                <AccountCurrent />
                <AccountList accountInfo={this.state.accountList} />
            </div>
        )
    }
}

export default AccountComp;