import React from 'react'
import Share from "../assets/Share.png";
import Bell from "../assets/Bell.png";
import Earn from "../assets/Earn.png";
import Invite from "../assets/Invite.png";
import * as styles from "../styles/referal.module.css";
const Referrals = () => {
  return (
    <div className={styles.refContainer}>
      <div>
        <div className={styles.bellFlex}>
            <div>
                <img src={Bell} alt="bell" id={styles.bell}/>
            </div>
            <div className={styles.largeText}>Earn Money. <span>The Easy Way.</span></div>
            <div className={styles.smallText}>No Complexity of Trading Fee. generate volume and win</div>
        </div>
        <div className={styles.imgFlex}>
            <img src={Share} alt="s" />
            <img src={Invite} alt="invite" />
            <img src={Earn} alt="earn" />
        </div>
        <div className={styles.colorBtn}>
            <div id={styles.colorBtn}>START EARNING NOW</div>
        </div>
      </div>
    </div>
  )
}

export default Referrals
