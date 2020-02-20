import React, { Component } from 'react'

export class CityDetail extends Component {
    state={
        population:""
       
    }
    onChange = (e) => this.setState({ [e.target.name]: Number(e.target.value) });

    moveIn = (e)=>{
        this.props.MoveIn(this.props.city.key, this.state.population);
        this.props.communityPopulation();
        this.setState({population:""})
        
    }
    moveOut = (e)=>{
        this.props.MoveOut(this.props.city.key, this.state.population);
        this.props.communityPopulation();
        this.setState({population:""})
    }
    render() {
        return (
            <div>
                <h1>Name: {this.props.city.cityName}</h1>
                <h1>Population: {this.props.city.population}</h1>
                <h1>Longitude: {this.props.city.longitude}</h1>
                <h1>Latiude: {this.props.city.latitude}</h1>
                <h1>Type: {this.props.howBig}</h1>
                <input
                type='Number'
                name='population' 
                placeholder='Population Move'
                value={this.state.population}
                onChange={this.onChange}></input>
                <button onClick={this.moveIn}>Move In</button>
                <button onClick={this.moveOut}>Move Out</button>
            </div>
        )
    }
}

export default CityDetail
