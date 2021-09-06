import styles from "./main.module.scss";
import { WhiteBtn, BlueBtn } from "../components/login/btn/mainBtn";
import TextBtn from "../components/login/btn/textBtn";
import { ImageLogo, TextLogo } from "../components/login/logos";
import router from "next/router";
const Main = () => {
  return (
    <section className={styles.main}>
      <span className={styles.imageLogo}>
        <ImageLogo />
      </span>
      <span className={styles.textLogo}>
        <TextLogo />
      </span>
      <div className={styles.buttons}>
        <WhiteBtn text={"튜티로 로그인"} />
        <BlueBtn text={"튜터로 로그인"} onClick={() => router.push("/login")} />
        <TextBtn text={"회원가입"} onClick={() => router.push("/signup")} />
      </div>
      <span className={styles.tutorlabText}>@tutorlab</span>
    </section>
  );
};

export default Main;
