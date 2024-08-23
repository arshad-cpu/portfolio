import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import './Style.css'

const Projects = () => {

    const breadscrumbPaths=
    [
        { title: 'Home', to: '/'},
        {title: 'Projects', to:'/projects'}
    ];

  return (
   <section id="projects"
   className="container">
    <Breadcrumb paths={breadscrumbPaths}/>
    <h2 className='section-title'>
        <FontAwesomeIcon icon={faCode}
        className='mr-2'/>
        Projects
    </h2>
    <div className='row'>
        <div className='col-md-6'>
            <div className='card mb-4'>
                <div className='card-body'>
                <h5 className='card-title'>
                    Read For Speed - Smart India Hackathon
                </h5>
                <p className='card-text'>
                    Designed the UI and implemented CSS styling for the website,
                    optimizing performance and design across allpages
                </p>
                </div>
            </div>
        </div>
        <div className='col-md-6'>
            <div className='card mb-4'>
                <div className='card-body'>
                <h5 className='card-title'>
                    Read For Speed - Smart India Hackathon
                </h5>
                <p className='card-text'>
                    Designed the UI and implemented CSS styling for the website,
                    optimizing performance and design across allpages
                </p>
                </div>
            </div>
        </div>
        <div className='col-md-6'>
            <div className='card mb-4'>
                <div className='card-body'>
                <h5 className='card-title'>
                    Read For Speed - Smart India Hackathon
                </h5>
                <p className='card-text'>
                    Designed the UI and implemented CSS styling for the website,
                    optimizing performance and design across allpages
                </p>
                </div>
            </div>
        </div>
        <div className='col-md-6'>
            <div className='card mb-4'>
                <div className='card-body'>
                <h5 className='card-title'>
                    Read For Speed - Smart India Hackathon
                </h5>
                <p className='card-text'>
                    Designed the UI and implemented CSS styling for the website,
                    optimizing performance and design across allpages
                </p>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Projects
