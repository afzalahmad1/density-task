import React from 'react'
import image1 from "../assets/iphone_middle.png"
import image2 from "../assets/addAmmount.png"
import image3 from "../assets/iphone_right.png"
import Logo1 from "../assets/User.png"
import Logo2 from "../assets/CoinLogo.png"
import Logo3 from "../assets/TradeLogo.png"
import * as styles from "../styles/register.module.css"

const RegisterDetails = () => {
  return (
    <div className={styles.registerContainer}>
      <div >
        <div className={styles.largeText}>Derivates made simple <br /> in <span>3 Easy</span> Steps</div>
        <div className={styles.imageFlex}>
            <img src={image1} alt="iphone" />
            <div>
                <img src={Logo1} alt="logo" className={styles.logo}/>
                <h3>Create an Account</h3>
                <p>Register & Complete your <br />
                Verification in less than 2 minutes</p>
               <div className={styles.tradeBtn}>TRADE NOW</div>
            </div>
        </div>
        <div className={styles.imageFlex}>
        <img src={image2} alt="iphone" />
            <div>
                <img src={Logo2} alt="logo" className={styles.logo}/>
                <h3>Deposit Funds</h3>
                <p>Add funds quickly using a variety <br />
                of payment methods</p>
               <div className={styles.tradeBtn}>TRADE NOW</div>
            </div>
        </div>
        <div className={styles.imageFlex}>
        <img src={image3} alt="" />
            <div>
                <img src={Logo3} alt="logo" className={styles.logo}/>
                <h3>Become a Trader</h3>
                <p>Choose Your Trading Pair & Trade<br />
                Seamlessly</p>
               <div className={styles.tradeBtn}>TRADE NOW</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterDetails
