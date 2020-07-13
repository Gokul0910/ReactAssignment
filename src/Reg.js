import React from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted success");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "Enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "Enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "Enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "Enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "Enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "Enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "Enter secure and strong password.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
     <center>
     <AppBar position="static">
        <Toolbar variant="dense">
         
          <Typography variant="h6" color="inherit">

          </Typography>
        </Toolbar>
      </AppBar>

        <h3>Registration page</h3>
        <FormControl method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
       
        <TextField type="text" label="Username:" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        
        <TextField label="Email_id:" type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        
        <TextField label="Mobile no:" type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        
        <TextField label="Password:" type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <br/>
        <Button variant="contained" color="primary" onClick={this.submituserRegistrationForm}>Register</Button>

        </FormControl>
    </center>

      );
  }


}


export default RegisterForm;