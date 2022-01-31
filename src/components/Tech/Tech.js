import React from 'react'
import './Tech.css'

const Tech = ({heading , paragraph}) => {
    return (
        <div className='tech'>
            <h1>
            {heading}
            </h1>
            <p>
           {paragraph}
            </p>
            <div className="tech__svg">
            
            </div>
        </div>
    )
}

export default Tech
