import React from 'react'
import MainAccountComponent from './MainAccountComponent'
import AccountCurrent from './CurrentAccountComponent'
import ListAccount from './ListAccountsComponent'
import AccountController from './AccountController'

class AccountDisplay extends React.Component {
    constructor(props) {
        super();
        this.acctController = new AccountController();
        this.acctController.createAccount("Checking", 1000);
        this.acctController.createAccount("Saving", 5000);
        this.acctController.createAccount("Collage Fund", 1);
        
    }
    render() {
        return (
            <div>
                <h1>Accounts</h1>
                <MainAccountComponent />
                <AccountCurrent />
                <ListAccount accts={this.acctController} />
            </div>
        )
    }
}

// class AccountControllerComp extends React.Component {
//     constructor(props) {
//         super();
//         this.AccountController = new AccountController();
//         this.state = {
//             accountName: ""
//         };
//         // this.addAccount = this.addAccount.bind(this);
//         // this.onChange = this.onChange.bind(this);
//     }
//     onChange(e) {
//         this.setState({ [e.target.name]: e.target.value })
//     }
//     addAccount(e) {
//         this.AccountController.createAccount(
//             this.state.accountName
//         )
//         console.log("geoff v1");
//         console.log(this.state.accountName);
//         console.log(AccountController.accountGroup);
    
//     };
//     // this.AccountControllerComp.addAccount(
//     //     this.state.accountName
//     render() {
//         return (
//             <div>
//                 <h3>Your Accounts</h3>
//                 <div className="form">
//                     <div>
//                         Account Name:{" "}
//                         <input
//                             className="input"
//                             name="accountName"
//                             type="text"
//                             placeholder="Example: Checking"
//                             value={this.accountName}
//                             onChange={this.onChange}
//                             required
//                         />
//                     </div>
//                     <div></div>
//                     <div><input
//                         className="btn btn-primary btn-sm"
//                         type="button"
//                         value="Create Account"
//                         onClick={e => {
//                             this.addAccount(e);
//                         }}
//                     /></div>
//                 </div>
//             </div>
//         )
//     }
// }


export { AccountDisplay };