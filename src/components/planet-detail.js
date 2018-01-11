import React, { Component } from 'react';
import { getPlanetDetail } from './service.js'


class PlanetDetail extends Component{
    constructor(props){
        super(props)
        console.log(this.props.planetDetailUrl)
        this.goBack = this.goBack.bind(this)
        this.state = {
            isLoading: true,
            planetDetailData:{}
        }
        getPlanetDetail(this.props.planetDetailUrl)
        .then((data)=>{
                console.log(data)
                this.setState({isLoading:false,planetDetailData:data})
        });
    }

    goBack(){
        this.props.back()
    }
    render(){
        if(this.state.isLoading){
            return (<h3> Fetching Planet detail...</h3>)
        }
        else{
       return(
            <div>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th> Planet Details</th>
                            <th> <input type='button' value='Go Back to Search' onClick={this.goBack} className="btn btn-outline-primary btn-sm" /> </th>

                        </tr>
                    <tr> 
                        <td>Name:</td>
                        <td> {this.state.planetDetailData.name} </td> 
                    </tr> 
                    <tr>
                        <td>Rotaion Prd. : </td>
                        <td> {this.state.planetDetailData.rotation_period} </td>
                    </tr>
                    <tr>
                        <td>Orbitala Prd. : </td>
                        <td> {this.state.planetDetailData.orbital_period}  </td>
                    </tr>
                    <tr>
                        <td>Diameter: </td>
                        <td> {this.state.planetDetailData.diameter} </td>
                    </tr>
                    <tr>
                        <td>Climate: </td>
                        <td>{this.state.planetDetailData.climate} </td>
                    </tr>
                    <tr>
                        <td>Gravity: </td>
                        <td>{this.state.planetDetailData.gravity} </td>
                    </tr>
                    <tr>
                        <td>Terrain: </td>
                        <td>{this.state.planetDetailData.terrain} </td>
                    </tr>
                    <tr>
                        <td>Surface Water: </td>
                        <td>{this.state.planetDetailData.surface_water} </td>
                    </tr>
                    <tr>
                        <td>Population: </td>
                        <td> {this.state.planetDetailData.population} </td>
                    </tr>
                    <tr>
                        <td>Created: </td>
                        <td>{this.state.planetDetailData.created} </td>
                    </tr>
                    <tr>
                        <td>Edited: </td>
                        <td>{this.state.planetDetailData.edited} </td>
                    </tr>
                    <tr>
                        <td>Url: </td>
                        <td> {this.state.planetDetailData.url}</td>
                    </tr>
                    <tr>
                        <td>
                            <input type='button' value='Go Back to Search' onClick={this.goBack} className="btn btn-outline-primary btn-sm" />
                        </td>
                    </tr>
                    </tbody>
                 </table>   
             </div>   
        )
    }
    }
}

export default PlanetDetail