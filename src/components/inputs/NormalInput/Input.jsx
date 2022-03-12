import React from "react";

import styles from "./Input.module.css";

function Input({ onChange, value, label, placeholder }) {
  return (
    <div className={styles.input_container}>
      <h3 className={styles.label}>{label}</h3>
      <input placeholder={placeholder} className={styles.input} />
    </div>
  );
}

export default Input;
