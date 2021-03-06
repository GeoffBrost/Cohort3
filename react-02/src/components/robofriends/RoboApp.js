import React, { Component } from 'react';
import CardList from './CardList.js';
import { robots } from './robots';
import SearchBox from './SearchBox.js';
import './RoboApp.css';
class RoboApp extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='RoboFriend'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}
export default RoboApp;