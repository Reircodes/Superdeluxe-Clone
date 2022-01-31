import React from 'react'
import { Products } from '..'
import './OurProducts.css'

const OurProducts = () => {
    return (
      <section className="ourproducts maintwo">
         <div className="ourproducts__container">
        <div className="ourproducts__container-text">
        <h1>
          PRODUCTS WE CRAFT
          </h1>
          <h2 className='text-gradient'>
          Perfect for SMBs to Enterprise  
          </h2>
          <p>
          Best things since sliced bread. Shaped with diligence and the highest software-craftsmanship.
          </p>
        </div>
         </div>

        <div className="ourproducts__products">
        <Products/>
        </div>
      </section>
    )
}

export default OurProducts
