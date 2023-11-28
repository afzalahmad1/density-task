import React from "react";
import BG from "../assets/bg.png";
import * as styles from "../styles/imageBg.module.css";
const ImageBg = () => {
  return (
    <div className={styles.bigContainer}>
      <img src={BG} alt="bg" />

      <div className={styles.container}>
        <div>
          <div className={styles.bgBlur}>
            <div className={styles.largeText}>
              Trade Together. <span>Thrive Together.</span>
            </div>
            <div className={styles.smallText}>Join the fun-filled community on our platform.</div>
          </div>

          <div>
            <div>
              <div className={styles.detailsContainer}>
                <div className={styles.detailsFlex}>
                  <div className={styles.detailsItems}>
                    <div className={styles.count}>10,000+</div>
                    <div className={styles.detailsText}>Traders</div>
                  </div>
                  <div className={styles.detailsItems}>
                    <div className={styles.count}>100Mn+</div>
                    <div className={styles.detailsText}>
                      Daily Volume Traded
                    </div>
                  </div>
                  <div className={styles.detailsItems}>
                    <div className={styles.count}>Daily</div>
                    <div className={styles.detailsText}>
                      Trade Analysis
                    </div>
                  </div>
                  <div className={styles.detailsItems}>
                    <div className={styles.count}>Live</div>
                    <div className={styles.detailsText}>Signals</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.center}>
              <div className={styles.join}>JOIN COMMUNITY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBg;
