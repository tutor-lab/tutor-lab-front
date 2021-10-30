import OtherTopBar from "../components/mypage/topBar/otherPage";
import styles from "./tuteeList.module.scss";
import TuteeBox, { TuteeBox2 } from "../components/mypage/tuteeBox";
import BottomTab from "../components/bottomtab";
import SearchSection from "../components/mypage/searchSection";

const TuteeList = () => {
  return (
    <section className={styles.tuteeList}>
      <OtherTopBar title={"튜티 목록"} />
      <SearchSection text1={"전체 튜티"} text2={"신규 튜티"} />
      <div className={styles.line} />
      <section className={styles.ing}>
        <h1 className={styles.title}>강의 진행 중인 튜티</h1>
        <TuteeBox name={"김민영"} count={1} />
        <TuteeBox name={"김하나"} count={2} />
        <TuteeBox name={"김민호"} count={1} />
        <TuteeBox name={"이윤호"} count={3} />
        <TuteeBox name={"이나림"} count={1} />
      </section>
      <div className={styles.line} />
      <section className={styles.finished}>
        <h1 className={styles.title}>강의 종료된 튜티</h1>
        <TuteeBox name={"김민영"} count={1} />
        <TuteeBox name={"김하나"} count={1} />
        <TuteeBox name={"김민호"} count={2} />
        <TuteeBox name={"이윤호"} count={1} />
        <TuteeBox name={"이나림"} count={1} />
      </section>
      <div className={styles.fixed}>
        <BottomTab />
      </div>
    </section>
  );
};

const TuteeList2 = () => {
  const price = 197000;
  return (
    <section className={styles.tuteeList}>
      <OtherTopBar title={"튜티 목록"} />
      <SearchSection text1={"전체 튜티"} text2={"신규 튜티"} />
      <div className={styles.line} />
      <section className={styles.ing}>
        <h1 className={styles.title}>강의 진행 중인 튜티</h1>
        <TuteeBox2
          name={"김민영"}
          title={"금융권 취업을 위한 데이터 분석 및 모델링 SQL, R, Python"}
          type={"온라인/그룹"}
          price={price.toLocaleString("ko-KR")}
        />
        <TuteeBox2
          name={"김하나"}
          title={"데이터 분석 및 모델링 SQL, R, Python"}
          type={"온라인/1:1"}
          price={price.toLocaleString("ko-KR")}
        />
      </section>
      <div className={styles.line} />
      <section className={styles.finished}>
        <h1 className={styles.title}>강의 종료된 튜티</h1>
        <TuteeBox2
          name={"김하나"}
          title={"데이터 분석 및 모델링 SQL, R, Python"}
          type={"온라인/1:1"}
          price={price.toLocaleString("ko-KR")}
        />
      </section>
      <div className={styles.fixed}>
        <BottomTab />
      </div>
    </section>
  );
};

export default TuteeList2;
