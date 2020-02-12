import React, { Component } from 'react'

export class CityCard extends Component {
    selectCity = (e)=>{
        this.props.selectCity(this.props.city.key)
    }
    render() {
        return (
            <div>
                <h4>Name: {this.props.city.cityName}</h4>
                <button onClick={this.selectCity}>Select</button>
            </div>
        )
    }
}

export default CityCard
