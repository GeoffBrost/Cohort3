import React, { Component } from 'react'
import MainCitiesComp from './MainCitiesComp.js'
import CityList from './CityList'
import Community from './communityclass'
import CityDetail from './CityDetail'
import CommunityDetail from './CommunityDetail'

export class CitiesComp extends Component {
    constructor(props) {
        super();
        this.newCity = new Community();
        this.state = {
            community: this.newCity.community,
            filterCity: "",
            mostNorthern: "",
            mostSouthern: "",
            communityPopulation: "",
            type:""
        }
        this.newCity.createCity('Calgary', 1000, 10, 5)
        this.newCity.createCity('Red Deer', 500, 14, 20)
    }
    createCity = (name, population, latitude, longitude) => {
        this.newCity.createCity(name, population, latitude, longitude)
        this.setState({
            community: this.newCity.community
        })
        this.setState({
            mostNorthern: this.newCity.getMostNorthern()
        });
        this.setState({
            mostSouthern: this.newCity.getMostSouthern()
        });
        this.setState({
            communityPopulation: this.newCity.getCommunityPopulation()
        })
    }
    selectCity = (key, population) => {
        this.setState({
            filterCity: this.newCity.selectCity(key)
        })
    }
    moveIn = (key, movedpeople) => {
        this.state.filterCity.cityMovedIn(key, movedpeople)
    }
    moveOut = (key, movedpeople) => {
        this.state.filterCity.movedOut(key, movedpeople)
    }
    communityPopulation = () =>{
        this.setState({
            communityPopulation: this.newCity.getCommunityPopulation()
        })
    }
    render() {
        return (
            <div>
                <h1>Cities</h1>
                <MainCitiesComp createCity={this.createCity} 
                />
                <CityDetail city={this.state.filterCity} MoveIn={this.moveIn} MoveOut={this.moveOut} communityPopulation={this.communityPopulation} howBig={this.state.type}
                />
                <CommunityDetail mostNorthern={this.state.mostNorthern} mostSouthern={this.state.mostSouthern} communityPopulation={this.state.communityPopulation}
                />
                <CityList cityInfo={this.state.community} selectCity={this.selectCity} />
            </div>
        )
    }
}

export default CitiesComp
