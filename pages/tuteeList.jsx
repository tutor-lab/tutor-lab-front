import OtherTopBar from "../components/mypage/topBar/otherPage";
import styles from "./tuteeList.module.scss";
import { TuteeBox, TuteeBox2 } from "../components/mypage/tuteeBox";
import BottomTab from "../components/bottomtab";
import SearchSection from "../components/mypage/searchSection";
const TuteeList = () => {
  const price = 197000;
  return (
    <section className={styles.tuteeList}>
      <OtherTopBar title={"튜티 목록"} />
      <SearchSection text1={"전체 튜티"} text2={"신규 튜티"} />
      <div className={styles.line} />
      <section className={styles.ing}>
        <h1 className={styles.title}>강의 진행 중인 튜티</h1>
        <TuteeBox name={"김민영"} count={"1"} />
      </section>
      <div className={styles.line} />
      <section className={styles.finished}>
        <h1 className={styles.title}>강의 종료된 튜티</h1>
        <TuteeBox name={"김민영"} count={"1"} />
      </section>
      <div className={styles.fixed}>
        <BottomTab />
      </div>
    </section>
  );
};

export default TuteeList;
