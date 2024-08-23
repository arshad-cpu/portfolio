import React from 'react'
import './Style.css'
import  Breadcrumb  from './Breadscrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
const breadscrumbsPaths=[
    {title: 'Home', to: '/'},
    {title: 'Contact', to: '/contact'}
];

  return (
    <div>
      <section id='contact' className='container'>
        <Breadcrumb paths={breadscrumbsPaths}/>
        <h2 className='section-title'>Contact</h2>
            <p className='section-description'>
                Feel free to reach out for collaboration or inquiries.
            </p>
            <ul className='contact-list list-unstyled'>
                <li>
                    <FontAwesomeIcon icon={faEnvelope}
                    className='contact-icon'/>
                    mdarshad7012@gmail.com
                </li>
                <li>
                <FontAwesomeIcon icon={faLinkedin}
                    className='contact-icon'/>
                    Linkedin
                </li>
                <li>
                <FontAwesomeIcon icon={faGithub}
                    className='contact-icon'/>
                    Github
                </li>
                <li>
                <FontAwesomeIcon icon={faPhone}
                    className='contact-icon'/>
                    +918510080472
                </li>
            </ul>
        
      </section>
    </div>
  )
}

export default Contact
