import React from 'react';
import AccountController from './AccountController'
import MainAccountComponent from './MainAccountComponent'
import AccountCurrent from './CurrentAccountCom'
import AccountList from './AccountList'
import './Account.css'


class AccountComp extends React.Component {
    constructor(props) {
        super();
        this.newAccController = new AccountController();
        this.state = {
            accountList: this.newAccController.accountList,
            filterAccount: "",
            totalBal: "0",
            highestAccount: "",
            lowestAccount: ""
        }
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
            accountList: this.newAccController.accountList,
            filterAccount: "",
        });
    }
    selectAccount = (key) => {
        this.setState({
            filterAccount: this.newAccController.selectAccount(key)
        });

    }
    deposit = (key, amount) => {
        this.newAccController.deposit(key, amount)
        this.setState({
            accountList: this.newAccController.accountList
        })
    }
    withdraw = (key, amount) => {
        this.newAccController.withdraw(key, amount)
        this.setState({
            accountList: this.newAccController.accountList
        })
    }
    highestBalance = () => {
        this.setState({
            highestAccount: this.newAccController.highestAccount()
        });
    }
    lowestBalance = () => {
        this.setState({
            lowestAccount: this.newAccController.lowestAccount()
        });
    }
    totalBalance = () => {
        this.setState({
            totalBal:this.newAccController.totalAccountBalance()
        })
    }
    componentDidMount=() => {
        this.setState({
            totalBal:this.newAccController.totalAccountBalance()
        })
    }
    render() {
        return (
            <div className="accountApp">
                <MainAccountComponent createAccount={this.createAccount} highestBalance={this.highestBalance} highestAccount={this.state.highestAccount} lowestBalance={this.lowestBalance} lowestAccount={this.state.lowestAccount} totalBalance={this.state.totalBal} totalbal={this.totalBalance}/>
                <AccountCurrent account={this.state.filterAccount} deposit={this.deposit} withdraw={this.withdraw} totalbal={this.totalBalance} />
                <AccountList accountInfo={this.state.accountList} deleteAccount={this.deleteAccount} selectAccount={this.selectAccount} totalBal={this.totalBalance} />
            </div>
        )
    }
}

export default AccountComp;