import InputBox from "../components/login/btn/inputBox";
import { BlueBtn } from "../components/login/btn/mainBtn";
import { NameLogo } from "../components/login/logos";
import styles from "./changePW.module.scss";

const ChangePW = () => {
  return (
    <section className={styles.changePW}>
      <h1 className={styles.title}>{"비밀번호 변경"}</h1>
      <div className={styles.inputs}>
        <h1 className={styles.largeText}>
          <span className={styles.blueText}>새 비밀번호</span>를 입력해주세요
        </h1>
        <InputBox
          type="password"
          placeholder={"새로운 비밀번호 입력(6-14자)"}
        />
        <InputBox type="password" placeholder={"새로운 비밀번호 확인"} />
        <BlueBtn text={"확인"} />
      </div>
      <NameLogo />
    </section>
  );
};

export default ChangePW;
