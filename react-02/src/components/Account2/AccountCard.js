import React from 'react'
import './Account.css'
import AccountCurrent from './CurrentAccountComponent'
import { Caslte } from '../nav/menu'
import Thingy from './thingy.js'
import AccountList from './ListAccountsComponent'

class AccountCard extends React.Component {
    constructor(props) {
        super()
        this.state = {
            select: <AccountCurrent />,
        }
    }

    homeClick = () => {
        console.log(props)
    }
    render() {
        return (
            <div>
                    <Caslte homeClick={this.homeClick} />
                    <AccountList />   
          </div>
        )
    }
};

// function AccountCard(props) {
//     console.log(props)
//     return (
//     <div className="Card">
//         <h3>Account Name: {props.account.accountName}</h3>
//         <h3>Balance: {props.account.balance}</h3>
//         <button onClick={ClickMe} className="accountList">Select</button>
//         <button className="accountList">Close Account</button>
//     </div>
//     )
// };
// function ClickMe(value){
//         console.log("steve",value)
// };
export default AccountCard; 