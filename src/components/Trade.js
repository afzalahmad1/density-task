import React from "react";
import * as styles from "../styles/trade.module.css";
// import Image1 from "../assets/iPhone_left.png";
// import Image2 from "../assets/iPhone_middle.png";
// import Image3 from "../assets/iPhone_right.png";
import GroupImg from "../assets/Group.png";

const Trade = () => {
  return (
    <div>
      <div className={styles.tradeContainer}>
        <div>
          <h1>
            Its's time to trade, <br /> the <span>future.</span>
          </h1>
          <p>Trade BTC,ETH Futures With 125x Leverage And Earn Rewards.</p>
        </div>
      </div>
      <div className={styles.tradeContainer}>
        <div className={styles.phoneContainer}>
          
            {/* <img  src={Image1} alt="iphone1" id={styles.img1} />
          
          
            <img src={Image2} alt="iphone2" id={styles.img2}/>
          
          
            <img src={Image3} alt="iphone3" id={styles.img3}/> */}
            <img src={GroupImg} alt="groupImg" id={styles.groupImg}/>
        
        </div>
      </div>
    </div>
  );
};

export default Trade;
