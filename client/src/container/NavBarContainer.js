import { Component } from 'react';
import { connect } from 'react-redux';
import SignOut from '../auth/SignOut'
class NavBarContainer extends Component {
    render() {
       const url = window.location;
        return (
            <nav className="container-fluid nav_bar">
                <div className="row nav_bar__row">
                    <div className="nav_bar__logo">
                        <a href={ [ url.protocol, "//", url.host , "/" ].join('') } title="logo" >The fellowship of 1337</a>
                    </div>
                    <div className="nav_bar__menu">
                        <SignOut />
                    </div>
                </div>
          </nav>
       
        );
    }
}

function mapStateToProps(state) {
    return { counter: state.counter }
  }
  export default connect(mapStateToProps,null)(NavBarContainer)
