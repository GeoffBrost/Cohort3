import React from 'react'



class AccountCurrent extends React.Component {
    render() {
        return (
            <div className="CurrentAccount">
    <h1>Account Name: {this.props.account.accountName}</h1>
               <h3>Balance:{this.props.account.balance} </h3>
                <input type="Number" ></input>
               <button> Deposit</button>
               <button>Withdraw</button>
            </div>
        )
    }
}

export default AccountCurrent;

