import React from 'react'
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faUser } 
    from '@fortawesome/free-solid-svg-icons'; 
import './Style.css'; 

const About = () => {
  return (
    <section id="about"
            className="container text-center"> 
            <div className="row"> 
                <div className="col-md-8 offset-md-2"> 
                    <h2 className="section-title"> 
                        <FontAwesomeIcon icon={faUser} 
                            className="mr-2" /> 
                        About Me 
                    </h2> 
                    <div className="profile-image-container"> 

                        <img src="images/pic.jpg"
                            alt="pic"
                            className="img-fluid rounded-circle profile-image" /> 
                    </div> 
                    <p className="section-description mt-4"> 
                    Highly motivated Java Developer with 2+ years of experience. 
                    Successfully designed and developed APIs for an application. Experience working in an Agile development environment and collaborating effectively with cross-functional teams.
                    Eager to contribute to a fast-paced and innovative environment. I am committed to staying up to date with the latest technologies and I am always seeking new opportunities to learn and grow.
                    </p> 
                </div> 
            </div> 
        </section> 
  )
}

export default About

