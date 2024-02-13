import React from 'react'
import './brands.css'
import hm from '../../fashion-images/brands/HM.png'
import obey from '../../fashion-images/brands/Obey.png'
import shopify from '../../fashion-images/brands/Shopify.png'
import lacoste from '../../fashion-images/brands/Lacoste.png'
import levis from '../../fashion-images/brands/Levis.png'
import amazon from '../../fashion-images/brands/Amazon.png'


const Brands = () => {
  return (
    <section className='brands' >
      <div className="container">
        <ul className="brands-list">
          <li className="brands-list__item">
            <a href="#!" className="brands-list__link"><img src={hm} alt="hm" srcset="" /></a>
          </li>
          <li className="brands-list__item">
            <a href="#!" className="brands-list__link"><img src={obey} alt="obey" srcset="" /></a>
          </li>
          <li className="brands-list__item">
            <a href="#!" className="brands-list__link"><img src={shopify} alt="shopify" srcset="" /></a>
          </li>
          <li className="brands-list__item">
            <a href="#!" className="brands-list__link"><img src={lacoste} alt="lacoste" srcset="" /></a>
          </li>
          <li className="brands-list__item">
            <a href="#!" className="brands-list__link"><img src={levis} alt="levis" srcset="" /></a>
          </li>
          <li className="brands-list__item">
            <a href="#!" className="brands-list__link"><img src={amazon} alt="amazon" srcset="" /></a>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default Brands;