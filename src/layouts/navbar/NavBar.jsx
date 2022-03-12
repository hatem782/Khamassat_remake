import React from "react";
import ButtonOI from "../../components/buttons/Outlined_W_icon/ButtonOI";

import logo from "../../assets/images/Hsoub-h100-ar-b.png";

import { BiLogIn } from "react-icons/bi";
import { HiUserAdd } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";

import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.buttons}>
        <ButtonOI>
          حساب جديد <HiUserAdd />
        </ButtonOI>
        <ButtonOI>
          دخول <BiLogIn />
        </ButtonOI>
      </div>
      <div className={styles.logo_menu}>
        <img src={logo} />
        <button className={styles.menu}>
          <BiMenu />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
