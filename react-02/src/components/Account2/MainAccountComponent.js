import React from 'react'
import './Account.css'

class MainAccountComponent extends React.Component {
    render() {
        return (
                <div className="Maindiv">
                    <h1>Accounts</h1>
                    <h2 id="idTotalBalance">Total Balance:</h2><div id="idTotalBalance"></div>
                    <button id="idHighestBalance" value="idHighestBalance">Highest Balance</button>
                    <button id="idLowestBalance" value="idLowestBalance">Lowest Balance</button>
                    <p>Account Name:</p> <input type="text" name="accountName" />
                    <p>Starting Balance:</p> <input id="idStartingBalance" type="Number"/><br/>
                    <button id="open" value="idOpenNewAccount">Open Account</button>      
                </div>
        )
    }
}

export default MainAccountComponent;