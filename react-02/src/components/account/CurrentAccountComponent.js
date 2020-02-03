import React from 'react'



class AccountCurrent extends React.Component{
 render(){
        console.log(this.props.steve)
        return(
            <div className="CurrentAccount">
            {/* <h1>Account Name: {this.props} </h1> */}
            </div>
        )
    }
}

export default AccountCurrent;