import styles from "./memberInfoEdit.module.scss";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import {
  ThickInputBox,
  ThickInputBoxWithTitle,
} from "../components/mypage/inputBox";
import { SaveBtn } from "../components/mypage/myPageBtn";
const MemberInfoEdit = () => {
  return (
    <section className={styles.memberInfoEdit}>
      <OtherTopBar title={"회원정보 수정"} />
      <section className={styles.content}>
        <ThickInputBoxWithTitle
          title={"이메일"}
          type={"email"}
          placeholder={"이메일을 입력하세요"}
        />
        <ThickInputBoxWithTitle
          title={"성명"}
          type={"text"}
          placeholder={"성명을 입력하세요"}
        />
        <ThickInputBoxWithTitle
          title={"휴대폰 번호"}
          type={"tel"}
          placeholder={"휴대폰 번호를 입력하세요"}
        />
        <ThickInputBoxWithTitle
          title={"주소"}
          type={"text"}
          placeholder={"주소를 입력하세요"}
        />
      </section>
      <div className={styles.fixed}>
        <SaveBtn />
      </div>
    </section>
  );
};

export default MemberInfoEdit;
