import React from "react";
import * as styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn ,faFacebookF,faInstagram} from '@fortawesome/free-brands-svg-icons'
import Logo from "../assets/densityLogo.png";

const Footer = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.densityContainer}>
          <img src={Logo} alt="logo" />
          <div>density</div>
        </div>
        <div className={styles.contact}>
          <div>Blog</div>
          <div>Fees</div>
          <div>Leaderboard</div>
          <div>Carrers</div>
          <div>Contact Us</div>
          <div>Privacy Policy</div>
        </div>
      </div>
      <div className={styles.para}>
        Lorem ipsum dolor, sit Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Ab maiores consequuntur nisi voluptatibus <br />{" "}
        accusantium, ipsa nostrum veniam veritatis efasgs sgrdhsrggn dsfxscn
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
};

export default Footer;
