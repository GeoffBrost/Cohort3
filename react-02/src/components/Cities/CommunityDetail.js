import React, { Component } from 'react'

export class CommunityDetail extends Component {
    render() {
        return (
            <div>
                <h1>Most Northern: {this.props.mostNorthern} </h1>
                <h1>Most Southern: {this.props.mostSouthern}</h1>
                <h1>Community Population: {this.props.communityPopulation}</h1>
            </div>
        )
    }
}

export default CommunityDetail
