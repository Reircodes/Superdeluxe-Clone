import React from 'react'
import './OurMotto.css'

const OurMotto = () => {
    return (
       <section className="ourmotto maintwo">
           <div className="ourmotto__container maintwo__container">
               <div className="ourmotto__container_text">
                   <h1>
                   OUR MOTTO
                   </h1>
                   <h2 className='text-gradient'>
                   Everyone at SuperDelux is here for the same reason: we see it as our duty to improve the user experience of the world by guiding clients through impactful digital transformations.
                   </h2>
                   <p>
                   Our people come from startups, not agencies. Instead of obsessing over awards, they’ve focused on satisfying customers and users. They’re ex-CEOs, ex-CTOs, ex-CMOs—people who know how to win in the marketplace.
                   </p>

               </div>
               <div className="ourmotto__container-img">
                   <img alt='people' src='https://www.superdelux.dev/static/d0116a036978383aef7e7d0ad2a32e80/ee604/People.png'/>

               </div>
           </div>
       </section>
    )
}

export default OurMotto
