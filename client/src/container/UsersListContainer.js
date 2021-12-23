import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import CardComponent  from '../components/CardComponent'
import ListComponent  from '../components/ListComponent'
import FilterComponent  from '../components/FilterComponent'
import PropTypes from 'prop-types'

let Grid = (user) => <CardComponent user={user} key={ user.email } />
let List = (user) => <ListComponent user={user} key={ user.email } />

class UsersListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          responsData: null,
          display: "Grid"
        };

        this.handleView = this.handleView.bind(this);
      }
 
      // Get all users 
     async componentDidMount(){
        axios.defaults.headers.common.authorization = 'Bearer '.concat( this.props.isLogged.jwt ) 
        try{
            const response =  await axios({
            method: 'get',
            url: 'http://localhost:8080/api/users-data'
          })
          this.setState({ responsData: await response.data })
        }catch (err){
          this.setState({ responsData: [] })
          console.log(err)
        }

      }
      handleView(view){
        this.setState({ display:view })    
      }
    render() {

      let view = <div>{ !this.state.responsData ? "Loading" : "" }</div>;
      if( Array.isArray( this.state.responsData ) && this.state.display === "Grid" ){
        view = this.state.responsData.map( ( user ) => Grid( user ) ); 
      } else if( Array.isArray( this.state.responsData ) && this.state.display === "List" ){
        view = <ul className="list" aria-label="Personal lista"> { this.state.responsData.map( ( user ) => List( user ) ) } </ul> 
      }
      
        return (
          <div className="users-component container-fluid">
              <div className="row users-component_row">
              <FilterComponent  handleView={ this.handleView } />
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
