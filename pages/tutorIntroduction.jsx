import styles from "./tutorIntroduction.module.scss";
import BottomTab from "../components/bottomtab";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import TutorInfoBox from "../components/mypage/tutorInfoBox";
import TutorProfileImg from "../components/mypage/tutorProfileImg";
import router from "next/router";
const TutorIntroduction = () => {
  return (
    <section className={styles.tutorIntroductionSection}>
      <OtherTopBar title={"튜터 소개"} />
      <section className={styles.basicInfo}>
        <h1 className={styles.title}>기본정보</h1>
        <div className={styles.profile}>
          <TutorProfileImg />
          <div>
            <TutorInfoBox category={"이름"} content={"김하나"} />
            <TutorInfoBox category={"영문이름"} content={"-"} />
            <TutorInfoBox category={"휴대폰번호"} content={"010.1234.5678"} />
            <TutorInfoBox category={"이메일"} content={"aaaa@naver.com"} />
          </div>
        </div>
      </section>
      <div className={styles.line} />

      <section className={styles.academicInfo}>
        <h1 className={styles.title}>학력정보</h1>
        <TutorInfoBox category={"최종학력"} content={"-"} />
        <TutorInfoBox category={"학교 명"} content={"-"} />
        <TutorInfoBox category={"전공 명"} content={"-"} />
        <TutorInfoBox category={"그 외 학력"} content={"-"} />
      </section>

      <section className={styles.careerInfo}>
        <h1 className={styles.title}>경력정보</h1>
        <TutorInfoBox category={"직업"} content={"-"} />
        <TutorInfoBox category={"직장 명"} content={"-"} />
        <TutorInfoBox category={"그 외 경력"} content={"-"} />
        <TutorInfoBox category={"자격증"} content={"-"} />
      </section>
      <section className={styles.intro}>
        <h1 className={styles.title}>소개</h1>
        <span className={styles.text}>-</span>
      </section>
      <div className={styles.fixed}>
        <BottomTab />
        <button
          type="button"
          className={styles.edit}
          onClick={() => router.push("tutorInfoEdit")}
        />
      </div>
    </section>
  );
};

export default TutorIntroduction;
