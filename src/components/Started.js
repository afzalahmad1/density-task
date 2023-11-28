import React from 'react'
import started from "../assets/SetStarted.png";
import * as styles from "../styles/started.module.css";
const Started = () => {
  return (
    <div className={styles.container}>
      <img src={started} alt="started" />
    </div>
  )
}

export default Started
