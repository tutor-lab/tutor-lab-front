import BottomTab from "../components/bottomtab";
import SearchSection from "../components/mypage/searchSection";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import { RefundBox } from "../components/mypage/tuteeBox";
import styles from "./refundList.module.scss";
const RefundList = () => {
  const price = 197000;
  return (
    <section className={styles.refundList}>
      <OtherTopBar title={"환불 목록"} url={"/mypage"} />
      <SearchSection text1={"전체 환불"} text2={"최근 1년"} />
      <div className={styles.line} />
      <section className={styles.refundContent}>
        <RefundBox
          date={"2021.07.01"}
          name={"김민영"}
          title={"금융권 취업을 위한 데이터 분석 및 모델링 SQL, R, Python"}
          type={"온라인/그룹"}
          price={price.toLocaleString("ko-KR")}
        />
        <RefundBox
          date={"2021.07.01"}
          name={"김민영"}
          title={"금융권 취업을 위한 데이터 분석 및 모델링 SQL, R, Python"}
          type={"온라인/그룹"}
          price={price.toLocaleString("ko-KR")}
        />
        <RefundBox
          date={"2021.07.01"}
          name={"김민영"}
          title={"금융권 취업을 위한 데이터 분석 및 모델링 SQL, R, Python"}
          type={"온라인/그룹"}
          price={price.toLocaleString("ko-KR")}
        />
        <RefundBox
          date={"2021.07.01"}
          name={"김민영"}
          title={"금융권 취업을 위한 데이터 분석 및 모델링 SQL, R, Python"}
          type={"온라인/그룹"}
          price={price.toLocaleString("ko-KR")}
        />
      </section>
      <div className={styles.fixed}>
        <BottomTab num={3} />
      </div>
    </section>
  );
};

export default RefundList;
