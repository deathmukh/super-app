import React from 'react'
import LeftBanner from '../../Components/LeftBanner/LeftBanner'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'
import styles from './Register.module.css'

export default function Register() {
  return (
    <div className={styles.mainWrapper}>
      <div><LeftBanner /></div>
      <div><RegisterForm /></div>
    </div>
  )
}
