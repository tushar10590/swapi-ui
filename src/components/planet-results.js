import React, { Component } from 'react';
import PlanetBox from './planet-box';
import PlanetDetail from './planet-detail.js'

class PlanetResult extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedUrl:'',
            showDetail:false
        }
        this.getSelectedPlanetDetails = this.getSelectedPlanetDetails.bind(this)
        this.goBackToSearch = this.goBackToSearch.bind(this)
    }

    getSelectedPlanetDetails(planetUrl){
        console.log(planetUrl)
        this.setState({selectedUrl:planetUrl,showDetail:true})

    }
    goBackToSearch(){
        this.setState({showDetail:false})
    }

    render(){
        var resultRows = []
        this.props.planets.forEach((planet)=>{
            if(planet.name.indexOf(this.props.searchText) === -1){
                return ;
            }
            else{
                resultRows.push(<PlanetBox planet={planet} handleUrl={this.getSelectedPlanetDetails}/>)
            }
        })
        if(this.state.showDetail){
            return(
                <div>
                
                <PlanetDetail planetDetailUrl={this.state.selectedUrl} back={this.goBackToSearch}/>
              </div>
            )

        }
        else {
            return(
                <div className='container'>
                <div >
                <div >
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Population</th>
                            <th> Action </th>
                        </tr>
                        </thead>
                        <tbody>
                            {resultRows}
                        </tbody>
                    </table>
                </div>
                
                </div>
                </div>  
            )
            
        }
    
    }
}

export default PlanetResult