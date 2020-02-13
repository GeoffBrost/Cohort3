import React, { Component } from 'react'

export class CityDetail extends Component {
    typeCity = ()=>{

    }
    render() {
        return (
            <div>
                <h1>Name: {this.props.city.cityName}</h1>
                <h1>Population: {this.props.city.population}</h1>
                <h1>Longitude: {this.props.city.longitude}</h1>
                <h1>Latiude: {this.props.city.latitude}</h1>
                <h1>Type:</h1>
                <input 
                type='Number'
                placeholder='Population Move'></input>
                <button>Move In</button>
                <button>Move Out</button>
            </div>
        )
    }
}

export default CityDetail
