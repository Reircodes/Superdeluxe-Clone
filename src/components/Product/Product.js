import React from 'react'
import './Product.css'

const Product = ({heading , paragraph , img , alt}) => {
    return (
        <div className='product'>
            <div className="product__text">
                    <h1>
                    {heading}
                    </h1>
                    <p>
                   {paragraph}
                    </p>

            </div>
            <div className="product__img">
                <img src={img} alt='{alt}'/>

            </div>
        </div>
    )
}

export default Product
