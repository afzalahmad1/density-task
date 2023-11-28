import React from "react";
import Photo from "../assets/Photos.png";
import Comanies from "../assets/Companies.png";
import * as styles from "../styles/photos.module.css";
const Photos = () => {
  return (
    <div className={styles.photoContainer}>
      <div className={styles.photoFlex}>
        <div className={styles.largeText}>Backed by the Best</div>

        <img src={Comanies} alt="c" id={styles.companies} />

        <img src={Photo} alt="d" id={styles.photos} />
      </div>
    </div>
  );
};

export default Photos;
