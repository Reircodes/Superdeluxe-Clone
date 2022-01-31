import React from 'react'
import './Products.css'
import { Product } from '../../components/index'

const Products = () => {
    return (
      <section className="products">
          <div className="products__container">
              <Product
              heading='Progressive Web App'
              paragraph='Websites with beautiful interfaces and application-like functionalities.'
              img='https://www.superdelux.dev/static/da1a2c436e86d55861c44363ec6c7a00/71f5e/web.png'
              alt='web'/>
              <Product
              heading='Marketing Websites'
              paragraph='Websites designed to attract, engage, and convert your ideal audience.'
              img='https://www.superdelux.dev/static/b310503eb6449936c6a58b185df4d671/71f5e/marketing.png'
              alt='marketing'/>
              <Product
              heading='Ecommerce'
              paragraph='Modern E-commerce websites and apps optimized for growth.'
              img='https://www.superdelux.dev/static/b14ec0e25e42d071cc59ce43e42178fc/71f5e/ecommerce.png'
              alt='ecommerce'/>
          </div>
      </section>
    )
}

export default Products
