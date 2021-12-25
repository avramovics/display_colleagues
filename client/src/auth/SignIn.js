import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { authDispatch } from '../actions/authDispatch'
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: '',
            responsData: ''
          }
    }
      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
      }
  
      handleSubmit = event => {
        event.preventDefault()

        axios({
          method: 'post',
          url: 'http://localhost:8080/login',
          data: { username: this.state.username, password: this.state.password }
        })
          .then(res => {
            this.props.signIn(res.data)
          })
          .catch(err => {
            this.setState({ responsData: 'Something went wrong!' })
            console.log(err)
          })
    }
    render() {
        return (
          <section className="container auth-form bg_color">
            <div className="row">
              <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <br />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="on"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <br />
                <input type="submit" className="btn action_btn"/>
                {this.state.responsData ? <span className="errorMessage">{this.state.responsData}</span> : ""}
              </form>
            </div>
   
          </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return authDispatch(dispatch);
}
export default connect(null, mapDispatchToProps)(SignIn)