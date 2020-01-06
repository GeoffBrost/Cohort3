import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComp from './components/MyComponent.js';
import Even from './components/EvenComponent.js';
import Odd from './components/OddComponent.js';
class App extends React.Component {
    constructor(){
      super()
      this.counter = 21;
      this.state ={
        myState:"TBD"
      };
  }
  onPushMe = () => {
    this.counter++
    if(this.counter%2===0){

      
    this.setState({
      myState: <Even />
      // myState: "now: " + this.counter
    });
  }
  else 
  this.setState({
    myState: <Odd />
  });
}
  render(){
    return(
      <div className="App">
         <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>I am in control of this application and my name is Geoff<br /> {this.counter} <br /> {this.state.myState}</h1>
      <button onClick={this.onPushMe}>Push Me</button>
      <MyComp
      whatTosay="what Ever" onClick={this.onPushMe}/>
      </header>
     
      </div>
    )
    }
}
export default App ;
