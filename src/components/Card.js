import React from "react";
import * as styles from "../styles/card.module.css";
import card from "../assets/Card.png";
const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <div>
          <div className={styles.largeText}>Dont't take our word for it.</div>
          <div className={styles.smallText}>
            Hear it from our expert community of traders who have made <br />{" "}
            insane amounts in a short amount of time
          </div>
        </div>
        <img src={card} alt="card" />
      </div>
    </div>
  );
};

export default Card;
