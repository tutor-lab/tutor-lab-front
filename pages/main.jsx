import styles from "./main.module.scss";
import Image from "next/image";
import { WhiteBtn, BlueBtn } from "../components/login/btn/mainBtn";
import TextBtn from "../components/login/btn/textBtn";
import { ImageLogo, TextLogo } from "../components/login/logos";
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
        <BlueBtn text={"튜터로 로그인"} />
        <TextBtn text={"회원가입"} />
      </div>
      <span className={styles.tutorlabText}>@tutorlab</span>
    </section>
  );
};

export default Main;
