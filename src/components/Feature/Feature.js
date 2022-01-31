import React from 'react'
import './Feature.css'

const Feature = ({img , alt ,heading ,paragraph }) => {
    return ( 
        <div className = 'feature'>
            <div className="feature__container feature__container-grid">
            <div className="feature__container-img">
                <img src={img} alt={alt}/>
            </div>
                <div className="feature__container-text feature__container-grid">
                       <h2>
                         {heading}
                       </h2>
                       <p>
                       {paragraph}
                       </p>
                </div>
                
            </div>


        </div>
    )
}

export default Feature