import React, { Component } from 'react';


class PlanetBox extends Component
{
    constructor(props){
        super(props)
        this.getDetails = this.getDetails.bind(this)
    }
    
    getDetails(event){
        
        this.props.handleUrl(this.props.planet.url)
        
    }
    render()
    {
        return(
        <tr>
            <td> {this.props.planet.name} </td>
            <td> {this.props.planet.population} </td>
            <td> <input type='button' value='Detail' onClick={this.getDetails} className="btn btn-outline-primary btn-sm" /></td>
        </tr>
        );

    }

}

export default PlanetBox