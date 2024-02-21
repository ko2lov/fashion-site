import React from 'react'
import styles from './Card.module.css'
import cat01Img from '../../fashion-images/categories/cat-01.jpg'
import arrImg from '../../fashion-images/icons/arrow.svg'

const Card = () => {
  return (
    <div className={styles.card}>
        <a href='#!' className={styles.card__link}> </a>
            <img className={styles.card__img} src={cat01Img} alt='Categori IMG'/>
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>Hoodies & Sweetshirt</div>
                    <div className={styles.card__muted}>Explore Now!</div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrImg} alt="arrImg" srcset="" />
                </div>
            </div>
        
    </div>
  )
}

export default Card