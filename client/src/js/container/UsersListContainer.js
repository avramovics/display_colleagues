import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import CardComponent  from '../components/CardComponent'
import ListComponent  from '../components/ListComponent'
import FilterComponent  from '../components/FilterComponent'
import PropTypes from 'prop-types'

let Grid = (data) => data.map( ( user ) => <CardComponent user={user} key={ user.email } /> );  
let List = (data) => <ul className="list" aria-label="Personal lista"> { data.map( ( user ) => <ListComponent user={user} key={ user.email } />) } </ul> 

class UsersListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          responsData: null,
          display: "Grid",
          msg: null
        };

        this.handleView = this.handleView.bind(this);
      }

      // Get all users 
     async componentDidMount(){
        axios.defaults.headers.common.authorization = 'Bearer '.concat( this.props.isLogged.jwt ) 
        try{
            const response = await axios({
            method: 'get',
            url: 'http://localhost:8080/api/users-data'
          })
          if (response.data.some(element => element.hasOwnProperty('name'))) {
            this.setState({ responsData: response.data })
          }else{
            this.setState({ msg: 'There are no active records' })
          }
        }catch (err){
          this.setState({ msg: 'Something went wrong!' })
        }
      }
      handleView(layout){
        this.setState({ display : layout })    
      }
    render() {

      let view = this.state.msg ? 
        this.state.msg : 
          !this.state.responsData ? "Loading" : "" ;
 
      if( Array.isArray( this.state.responsData )){
        view = this.state.display === "Grid" ? 
          Grid( this.state.responsData ) :  
          List( this.state.responsData );
      } 
        return (
          <div className="users-component container-fluid">
              <div className="row users-component_row">
              <FilterComponent handleView={ this.handleView } />
              </div>
              <div className="row users-component_row">
              { view }
              </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return { isLogged: state.isLogged}
  }
  UsersListContainer.propTypes = {
    isLogged: PropTypes.shape({
      jwt: PropTypes.string
    })
  }


export default connect(mapStateToProps, null)(UsersListContainer)
