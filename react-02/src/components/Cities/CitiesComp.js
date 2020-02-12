import React, { Component } from 'react'
import MainCitiesComp from './MainCitiesComp.js'

export class CitiesComp extends Component {
    render() {
        return (
            <div>
                <h1>Hello World from Cities</h1>
                <MainCitiesComp />
            </div>
        )
    }
}

export default CitiesComp
