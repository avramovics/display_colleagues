import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../components/ButtonComponent';
import { authDispatch } from '../actions/authDispatch'

class SignOut extends Component {
    render() {
        return (
                <Button onClickEvent={ this.props.signOut } text="Sign out" type="btn action_btn" />
        );
    }
}
function mapDispatchToProps(dispatch) {
    return authDispatch(dispatch);
  }
export default connect(null, mapDispatchToProps)(SignOut)

