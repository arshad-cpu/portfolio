import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

const Breadscrumbs = ({paths}) => {
  return (
    <div>
      <nav aria-label='breadscrumb'>
        <ol className='breadscrumb bg-light p-3 rounded'>
            <li className='breadscrumb-item'>
                <Link to="/">
                <FontAwesomeIcon icon={faHome}
                className='mr-2'/>
                {/* Home */}
                </Link>
            </li>
            {paths.map((path,index)=>(
            <li key={index} className={`breadscrumb-item${index===paths.length - 1 ? 
            ' active' : ''}` }>
                 {index !== paths.length - 1 ? ( 
                            <Link to={path.to}> 
                                {path.title} 
                            </Link> 
                        ) : ( 
                            <span>{path.title}</span> 
                        )} 
            </li>
            ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadscrumbs
