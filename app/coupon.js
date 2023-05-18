import styles from './coupon.module.css';
import Image from "next/image";

export default function coupon({dish, price, offer}){
    return(
        <div className={styles.couponContainer}>
            <div className={styles.content}>
                <div className={styles.details}>
                    <span className={styles.type}>{dish}</span>
                    <span className={styles.value}>₹{price}/-</span>
                </div>
                <div className={styles.stickers}>
                    <Image width={19} height={19} priority src="/images/Discount.png" alt="" />
                    <p className={styles.offer}>{offer}</p>
                </div>
            </div>
        </div>
    );
}