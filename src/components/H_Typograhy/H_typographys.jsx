import React from "react";

import styles from "./Hstyles.module.css";

function H1({ children }) {
  return <h1 className={styles.h1}>{children}</h1>;
}

function H3({ children }) {
  return <h3 className={styles.h3}>{children}</h3>;
}

function P({ children }) {
  return <p className={styles.p}>{children}</p>;
}

export { H1, H3, P };
