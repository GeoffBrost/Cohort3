import React from 'react'
import './Account.css'


class AccountCurrent extends React.Component{
    render(){
        return(
            <div className="CurrentAccount">
            <h2> Account Name </h2>
            <div id="idAccountName"/><h2> Current Balance: </h2>
            <input type="number" id="idAmount"/>
            <button className={"idDeposit"} value="idDeposit">Deposit</button>
            <button id="idWithdraw" value="idWithdraw">Withdraw</button>
            </div>
        )
    }
}

export default AccountCurrent;