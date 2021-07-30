import React from "react";
import styles from "./horizontalComponent.module.scss";

const HorizontalComponent = props => (
    <div className={`${styles.horizontal_component} ${props.reflected && styles.reflected}`}>

        <div className={styles.half}>{props.left}</div>
        <div className={styles.half}>{props.right}</div>

    </div>
);

export default HorizontalComponent;