import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types'

import React from 'react';

const Github = <FontAwesomeIcon icon={faGithub} size="2x"  />
const Twitter = <FontAwesomeIcon icon={faTwitter} size="2x" />
const Linkedin = <FontAwesomeIcon icon={faLinkedinIn} size="2x" />

function ListComponent(props) {
    return (
            <li className="list">
                <div className="list__items">
                    <span tabIndex="0">{props.user.name}</span> 
                    <span tabIndex="0">{props.user.office}</span>
                </div>
                <div className="list__social">
                    { props.user.linkedIn ? <a className="nostyle linkedin" 
                        href={["https://www.linkedin.com/", props.user.linkedIn].join('')} 
                        title="linkedin profile" > 
                        {Linkedin} 
                    </a> : "" }
                    { props.user.gitHub ? <a className="nostyle github" 
                    href={["https://github.com/", props.user.gitHub].join('')} 
                    title="github profile" > 
                        {Github} 
                    </a> : "" }
                    { props.user.twitter ? <a className="nostyle twitter" 
                        href={["https://twitter.com/", props.user.twitter].join('')} 
                        title="twitter profile" > 
                        {Twitter} 
                    </a> : "" }
                </div>
            </li>
    );
}


ListComponent.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        office: PropTypes.string,
        linkedIn: PropTypes.string,
        gitHub: PropTypes.string,
        twitter: PropTypes.string,
      })
  }

export default ListComponent;