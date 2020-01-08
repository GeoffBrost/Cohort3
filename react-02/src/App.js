import React from 'react';
import './App.css';
import {Caslte, Select,Robo} from './components/nav/menu'
import Clock from './components/Clock.js'
import Game from './components/tic-tac-toe/index.js'
import RoboApp from './components/robofriends/App.js'
import Home from './home/App'

class App extends React.Component{
  constructor(props){
  super()
  this.state = {
    selected: <Home />,
    }
}

homeClick =() => {
  this.setState({selected: <Home />})
}
ticTacToeClick =() => {
  this.setState({selected: <Game />})
}
rocketClick = () => {
  this.setState({selected: <RoboApp />})
}
render(){
  return(
    <div className="Home">
      <header className="App-header">
      <div className="head">
      <Clock />
      <Caslte homeClick={this.homeClick} />
      <Select ticTacToeClick={this.ticTacToeClick} />
      <Robo rocketClick={this.rocketClick} />
    </div>
    </header>
      <div>
        {this.state.selected}
      </div>
    </div>
  );
}
}
export default App;