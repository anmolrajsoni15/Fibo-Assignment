"use client";

import styles from "./menu.module.css";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";

export default function menu({ image, name, time, cal }) {
  return (
    <div className={styles.container}>
      <div className={styles.imagePart}>
        <Image width={56.36} height={56.36} priority src={image} alt="" />
      </div>
      <div className={styles.mainPart}>
        <p>{name}</p>
        <ul>
          <li>{time} min</li>
        </ul>
      </div>
      <div className={styles.rightPart}>
        <div className={styles.calories}>{cal} Kcal</div>
        <AddIcon className={styles.addIcon} />
      </div>
    </div>
  );
}
