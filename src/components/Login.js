import React, { Component } from 'react'
import HeaderApi from '../api/HeaderApi'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            testEmailOrPhone:'',
            testPassword:''}
    }
    
    onInputItemChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    submitForm=()=>{
        if(this.state.testEmailOrPhone===''){
           return  alert('Email or phone required')
        }
        if(this.state.testPassword===''){
            return alert('Password is  required')
        }
        var uName=this.state.testEmailOrPhone;
        var password=this.state.testPassword;
        HeaderApi.loginPOST(uName,password)
                 .then((response)=>{
                     console.log(response);
                 }).catch((err)=>{
                     console.log(err)
                     
                 })
        
    }
    render() {
        return (
            <div >
            <h4>Login</h4>
            <br/>
        
                <div className="form-group mb-2">
                    <label for="exampleFormControlInput1">Email / Mobile Number</label>
                    <input type="text" className="form-control" onChange={this.onInputItemChange}  name='testEmailOrPhone' placeholder="Email/Phone"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Password</label>
                    <input type="password" className="form-control" onChange={this.onInputItemChange} name='testPassword' placeholder="Password"/>
                </div>
                <br/>
                <div className='text-center'>
                    <button className='login-btn' onClick={this.submitForm}>SUBMIT</button>
                    <br/>
                    <br/>
                    <a href='#' >Register Forgot Password ?</a>
                    <h6>or</h6>
                    <a href='#'  >Login with OTP</a>
                </div>
          
            </div>
        )
    }
}
