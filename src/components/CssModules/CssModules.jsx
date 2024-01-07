import React from "react";
import styles from "./CssModules.module.css";

function CssModules() {
  return (
    <div className={`${styles.test} mt-10`}>
      <h1 className={`${styles.title} ${styles['flex-center']}`}>This is a test</h1>
    </div>
  );
}

export default CssModules;
