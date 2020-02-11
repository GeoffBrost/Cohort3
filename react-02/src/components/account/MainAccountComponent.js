import React from 'react'
import './Account.css'

class MainAccountComponent extends React.Component {
    state = {
        accountName: "",
        balance: "",

    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        this.props.createAccount(this.state.accountName, this.state.balance);
        this.props.totalbal()
        this.setState({ accountName: "", balance: "" });

    }
    highestBalance = (e) => {
        this.props.highestBalance()
    }
    lowestBalance = (e) => {
        this.props.lowestBalance()
    }

    render() {
        return (
            <div className="MainAccountComp">
                <h1>Accounts</h1>
                <h2>Total Balance: {this.props.totalBalance}</h2>
                <button
                    id="idHighestBalance"
                    value="idHighestBalance"
                    onClick={this.highestBalance}
                >Highest Balance
                </button>
                <h4>Highest Account:</h4>
                <p>Name: {this.props.highestAccount.accountName}</p>
                <p>Balance: {this.props.highestAccount.balance}</p>
                <button
                    id="idLowestBalance"
                    value="idLowestBalance"
                    onClick={this.lowestBalance}
                >Lowest Balance
                </button>
                <h4>Lowest Account:</h4>
                <p>Name: {this.props.lowestAccount.accountName} </p>
                <p>Balance: {this.props.lowestAccount.balance} </p>
                <input
                    type="text"
                    name="accountName"
                    value={this.state.accountName}
                    onChange={this.onChange}
                />
                <p>Starting Balance:</p>
                <input
                    type="number"
                    name="balance"
                    value={this.state.balance}
                    onChange={this.onChange}
                />
                <br />
                <button
                    id="open"
                    value="idOpenNewAccount"
                    onClick={this.onSubmit}

                >Open Account
                </button>
            </div>
        )
    }
}

export default MainAccountComponent;
