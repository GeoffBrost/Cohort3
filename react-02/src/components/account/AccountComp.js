import React from 'react';
import AccountController from './AccountController'
import MainAccountComponent from './MainAccountComponent'
import AccountCurrent from './CurrentAccountCom'
import AccountList from './AccountList'


class AccountComp extends React.Component {
    constructor(props) {
        super();
        this.newAccController = new AccountController();
        this.state = {
            accountList: this.newAccController.accountList
        }

        this.newAccController.createAccount("Checking", 1000);
        this.newAccController.createAccount("Saving", 5000);
        this.newAccController.createAccount("Collage Fund", 1);
    }
    createAccount = (accountName, balance) => {
        this.newAccController.createAccount(accountName, balance)
        this.setState({
            accountList: this.newAccController.accountList
        });

    }
    deleteAccount = (key) => {
        this.newAccController.deleteAccount(key)
        this.setState({
            accountList: this.newAccController.accountList
        });
    }

    render() {
        return (
            <div>
                <MainAccountComponent createAccount={this.createAccount} />
                <AccountCurrent />
                <AccountList accountInfo={this.state.accountList} deleteAccount={this.deleteAccount} />
            </div>
        )
    }
}

export default AccountComp;