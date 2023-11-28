import React from "react";
import Tablet from "../assets/tradeTablet.png";
import Graph from "../assets/graph.png";

import * as styles from "../styles/candle.module.css";
const CandleGraph = () => {
  return (
    <div className={styles.candleBigContainer}>
      <div className={styles.candleContainer}>
        <div>
          <div className={styles.largeText}>
            Explore the Markets <br /> like it is your <span>Playground.</span>
          </div>
          <div className={styles.smallText}>
            Search for your davorite coins and stay ahead of the market
          </div>
        </div>

        <div>
          <img src={Tablet} alt="tablet" />
        </div>
        <div className={styles.exploreBtn}>EXPLORE MARKETS</div>
      </div>

      <div>
        <div className={styles.largeText}>
          <span>Unlock</span> New Frontiers.
        </div>
        <div className={styles.smallText}>
          Are you a stick trader loooking for new opportunities to make <br />{" "}
          money? We got you covered!
        </div>

        <div className={styles.candleBottomContainer}>
          <div className={styles.candleBottomFlex}>
            <div className={styles.candleBottomItems}>
              <div className={styles.candleBottomText}>
                Same <br /> Strategy
              </div>
            </div>
            <div className={styles.candleBottomItems}>
              <div className={styles.candleBottomText}>
                Same <br /> Indicators
              </div>
            </div>
            <div className={styles.candleBottomItems}>
              <div className={styles.candleBottomText}>
                Better <br /> Leverage
              </div>
            </div>
            <div className={styles.candleBottomItems}>
              <div className={styles.candleBottomText}>
                24x7 <br /> Trading
              </div>
            </div>
          </div>
        </div>

        <div className={styles.graph}>
            <img src={Graph} alt="graph" />
        </div>
      </div>
    </div>
  );
};

export default CandleGraph;
