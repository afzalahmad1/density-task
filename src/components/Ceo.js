import React from 'react'
import * as styles from "../styles/ceo.module.css";
import CEO from "../assets/CEO.png";
const Ceo = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.largeText}>Meet <span>Visionaries </span> <br /> behind Density.</div>
      </div>
      <img src={CEO} alt="ceo" />
    </div>
  )
}

export default Ceo
