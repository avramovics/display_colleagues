import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../components/ButtonComponent';
import { authDispatch } from '../actions/authDispatch'

class SignOut extends Component {
    signOut = ()=>{
        this.props.signOut()
        }
    render() {
        return (
                <Button onClickEvent={ this.signOut } text="Sign out" type="btn action_btn" />
        );
    }
}
function mapDispatchToProps(dispatch) {
    return authDispatch(dispatch);
  }
export default connect(null, mapDispatchToProps)(SignOut)

