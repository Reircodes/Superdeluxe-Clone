import React from 'react';
import { Work } from '../../components/index';
import './RecentWork.css'


const RecentWork = () => {
  return <section className='recentwork'>
           <div className="recentwork__container">
              <div className="recentwork__container-text ">
                  <h1>
                  RECENT WORK 
                  </h1>
                  <h2>
                  Our Works
                  </h2>
                  <p>
                  Check out some of the recent Jamstack websites and apps we’ve built for our clients!
                  </p>
                  </div>
                  {/* <div className="recentwork__container-works"> */}
                  <div className='work-one'>
                  <Work 
                  img='https://www.superdelux.dev/static/49a967986292887620ff8fa903524edd/58556/work_1.webp'
                  heading='NetNation'
                  paragraph = 'NetNation removes the friction and risk involved in delivering business-to-business web services. From ordering, fulfillment, to operational management.'
                  alt='NetNation Image'
                  />
                  </div>


                  <div className='work-two'>
                  <Work 
                  img='https://www.superdelux.dev/static/80b87fca4cb4188e50b8a0b8334060af/58556/work_4.webp'
                  heading='FireHydrant'
                  paragraph = 'FireHydrant creates consistency for the entire incident response lifecycle with FireHydrant, the incident management platform for teams of all sizes.'
                  alt='FireHydrant Image'
                  />

                  </div>
               <div  className='work-three'>
               <Work 
                  img='https://www.superdelux.dev/static/31478e51442d0bcda03b8abeae8ad2f1/58556/work_3.webp'
                  heading='Pixie'
                  paragraph = 'Pixie runs entirely inside your Kubernetes clusters without storing any customer data outside. Avoid trading-off depth of visibility due to the hassle and cost of trucking petabytes off-cluster.'
                  alt='Pixie Image'
                  />
               </div>

                  <div  className='work-four'>
                  <Work 
                  img='https://www.superdelux.dev/static/0b944e9facc854d73222a866ca5626e9/58556/work_2.webp'
                  heading='Irys'
                  paragraph = 'Irys optimizes the task of collaborating with your target audience so you can build better products, services, neighborhoods, and more.'
                  alt='Irys Image'
                  />
               
            {/* </div> */}
                  </div>
           </div>
  </section>
};

export default RecentWork;
