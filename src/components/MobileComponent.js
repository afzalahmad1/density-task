import React from "react";
import * as styles from "../styles/mobile.module.css";
import image1 from "../assets/OneApp.png";
import image2 from "../assets/DerivativeTrading.png";
import image3 from "../assets/NowHere.png";
import CoinDCX from "../assets/coinDox.png";
import Density from "../assets/density.png";
import Delta from "../assets/delta.png";

const MobileComponent = () => {
  return (
    <div>
      <div className={styles.mobileContainer}>
        <div className={styles.mobileFlex}>
          <div>
            <img src={image1} alt="mobile" />
          </div>
          <div>
            <img src={image2} alt="mobile" />
          </div>
          <div>
            <img src={image3} alt="mobile" />
          </div>
        </div>
      </div>

      <div className={styles.textCenter}>
        <div>
          <div className={styles.largeText}>
            Trade More <div className={styles.square}></div>{" "}
            <span className={styles.color}>Pay Less</span><div className={styles.square1}></div>
          </div>
          <div className={styles.smallText}>
            Our low Fees Supercharge Your Profits
          </div>
        </div>
      </div>
      <div className={styles.imgFlex}>
        <img src={CoinDCX} alt="coin" />
        <img src={Density} alt="density" id={styles.densityImage}/>
        <img src={Delta} alt="delta" />
      </div>
    </div>
  );
};

export default MobileComponent;
