import styles from "./ask.module.scss";
import OtherTopBar from "../components/mypage/topBar/otherPage";
const Ask = () => {
  return (
    <section className={styles.askSection}>
      <OtherTopBar title={"문의하기"} url={"/mypage"} />
      <p className={styles.text}>
        튜터랩을 이용하면서 생긴 불편사항이나 개선사항을
        <br />
        알려주세요. 전달해주신 소중한 의견으로 더 나은 <br />
        튜터랩이 되도록 노력하겠습니다.
      </p>
      <div className={styles.line} />
      <select
        className={styles.askType}
        placeholder={"문의 유형을 선택해주세요."}
      >
        <option value="오류 문의" className={styles.askOption}>
          오류 문의
        </option>
        <option value="튜터 문의" className={styles.askOption}>
          튜터 문의
        </option>
        <option value="튜티 문의" className={styles.askOption}>
          튜티 문의
        </option>
        <option value="강의 문의" className={styles.askOption}>
          강의 문의
        </option>
        <option value="기타" className={styles.askOption}>
          기타
        </option>
      </select>
      <input
        type="text"
        className={styles.title}
        placeholder={"제목을 입력해주세요. (20자 이내)"}
      />
      <input
        type="text"
        className={styles.content}
        placeholder={"의견을 입력해주세요.\n (최소 10자, 최대 1500자)"}
      />
    </section>
  );
};

export default Ask;
