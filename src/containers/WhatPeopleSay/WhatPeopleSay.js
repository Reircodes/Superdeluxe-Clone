import React from 'react';
import { Testimonial } from '../../components/index';
import './WhatPeopleSay.css'

const WhatPeopleSay = () => {
  return (
  <section className="whatpeoplesay maintwo">
      <div className="whatpeoplesay__container">
         <div className="whatpeoplesay__container-text">
         <h1>
          WHAT PEOPLE SAY 
          </h1>
          <h2 className ='text-gradient'>
          Trusted by our Clients
          </h2>
         </div>

         <div className="whatpeoplesay__container-testimonials">
             <Testimonial
             paragraph = 'The team has been a reliable source of support and innovation even after the website was launched.'
            img='https://www.superdelux.dev/static/7d41b8d31f0119de1f331ba5652d1ca0/2904c/joanna.jpg'
            name ='Joanna Lin' />
             <Testimonial
             paragraph = 'Such a versatile and inspiring group. I have recommended to a number of other companies.'
            img='https://www.superdelux.dev/static/f1bc475756b1bca2517ca2f44619e40f/2904c/beto.jpg'
            name ='Beto Gomez' />
             <Testimonial
             paragraph = 'You’ve been such a big part of our success. We appreciate the persistence, focus and effort.'
            img='	https://www.superdelux.dev/static/5063f7bf0efa563644446be1032b958a/2904c/ishan.jpg'
            name ='Ishan Mukherjee' />

             </div>



      </div>

  </section>
  
  )
};

export default WhatPeopleSay;
