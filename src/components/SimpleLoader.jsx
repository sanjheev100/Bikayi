import React from 'react'
import styles from '../styles/Loader.module.css'

const SimpleLoader = () => {
  return (
    <div className={styles.body}>
      <ul>
        <li className={styles.li}></li>
        <li className={styles.li}></li>
        <li className={styles.li}></li>
        <li className={styles.li}></li>
        <li className={styles.li}></li>
      </ul>
    </div>
  )
}

export default SimpleLoader
