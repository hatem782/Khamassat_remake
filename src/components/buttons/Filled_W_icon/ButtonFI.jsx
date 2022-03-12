import React from "react";

import styles from "./ButtonFI.module.css";

function ButtonFI({ children, onClick, color }) {
  return (
    <button style={{ backgroundColor: color }} className={styles.button}>
      {children}
    </button>
  );
}

export default ButtonFI;
