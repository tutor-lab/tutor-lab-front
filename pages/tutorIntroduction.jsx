import styles from "./tutorIntroduction.module.scss";
import BottomTab from "../components/bottomtab";
import OtherTopBar from "../components/mypage/topBar/otherPage";
const TutorIntroduction = () => {
  return (
    <section className={styles.tutorIntroductionSection}>
      <OtherTopBar title={"튜터 소개"} />
    </section>
  );
};

export default TutorIntroduction;
