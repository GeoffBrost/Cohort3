import React from 'react'
import AccountHeader from './HeaderAccount'
import AccountCurrent from './CurrentAccount'
import ListAccount from './ListAccounts'

class AccountDisplay extends React.Component{
    render(){
        return(
            <div>
                <AccountHeader />
                <AccountCurrent />
                <ListAccount />
            </div>
        )
    }
}

export default AccountDisplay;