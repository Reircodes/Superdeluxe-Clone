import React from 'react';
import './Work.css'

const Work = ({heading , img , paragraph , alt}) => {
  return <div className='work'>
       <div className="work__img">
            <img src={img} alt={alt}/>
       </div>
       <div className="work__text">
           <h1>
               {heading}
           </h1>

           <p>
               {paragraph}
           </p>
       </div>
  </div>;
};

export default Work;

