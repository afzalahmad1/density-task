import React from "react";
import * as styles from "../styles/tradeDetails.module.css";
const TradeDetails = () => {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsFlex}>
        <div className={styles.detailsItems}>
          <div className={styles.count}>00%</div>
          <div className={styles.detailsText}>Conversion fee</div>
        </div>
        <div className={styles.detailsItems}>
          <div className={styles.count}>500 Mn+</div>
          <div className={styles.detailsText}>Lifetime Volume Traded</div>
        </div>
        <div className={styles.detailsItems}>
          <div className={styles.count}>250+</div>
          <div className={styles.detailsText}>Total Tradable Pairs</div>
        </div>
        <div className={styles.detailsItems}>
          <div className={styles.count}>15,000+</div>
          <div className={styles.detailsText}>Traders</div>
        </div>
      </div>
    </div>
  );
};

export default TradeDetails;
