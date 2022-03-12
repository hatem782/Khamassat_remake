import React from "react";

import styles from "./UL_LI_Astyles.module.css";

function Ul({ children }) {
  return <ul className={styles.ul}>{children}</ul>;
}

function Li({ children }) {
  return <li className={styles.li}>{children}</li>;
}

function A({ children }) {
  return (
    <a href="#" className={styles.a}>
      {children}
    </a>
  );
}

export { Ul, Li, A };
