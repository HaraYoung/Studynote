import React from 'react'
import styles from '../styled/CssModule.module.css';

const CssModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요!! <span className='something'>CSS Module!</span>
    </div>
  )
}

export default CssModule