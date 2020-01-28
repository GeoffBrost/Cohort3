import React from 'react'
import MainAccountComponent from './MainAccountComponent'
import AccountCurrent from './CurrentAccountComponent'
import AccountList from './ListAccountsComponent'
import AccountController from './AccountController'

class AccountDisplay extends React.Component {
    constructor(props) {
        super();
        this.acctController = new AccountController();
        this.acctController.createAccount("Checking", 1000);
        this.acctController.createAccount("Saving", 5000);
        this.acctController.createAccount("Collage Fund", 1);


    }
    render() {
        return (
        <div>
            <div className="bigsteve">
                <div className="MainAccountComp">
                    <MainAccountComponent />
                </div>
                <div className="AccountCurrent">
                    <AccountCurrent />
                </div>
                <div className="AccountList">
                    <AccountList accts={this.acctController} />
                </div>
            </div>
        </div>
        )
    }
}



export { AccountDisplay };