import React from 'react'
import CreateCard from "./AccountsCards"

class AccountList extends React.Component{
render(){
    console.log(this.props);
        return(
    <div>
        <CreateCard />
    </div>
    )
}
}

export default AccountList;