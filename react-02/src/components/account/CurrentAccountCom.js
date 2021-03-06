import React from 'react'



class AccountCurrent extends React.Component {
    state = {
        amount: ""
    }
    onChange = (e) => this.setState({ [e.target.name]: Number(e.target.value) });

    deposit = (e) => {
        this.props.deposit(this.props.account.key, this.state.amount)
        this.props.totalbal()
        this.setState({amount:""})
    }
    withdraw = (e)=> {
        this.props.withdraw(this.props.account.key, this.state.amount)
        this.props.totalbal()
        this.setState({amount:""})
    }

    render() {
        return (
            <div className="CurrentAccount">
                <h1>Name: {this.props.account.accountName}</h1>
                <h3>Balance:{this.props.account.balance} </h3>
                <input
                    type="Number"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.onChange}
                >
                    </input>
                <button onClick={this.deposit}> Deposit</button>
                <button onClick={this.withdraw}>Withdraw</button>
            </div>
        )
    }
}

export default AccountCurrent;

