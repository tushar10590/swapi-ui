import React, { Component } from 'react';
import LoginForm from "./login-form.js";
import PlanetSearch from "./planet-search.js";
import {fetchPlanetData ,fetchPersonsData } from './service.js'


class LoginManage extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            auth: false,
            planetDetailArray: [],
            usersAuthData : {},
            loadDonePlanet:false,
            loadDonePerson:false,
            user:''
        }

        fetchPlanetData().then((data)=>{
            console.log(data)
            this.setState({planetDetailArray:data, loadDonePlanet:true})
        })
        fetchPersonsData().then((userData)=>{
            console.log(userData)
            this.setState({usersAuthData:userData,loadDonePerson:true})
            
        })
        .catch((err)=>{
            console.log("Something went wrong")
        })
        this.changeAuthState = this.changeAuthState.bind(this)
    
    }

    changeAuthState(authValue,logedUser){
        this.setState({auth:authValue, user:logedUser})
    }

    render(){
        if(this.state.loadDonePerson & this.state.loadDonePlanet){
            if(this.state.auth){
                return <PlanetSearch authToggle={this.changeAuthState} planets={this.state.planetDetailArray} user={this.state.user}/>
            }
            else{
                return <LoginForm authToggle={this.changeAuthState} users={this.state.usersAuthData}/>
            }

        }
        else{
            return (<h1>Loading...</h1>)
        }
        
        
    }

}

export default LoginManage