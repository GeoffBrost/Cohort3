import React from 'react';
import './App.css';
import {Home, Select,Robo} from './components/nav/menu'
import Clock from './components/Clock.js'
import Game from './components/tic-tac-toe/index.js'
import RoboApp from './components/robofriends/App.js'

class App extends React.Component{
  constructor(props){
  super()
  this.state = {
    selected: <Home />,
    }
}

homeClick =() => {
  this.setState({selected: <Clock />})
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
      <Home homeClick={this.homeClick} />
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