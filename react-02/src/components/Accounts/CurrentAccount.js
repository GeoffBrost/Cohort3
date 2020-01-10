import React from 'react'

class AccountCurrent extends React.Component{
    render(){
        return(
            <div>
            <h2 Account Name /><div id="idAccountName"/><h2> Current Balance: </h2>
            <input id="idAmount"/>
            <button id="idDeposit" value="idDeposit">Deposit</button>
            <button id="idWithdraw" value="idWithdraw">Withdraw</button>
            </div>
        )
    }
}
export default AccountCurrent;