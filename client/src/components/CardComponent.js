import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Github = <FontAwesomeIcon icon={faGithub} size="2x" />
const Twitter = <FontAwesomeIcon icon={faTwitter} size="2x" />
const Linkedin = <FontAwesomeIcon icon={faLinkedinIn} size="2x" />

function CardComponent(props) {
    return (
        <section className="card">
            <div className="card__img_wrapper">
                { props.user.imagePortraitUrl ? 
                    <img tabIndex="0" src={ props.user.imagePortraitUrl } alt="Profil bild"/> : 
                    <img src="/images/imagePlaceholder.png" alt="Place holder profile image" />
                } 
            </div> 
            <div className="card__body">
            <div className="card__info">
            <h3 tabIndex="0">{props.user.name}</h3>
            <span tabIndex="0">{props.user.office}</span>
            </div>
            <div className="card__social">
                { props.user.linkedIn ?  <a className="nostyle linkedin" 
                    href={["https://www.linkedin.com/", props.user.linkedIn].join('')} 
                    title="linkedin profile" > 
                        {Linkedin} 
                </a> : ""}
                { props.user.gitHub ?  <a className="nostyle github" 
                   href={["https://github.com/", props.user.gitHub].join('')} 
                   title="github profile" > 
                    {Github} 
                </a> : ""}
                { props.user.twitter ? <a className="nostyle twitter" 
                   href={["https://twitter.com/", props.user.twitter].join('')} 
                   title="twitter profile"> 
                    {Twitter} 
                </a> : "" }
            </div>
            </div>
        </section>
    );
}

export default CardComponent;