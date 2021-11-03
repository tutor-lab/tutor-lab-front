import styles from "./changePW.module.scss";
import { ThickInputBox } from "../components/mypage/inputBox";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import { BlueBtn } from "../components/mypage/myPageBtn";
const ChangePW = () => {
  return (
    <section className={styles.changePW}>
      <OtherTopBar title={"비밀번호 변경"} />
      <p className={styles.text}>
        주기적인 비밀번호 변경을 통해
        <br />
        개인정보를 안전하게 보호할 수 있습니다.
      </p>
      <div className={styles.line} />
      <section className={styles.content}>
        <ThickInputBox type={"password"} placeholder={"현재 비밀번호"} />
        <ThickInputBox
          type={"password"}
          placeholder={"새로운 비밀번호(6-14자 이내)"}
        />
        <ThickInputBox type={"password"} placeholder={"새로운 비밀번호 확인"} />
      </section>
      <div className={styles.fixed}>
        <BlueBtn text={"저장"} />
      </div>
    </section>
  );
};

export default ChangePW;
