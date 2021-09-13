import router from "next/router";
import styles from "../styles/myclass.module.scss";
import ClassCard from "./classcard";
import BottomTab from "./bottomtab";
import Data from "../data.json";

const MyClass = ({}) => {
  return (
    <>
      <div className={styles.whitesection}>
        <h1 className={styles.title}>튜터</h1>
        <div className={styles.category}>
          <button
            type="button"
            className={styles.selected}
            onClick={() => router.push("/myclass")}
          >
            내 강의
          </button>
          <button
            type="button"
            className={styles.unselected}
            onClick={() => router.push("/classposting")}
          >
            강의 등록
          </button>
        </div>{" "}
      </div>
      <div className={styles.graysection}>
        <h3 className={styles.smallheadingB}>
          등록한 강의 총 {Data.registercnt}개
        </h3>
        {Data.classes.map((data, i) => {
          return data.register ? (
            <ClassCard data={data} key={i}></ClassCard>
          ) : (
            <></>
          );
        })}
        {/* -> unique한 key값 필요 ==> 강의마다 id 부여 -> key={data.id}로 해결 */}
        <div className={styles.fixedTab}>
          <BottomTab />
        </div>
      </div>
    </>
  );
};
export default MyClass;
