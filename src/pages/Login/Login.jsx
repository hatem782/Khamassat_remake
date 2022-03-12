import React from "react";
import Container from "../../components/containers/container1/Container";
import { H1, H3, P } from "../../components/H_Typograhy/H_typographys";
import styles from "./Login.module.css";

import khamassat from "../../assets/images/sites/3.PNG";
import ButtonFI from "../../components/buttons/Filled_W_icon/ButtonFI";

import { GrWindows } from "react-icons/gr";
import { FaGoogle } from "react-icons/fa";
import Input from "../../components/inputs/NormalInput/Input";
import ButtonF from "../../components/buttons/Filled/ButtonF";
import { Li, Ul, A } from "../../components/UL_LI/UL_LI_A";

function Login() {
  return (
    <div className={styles.login}>
      <Container>
        <div className={styles.content}>
          <H1>تسجيل الدخول</H1>

          <div className={styles.logo_txt}>
            <div className={styles.txt}>
              <H3>خمسات</H3>
              <P>khamsat.com</P>
            </div>
            <img src={khamassat} />
          </div>

          <div className={styles.buttons}>
            <div>
              <ButtonFI color="#0f4bac">
                باستخدام مايكروسوفت <GrWindows />
              </ButtonFI>
            </div>
            <div>
              <ButtonFI color="#dd4b39">
                باستخدام جوجل <FaGoogle />
              </ButtonFI>
            </div>
          </div>

          <div className={styles.hr}>
            <span>أو</span>
          </div>

          <div className={styles.inputs}>
            <Input
              label={"البريد الإلكتروني"}
              placeholder={"أدخل البريد الإلكتروني الخاص بك"}
            />
            <Input
              label={"كلمة المرور"}
              placeholder={"أدخل كلمة المرور الخاصة بك"}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <ButtonF>دخول</ButtonF>
          </div>

          <P>مساعدة</P>
          <div>
            <Ul>
              <Li>
                <A> لا أملك حساب بعد</A>
              </Li>
              <Li>
                <A>فقدت كلمة المرور</A>
              </Li>
              <Li>
                <A>لم يصلني رمز التفعيل</A>
              </Li>
            </Ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
