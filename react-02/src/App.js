import React from 'react';
import './App.css';
import {Caslte, Select,Robo,Account,City} from './components/nav/menu'
import Clock from './components/Clock.js'
import Game from './components/tic-tac-toe/ticTacToe'
import RoboApp from './components/robofriends/RoboApp.js'
import Home from './components/home/Home.js'
import AccountComp from './components/account/AccountComp.js'
import CitiesComp from './components/Cities/CitiesComp.js'


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
accountClick = () => {
  this.setState({selected: <AccountComp />})
}
citiesClick = ()=> {
  this.setState({selected: <CitiesComp />})
}
render(){
  return(
  <div>
      <header className="main-header">
      <Clock />
      <Caslte homeClick={this.homeClick} />
      <Select ticTacToeClick={this.ticTacToeClick} />
      <Robo rocketClick={this.rocketClick} />
      <Account accountClick={this.accountClick} />
      <City citiesClick={this.citiesClick} />
    </header>
      <div>
        {this.state.selected}
    </div>
  </div>  
  );
}
}
export default App;