import React, { Component } from 'react'
import CityCard from './CityCard'

export class CityList extends Component {
    render() {
    return this.props.cityInfo.map((city) => (
    <CityCard key={city.key} city={city} selectCity={this.props.selectCity} />
            ));
    }
}

export default CityList
