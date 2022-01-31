import React from 'react';
import { Avatar } from '@mui/material';
import './Testimonial.css'

const Testimonial = ({paragraph , img  , name}) => {
  return <div className='testimonial'>
      <div className="testimonial__text">
             <p>
             "{paragraph}"</p> 
      </div>
      <div className="testimonial__details">
            <Avatar className='avatar' src={img}/>

            <p>
                {name}
            </p>
      </div>


  </div>;
};

export default Testimonial;
