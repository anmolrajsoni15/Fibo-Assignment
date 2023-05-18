"use client"

import styles from './page.module.css'
import ShareIcon from '@mui/icons-material/Share';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Menu from './menu.js';
import Coupon from './coupon.js';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bharadwaj}>
        <div className={styles.logo}></div>
        <div className={styles.details}>
          <p className={styles.mainText}>Bharadwaj Centre</p>
          <p className={styles.subText}>Food Influencer</p>
        </div>
      </div>
      <ShareIcon className={styles.shareIcon}/>
      <div className={styles.mainPart}>
        <KeyboardArrowUpIcon className={styles.arrowIcon}/>
        <div className={styles.mealsCorner}>
          <div className={styles.heading}>Food Centre</div>
          <div className={styles.content}>
            <div className={styles.contentHeading}>
              <span className={styles.name}>Noodles</span>
              <span className={styles.type}>Chinese</span>
            </div>
            <Menu image='/images/noodle1.png' name="Dandan Noodles" time="10" cal="75" />
            <Menu image='/images/noodle2.png' name="Chow Mein" time="10" cal="75" />
            <Menu image='/images/noodle3.png' name="Lo Mein" time="10" cal="75" />
          </div>

          <div className={styles.content}>
            <div className={styles.contentHeading}>
              <span className={styles.name}>Biryani</span>
              <span className={styles.type}>Indian</span>
            </div>
            <Menu image='/images/biryani1.png' name="Hydrabadi" time="10" cal="75" />
            <Menu image='/images/biryani2.png' name="Lucknowi" time="10" cal="75" />
            <Menu image='/images/biryani3.png' name="Kolkata" time="10" cal="75" />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.couponCorner}>
            <div className={styles.heading}>Meals Coupon</div>
            <div className={styles.couponContent}>
              <div className={styles.couponDetails}>
                <div className={styles.offer}>
                  <p className={styles.date}>27th JAN - 18th FEB</p>
                  <p className={styles.val}>UPTO 25% OFF</p>
                </div>
                <Coupon dish="Chinese" price="299" offer="22% + 30% off - Expires in 1h" />
                <Coupon dish="Indian" price="299" offer="22% + 30% off - Expires in 1h" />
                <Coupon dish="Korean" price="299" offer="22% + 30% off - Expires in 1h" />
              </div>
            </div>
          </div>
          <button className={styles.buttonSection}>
            Order Now
          </button>
        </div>
      </div>
      <div className={styles.gradientPart}></div>
      <div className={styles.gradientPart2}></div>
      <div className={styles.imageContainer}></div>
    </main>
  )
}
