import React from 'react'
import './Features.css'
import { Feature } from '../../components/index'




const Features = () => {
    return ( 
        <section className = 'features mainone' >
            <div className="features__container">

      <div className="">
      <Feature
         img='https://www.superdelux.dev/static/ba588382597d2705c6504bef74f72cc9/66e5b/fast.png'
         heading='Fast'
         paragraph='Jamstack websites and apps are simplified, pre-rendered, and direct, making them fast'
         alt='fast'

        />
      </div>
    
    <div className="">
    <Feature
         img='https://www.superdelux.dev/static/bd440e49dcfb038e3854fe8f3cd7907a/66e5b/secure.png'
         heading='SUPER SECURE'
         paragraph='Fewer moving parts makes your sites and apps less vulnerable to attacks.'
         alt='secure'
        />
    </div>
     

      <div className="">
      <Feature
         img='https://www.superdelux.dev/static/c4c34014edf1c6ba41f004c0fef82d58/66e5b/scalable.png'
         heading='SCALABLE'
         paragraph='Pages are pre-renedered in advance making it easy to support growing traffic.'
         alt='scalable'
        />
      </div>
      <div className="feature-four">
          
        <Feature
          img='https://www.superdelux.dev/static/028057ea3f9454dab6561f343e5250a2/66e5b/flexible.png'
          heading='FLEXIBLE'
          paragraph='Use a headless CMS to sseamlessly deliver content to multiple front-ends.'
          alt='flexible'
        />
      </div>
            </div>

        

        
          
        </section>
    )
}

export default Features