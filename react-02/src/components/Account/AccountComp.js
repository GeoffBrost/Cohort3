import React from 'react';
import AccountController from './AccountController'

class AccountComp extends React.Component {
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
            <h1>Hello World</h1>
        </div>
        )
    }
}

export default AccountComp;