import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../components/ButtonComponent';
import PropTypes from 'prop-types'

const List = <span>Visa lista <FontAwesomeIcon icon={ faList } size="1x" /></span>
const Grid = <span>Visa grid <FontAwesomeIcon icon={ faTh } size="1x" /></span>

class FilterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: List
        };
    }
    handleToggleButton = () => {
        const buttonText = this.state.buttonText === Grid ? List : Grid;
        const viewType = buttonText === Grid ?  "List" : "Grid"; 
       
        this.props.handleView(viewType)
        
        this.setState({
            buttonText: buttonText
        });
    }
    render() {
        return (
            <section className="filter_bar">
              <Button onClickEvent={ this.handleToggleButton } text={this.state.buttonText} type="btn" />
            </section>
        );
    }
}
FilterComponent.propTypes = {
    handleView: PropTypes.func
  }
export default FilterComponent;