import styles from "./main.module.scss";
import { WhiteBtn, BlueBtn } from "../components/login/btn/mainBtn";
import { ImageLogo, TextLogo } from "../components/login/logos";
import router from "next/router";

const Main = () => {
  const token =
    typeof window !== "undefined"
      ? window.localStorage.getItem("accessToken")
      : null;

  if (token) {
    router.push("/myclass");
  }

  return (
    <div>
      <section className={styles.main}>
        <span className={styles.imageLogo}>
          <ImageLogo />
        </span>
        <span className={styles.textLogo}>
          <TextLogo />
        </span>
        <div className={styles.buttons}>
          <WhiteBtn
            text={"튜터로 로그인"}
            onClick={() => router.push("/login")}
          />
          <BlueBtn text={"회원가입"} onClick={() => router.push("/termsContainer")} />
        </div>
        <span className={styles.tutorlabText}>@tutorlab</span>
      </section>
    </div>
  );
};

export default Main;
