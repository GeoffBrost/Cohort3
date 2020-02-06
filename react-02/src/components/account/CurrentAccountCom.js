import React from 'react'



class AccountCurrent extends React.Component {
    render() {
        return (
            <div className="AccountListDiv">
               <h1>Account Name: {this.props.info}</h1>
               <h3>Balance: </h3>
                <input type="Number" ></input>
               <button> Deposit</button>
               <button>Withdraw</button>
            </div>
        )
    }
}

export default AccountCurrent;

