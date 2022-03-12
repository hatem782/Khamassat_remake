import React from "react";

import styles from "./ButtonF.module.css";

function ButtonF({ children, onClick, color }) {
  return (
    <button style={{ backgroundColor: color }} className={styles.button}>
      {children}
    </button>
  );
}

export default ButtonF;
