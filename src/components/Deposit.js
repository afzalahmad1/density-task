import React from "react";
import deposit from "../assets/Deposit.png";
import Manager from "../assets/Manager.png";
import * as styles from "../styles/deposit.module.css";
const Deposit = () => {
  return (
    <div className={styles.depositContainer}>
      <div>
        <div>
          <div className={styles.largeText}>
            Start Small <div className={styles.circle}></div> Earn Big{" "}
            <div className={styles.circle}></div>
          </div>
          <div className={styles.smallText}>
            Deposity a minimum of 1000 and get a Deposit bonus + <br />{" "}
            dedicated relationship manager
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <img src={deposit} alt="deposit" />
        <img src={Manager} alt="manager" />
      </div>
    </div>
  );
};

export default Deposit;
