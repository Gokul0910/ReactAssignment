import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

class LoginForms extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    login_email: '',
    login_password: '',
    email_id_error:false,
    password_error:false,
    login_error_msg:false,
  };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateloginform = this.validateloginform.bind(this);
  }


  validateloginform(login_email, login_password){
    const errors = [];
    //Email Id
    if (login_email.length === 0) {
    this.setState({
      login_email_error: true
    })
    errors.push("Please Enter Your Email Id");
    }else{
     //Check if Email already exists
      if(login_email.includes(login_email) != true){
      this.setState({
        login_email_error: true
      })
      errors.push("Email Id Doesn't Exists");
      }
    }
    //Validate Email
    if (login_email.length !== 0) 
    {
      if (login_email.split("").filter(x => x === "@").length !== 1) {
      this.setState({
        login_email_valid_error: true
      })
      errors.push("Please Enter Valid Email Id");
      }
      if (login_email.indexOf(".") === -1) {
      this.setState({
        login_email_valid_error: true
      })
      errors.push("Email should contain at least one dot");
      }
    }
   
    //Password
    if (login_password.length === 0) {
    this.setState({
      login_password_error: true
    })
    errors.push("Please Enter Your Password");
    }
    return errors;
  }


  handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

  handleSubmit(e){
    e.preventDefault();
  this.setState({
      login_email_error: false,
      login_email_valid_error: false,
      login_password_error: false,
      
    })
  const errors = this.validateloginform(this.state.login_email, this.state.login_password);
  if(errors.length!='0')
  {
    this.setState({
    login_error_msg:true,
    })

  }
  else{
    const login = {
      email: this.state.login_email,
      password: this.state.login_password,
    }
  }
}

  render() {
      return (
      <center>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          
                 <TextField  type="text" size="small"  name="login_email" label="Enter Email Id:" onChange={this.handleChange}></TextField>
                

                {this.state.login_email_error ?
                  <div style={{color: 'blue', marginLeft: '10px'}} id="login-email-error">Please Enter Your Email Id</div>
                  :
                  <div></div>
                }
                {this.state.login_email_valid_error ?
                  <div style={{color: 'blue', marginLeft: '10px'}} id="login-email-valid-error">Please Enter Valid Email Id</div>
                  :
                  <div></div>
                }
                  <br/>
                  <TextField type="password"  name="login_password" label="Enter Password:" onChange={this.handleChange}></TextField>
                  
                  {this.state.login_password_error ?
                      <div style={{color: 'red', marginLeft: '10px'}} id="login-password-error">Please Enter Your Password</div>
                      :
                      <div></div>
                    }
                    {this.state.login_password_error_msg ?
                      <div style={{color: 'red', marginLeft: '10px'}} id="login-password-match-error">Your Password Doesn't Match</div>
                      :
                      <div></div>
                    }
        
              <br/>
              <Button variant="contained" color="primary" onClick={this.handleSubmit}>LOGIN</Button>
            
        </form>
  </center>
      )
    }
    }
export default LoginForms;