import React, { Component } from 'react'


export class MainCitiesComp extends Component {
    state ={
        name:"",
        population:"",
        longitude:"",
        latiude:""
    }
    onChange = (e)=> this.setState({[e.target.name]: e.target.value })
    onSubmit =(e)=> {
        this.props.createCity(this.state.name,Number(this.state.population),this.state.latiude,this.state.longitude)
        this.setState({name:"",population:"",longitude:"",latiude:""})
    }
    render() {
        return (
            <div>
                <input 
                type='text'
                placeholder='Enter City Name'
                name='name'
                value={this.state.name}
                onChange={this.onChange}
                ></input>
                <input 
                type='Number'
                placeholder='Population'
                name='population'
                value={this.state.population}
                onChange={this.onChange}               
                ></input>

                <input 
                type='Number'
                placeholder='Longitude'
                name='longitude'
                value={this.state.longitude}
                onChange={this.onChange}
                ></input>

                <input
                type='Number'
                placeholder='Latiude'
                name='latiude'
                value={this.state.latiude}
                onChange={this.onChange}
                ></input>

                <button onClick={this.onSubmit}>Create City</button>
            </div>
        )
    }
}

export default MainCitiesComp
