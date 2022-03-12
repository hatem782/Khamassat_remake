import React from "react";

import styles from "./ButtonOI.module.css";

function ButtonOI({ children, icon, onClick }) {
  return <button className={styles.button}>{children}</button>;
}

export default ButtonOI;
