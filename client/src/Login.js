import React, {Component} from 'react';
import 'whatwg-fetch';
import styled from 'styled-components';

const LoginWindow = styled.div`
  height: 70vh;
  width: 80vw;
  margin: 40px auto;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #333;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 65vw;
  padding-left: 20px;
  min-width: 200px;
  margin: 10px auto;
  height: 50px;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  color: white;
  font-size: 1.25em;
  cursor: pointer;
  border: none;
  background-color: palevioletred;
  margin: 10px auto;
`;

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(e) {
    let newState = Object.assign({}, this.state, {[e.target.type]: e.target.value});
    console.log(e.target)
    this.setState(newState);
  }

  login() {
    if (!(this.state.email || this.state.password)) {
      alert('You didnt put your credentials in!')
    } else {
      // We will be sending our user credentials here to authenticate. NOTE:
      // THIS METHOD IS NOT SECURE! This is great for an example to see how it
      // works, but in anything that will be used by the public, you should be
      // sending creds via an encrypted connection (HTTPS -- check out
      // https://www.letsencrypt.org to get started for free!) and sending them
      // with Auth Headers or something. Also --  You should not take network security
      // advice from me because i'm a scrub when it comes to that sort of stuff.
    }
  }
  render() {
    return (
      <LoginWindow>
        <h2>Log in to access all that good good hat action.</h2>
        <StyledInput
          type='email'
          placeholder='bryan@tinyhatstore.com'
          value={this.state.email}
          onChange={this.handleChange}
        />
        <StyledInput
          type='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <SubmitButton type='submit' onClick={this.login}>Log In!</SubmitButton>
      </LoginWindow>
    )
  }
}
