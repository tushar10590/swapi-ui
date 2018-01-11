import React, { Component } from 'react';


class LoginForm extends Component
{
    
    constructor(props){
        super(props)
        console.log(this.props.users)
        
     
        
        this.state = {
            name:'',
             password:'',
             errorMsg: true,
             
             errorMsgString: ''
             
        }
        this.getData = this.getData.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
    
    
    buttonClick(event){
      
        console.log(this.state.name)
        console.log(this.state.password)
        if(this.state.name.trim() ==='' || this.state.password.trim() === ''){
            this.setState({errorMsg: false,errorMsgString:'User name and Password cannot  empty'})
            
        }
        else{
            if(this.props.users[this.state.name] === this.state.password.trim())
            {
                console.log('Authenticated')
                this.setState({errorMsg: true})
                this.props.authToggle(true,this.state.name)
            }
            else{
                console.log('Invalid user')
                this.setState({errorMsg: false})
                this.setState({errorMsgString:'Incorrect credentials'})
            }
            
        }
       
        
    }

    getData(event){
        
        this.setState({name:event.target.value})
    }
    getPassword(event){
        
        this.setState({password:event.target.value})
    }

    resetForm(){
        this.setState({name:'',password:''})
    }


    render()
    {
        return(
            <div className='jumbotron vertical-center'>
            <div className="alert alert-danger" hidden={this.state.errorMsg} role="alert">
                {this.state.errorMsgString}
            </div>
            <div className='container'>
            
               <form>
               <div className='row'>
                    <div className='col-3'><label> User Name: </label></div>
                    <div className='col-9'><input type='text' value={this.state.name} onChange={this.getData}  placeholder='Luke Skywalker'/></div>
               </div>
               <div class='row'>
                    <div className='col-3'><label> Password:</label> </div>
                    <div className='col-9'><input type='password' value ={this.state.password}  onChange={this.getPassword} /></div>
               </div>

               <div className='row'>
                   <div className='col-4'> <input type='button'  className='btn btn-primary' value='Log-In' onClick={this.buttonClick}/></div>
                   <div className='col-8'> <input type='button' onClick={this.resetForm} className='btn btn-danger' value='Reset'/></div>
                </div>
               </form>    
            </div>
            </div>
        );
    }

}

export default LoginForm;