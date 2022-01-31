import React from 'react'
import './OurTech.css'
import { Tech } from '../../components/index'

const OurTech = () => {
    return (
     <section className="ourtech maintwo">
         <div className="ourtech__container">
             <div className="ourtech__container-text">
                 <h1>
                 COOL TECH WE USE
                 </h1>
                 <h2 className='text-gradient'>
                 Building across the modern web
                 </h2>
                 <p>
                 We support and build on a variety of modern platforms based on your technical requirements.
                 </p>
             </div>
     <div className="ourtech__container-tech">
         <Tech
         heading='Data Source (CMS)'
         paragraph='This is how you manage the content'/>
         <Tech 
         heading='Build'
         paragraph='This is the frontend frameworks you build the sites with'/>
         <Tech
         heading='Deploy & CDN'
         paragraph='This is basically the server or hosting environments the websites live on'/>

     </div>
         </div>
     </section>
    )
}

export default OurTech
