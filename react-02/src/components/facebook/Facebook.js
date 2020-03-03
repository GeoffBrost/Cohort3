import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
require('dotenv').config()


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
            name:response.name,
            email:response.email
        
        })
        
    }
    
    
    
    compoenntClicked = () => {
        console.log('clicked')
    }
    logOut =() =>{
        this.setState({
            isLoggedIn:false,
            userID:'',
            name:'',
            email:''
        })
    FB.logout()
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
                <button onClick={this.logOut}>Sign Out</button>
                </div>
            );
        } else {
            
            fbContent = (<FacebookLogin
                appId= '187935692437403'
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
