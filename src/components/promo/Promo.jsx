import React from 'react'
import './promo.css'

import promoImg from './../../fashion-images/images/header-img.jpg'


const Promo = () => {
  return (
    <section className='promo'>
        <div className="container">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">
                        <span className='highlight'>
                            <span>LET’S</span>
                        </span>
                         EXPLORE 
                         <span className='highlight__yellow'>
                            <span>UNIQUE</span>
                        </span> 
                         CLOTHES.
                    </div>
                    <div className='promo__desc'>Live for Influential and Innovative fashion!</div>
                    <div className='prom__btn-wrapper'>
                        <a href='#!' className='promo__btn'>Shop now</a>
                    </div>
                </div>
                <div className="promo__img">
                    <img src={promoImg} alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Promo