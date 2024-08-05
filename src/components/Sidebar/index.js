import { Link, NavLink} from 'react-router-dom';
import './index.scss';
import logoDF from '../../assets/images/DF.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return(
        <div className="nav-bar">    
            <Link className='logo' to='/'>
            <img src={logoDF} alt='logo'/>
            </Link>
            <nav>

                <NavLink exact="true" activeclassname="active" to='/' >  
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="about-link" to='/about' >  
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="projects-link" to='/projects' >  
                    <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact' >  
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/dor-frechter-35147a2a1/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/dorfrechter" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/d_frechter/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;