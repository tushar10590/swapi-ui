import React, { Component } from 'react';
import PlanetResult from './planet-results.js'

 class PlanetSearch extends Component{
    constructor(props){
        super(props)
        
        this.logOutUser = this.logOutUser.bind(this)
        this.state = {
            planetDetailArray :[{name:'Tatooine',population:'3333333'}],
            allKeysReceived: false,
            searchString:''
        }
        this.getSearchString = this.getSearchString.bind(this)
       
    }
   
    getSearchString(event){
        
        this.setState({searchString:event.target.value})

    }

    logOutUser(){
        this.props.authToggle(false,'')

    }

    render()
    {
        return( 
        <div>
            <div className='jumbotron vertical-center'>
            <div className='conatiner'>
                <div className='row'>
                    <label> Enter Planet Name, {this.props.user}: </label>
                </div>
               <div className='row'> 
                     <div className=''><input type='text' placeholder='enter planet name' onChange={this.getSearchString}/></div>
                     <div className=''><input type='button' value='Log-Out' onClick={this.logOutUser} className='btn btn-primary btn-sm'/></div>
               </div>

            </div>

           
            </div>

            <div className='container'>
                <PlanetResult planets={this.props.planets}  searchText={this.state.searchString}/>

            </div>
        </div>

        );
    }


}

export default PlanetSearch