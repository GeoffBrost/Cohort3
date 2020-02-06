import React from 'react'


class MainAccountComponent extends React.Component {
    state = {
        accountName: "",
        balance: "",
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
    this.props.createAccount(this.state.accountName,this.state.balance);
    this.setState({accountName:"", balance:""});

}

render() {
    return (
        <div className="Maindiv">
            <h1>Accounts</h1>
            <h2 id="idTotalBalance">Total Balance:</h2><div id="idTotalBalance"></div>
            <button id="idHighestBalance" value="idHighestBalance">Highest Balance</button>
            <button id="idLowestBalance" value="idLowestBalance">Lowest Balance</button>
            <p>Account Name:</p>
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
            <button id="open" value="idOpenNewAccount" onClick={this.onSubmit}>Open Account</button>
        </div>
    )
}
}

export default MainAccountComponent;
