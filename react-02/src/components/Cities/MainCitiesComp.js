import React, { Component } from 'react'


export class MainCitiesComp extends Component {
    render() {
        return (
            <div>
                <input 
                type='text'
                placeholder='Enter City Name'
                ></input>
                <input 
                type='Number'
                placeholder='Population'
                ></input>
                <input 
                type='Number'
                placeholder='Longitude'
                ></input>
                <input
                type='Number'
                placeholder='Latiude'
                ></input>
                <button>Create City</button>
            </div>
        )
    }
}

export default MainCitiesComp
