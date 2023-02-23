import React from 'react'
import styles from './LeftBanner.module.css'

export default function LeftBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.que}>Already have an account? </p>
        <button className={styles.loginBtn}>LOGIN</button>
      </div>
      {/* <img className={styles.img} src='images/image.png' alt='' /> */}
      <p className={styles.discover}>Discover new things on Superapp</p>
    </div>
  )
}