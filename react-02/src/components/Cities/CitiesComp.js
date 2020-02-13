import React, { Component } from 'react'
import MainCitiesComp from './MainCitiesComp.js'
import CityList from './CityList'
import Community from './cityclass'
import CityDetail from './CityDetail'
import CommunityDetail from './CommunityDetail'

export class CitiesComp extends Component {
    constructor(props) {
        super();
        this.newCity = new Community();
        this.state = {
            community: this.newCity.community,
            filterCity: ""
        }
        this.newCity.createCity('Calgary', 1000, 10, 5)
        this.newCity.createCity('Red Deer', 500, 14, 20)
    }
    createCity = (name, population, latitude, longitude) => {
        this.newCity.createCity(name, population, latitude, longitude)
        this.setState({
            community: this.newCity.community
        });
    }
    selectCity = (key) => {
        this.setState({
            filterCity: this.newCity.selectCity(key)
        })
    }
    render() {
        return (
            <div>
                <h1>Cities</h1>
                <MainCitiesComp createCity={this.createCity} />
                <CityDetail city={this.state.filterCity} 
                // cityType={this.cityType} 
                />
                <CommunityDetail />
                <CityList cityInfo={this.state.community} selectCity={this.selectCity} />
            </div>
        )
    }
}

export default CitiesComp
