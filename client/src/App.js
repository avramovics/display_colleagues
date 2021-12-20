
import React, { Component } from 'react';

import { connect } from 'react-redux';
import SignIn from './auth/SignIn';
import './App.scss';

import DashBoardComponent from './components/DashBoardComponent'
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        { this.props.isLogged ? <DashBoardComponent /> : <SignIn /> }
      </div>
      );
    }
}

function mapStateToProps(state) {
  return {  isLogged: state.isLogged }
}
export default connect(mapStateToProps)(App)

