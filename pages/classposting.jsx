import Image from "next/image";
import router from "next/router";
import styles from "../styles/classposting.module.scss";
import ClassCard from "../components/classcard";
import BottomTab from "../components/bottomtab";
import Data from "../data.json";

const ClassPosting = ({}) => {
  return (
    <>
      <div className={styles.whitesection}>
        <h1 className={styles.title}>튜터</h1>
        <div className={styles.category}>
          <button
            type="button"
            className={styles.unselected}
            onClick={() => router.push("/myclass")}
          >
            내 강의
          </button>
          <button
            type="button"
            className={styles.selected}
            onClick={() => router.push("/classposting")}
          >
            강의 등록
          </button>
        </div>{" "}
      </div>

      <div className={styles.graysection}>
        <div>
          <h3 className={styles.smallheadingB}>새로운 강의 등록하기</h3>
          <button
            type="button"
            className={styles.add}
            onClick={() => router.push("/classRegistration")}
          >
            <p>
              강의를 등록하고
              <br /> 더 많은 튜티들을 만나보세요!
            </p>
            <div className={styles.pluspic}>
              <Image
                src="/../public/images/plus.png"
                width="16px"
                height="16px"
                alt=""
              />
            </div>
          </button>
        </div>

        <div>
          <h3 className={styles.smallheadingM}>
            심사 중인 강의 {Data.testingcnt}개(최대 24시간 소요)
          </h3>
          {Data.classes.map((data, i) => {
            return data.testing ? (
              <ClassCard data={data} key={i}></ClassCard>
            ) : (
              <></>
            );
          })}
          {/* -> unique한 key값 필요 ==> 강의마다 id 부여 -> key={data.id}로 해결 */}
        </div>
        <div className={styles.fixedTab}>
          <BottomTab />
        </div>
      </div>
    </>
  );
};

export default ClassPosting;
