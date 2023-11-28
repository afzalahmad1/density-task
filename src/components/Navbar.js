import React from 'react'
import Logo1 from '../assets/logo1.png'
import * as styles from  '../styles/navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo1} alt="Logo" />
        <div className={styles.density}>density</div>
      </div>
      <div className={styles.rightHeader}>
        <div>Career</div>
        <div>Blogs</div>
        <div>Leaderboard</div>
        <div>Fees</div>
        <div className={styles.trade}>TRADE NOW</div>
      </div>
    </nav>
  )
}

export default Navbar
