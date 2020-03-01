import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: ''
    }
    responseFacebook = response => {
        this.setState({
            isLoggedIn:true,
            userID:response.name,
            email:response.email
        })
    }


    compoenntClicked = () => {
        console.log('clicked')
    }

    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (
                <div style ={{
                    width:'400px',
                    margin:'auto',
                    background:'#f4f4f4',
                    padding:'20px'
                }}>
                <h2>Hello {this.state.name}</h2> 
                </div>
            );
        } else {
            fbContent = (<FacebookLogin
                appId="187935692437403"
                autoLoad={true}
                fields="name,email"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />  
            );
            }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}

export default Facebook;
