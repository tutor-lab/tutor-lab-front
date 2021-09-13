import styles from "../styles/newclass03.module.scss";
import BottomTab from "./bottomtab";
import Image from "next/image";

const NewClass03 = ({ form, nextStep, prevStep, handleChange }) => {
  return (
    <>
      <section className={styles.whitesection}>
        <div className={styles.prev} onClick={prevStep}>
          <Image
            src="/images/prev.png"
            alt="강의 등록 2단계로"
            width="10px"
            height="14px"
          ></Image>
        </div>
        <h1 className={styles.title}>강의 등록</h1>
        <div className={styles.category}>
          <h2 className={styles.unselected}>1단계</h2>
          <h2 className={styles.unselected}>2단계</h2>
          <h2 className={styles.selected}>3단계</h2>
        </div>
      </section>

      <section className={styles.graysection}>
        <div>
          <h3 className={styles.question}>1. 가격을 입력해주세요.</h3>
          <div className={styles.cost}>
            <div className={styles.element}>
              <input
                type="number"
                placeholder="30000"
                className={styles.smallbox}
                onChange={handleChange("pricePerHour")}
                value={
                  form.update.pricePerHour == 0 ? "" : form.update.pricePerHour
                }
              />
              <span className={styles.unit}>원/시간</span>
            </div>
            <span>X</span>

            <div className={styles.element}>
              <input
                type="number"
                placeholder="60"
                className={styles.smallbox}
                onChange={handleChange("timePerClass")}
                value={
                  form.update.timePerClass == 0 ? "" : form.update.timePerClass
                }
              />
              <span className={styles.unit}>분/회</span>
            </div>
            <span>X</span>

            <div className={styles.element}>
              <input
                type="number"
                placeholder="10"
                className={styles.smallbox}
                onChange={handleChange("numOfTimes")}
                value={
                  form.update.numOfTimes == 0 ? "" : form.update.numOfTimes
                }
              />
              <span className={styles.unit}>회</span>
            </div>
          </div>

          <div className={styles.costsum}>
            <span> = </span>
            <div className={styles.sum}>
              <span className={styles.text}>최종 수강료 </span>
              <span className={styles.money}>
                <strong>
                  {(
                    (form.update.pricePerHour *
                      form.update.timePerClass *
                      form.update.numOfTimes) /
                    60
                  ).toLocaleString("ko-KR")}
                </strong>
                원
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className={styles.question}>
            2. 강의 방식(온/오프라인)을 선택해주세요.
            <span>*중복 선택 가능</span>
          </h3>
          <div className={styles.answer}>
            <input
              type="checkbox"
              id="online"
              onClick={handleChange("online")}
            />
            <label htmlFor="online">
              {form.update.online == "off" ? (
                <div className={styles.mediumbox}>온라인</div>
              ) : (
                <div className={styles.mediumboxActive}>온라인</div>
              )}
            </label>

            <input
              type="checkbox"
              id="offline"
              onClick={handleChange("offline")}
            />
            <label htmlFor="offline">
              {form.update.offline == "off" ? (
                <div className={styles.mediumbox}>오프라인 </div>
              ) : (
                <div className={styles.mediumboxActive}>오프라인</div>
              )}
            </label>
          </div>
        </div>

        <div>
          <h3 className={styles.question}>
            3. 강의 방식(개인/그룹)을 선택해주세요.
            <span>*중복 선택 가능</span>
          </h3>

          <div className={styles.answer}>
            <input
              type="checkbox"
              id="personal"
              onClick={handleChange("personal")}
            />
            <label htmlFor="personal">
              {form.update.personal == "off" ? (
                <div className={styles.mediumbox}>개인 수업 </div>
              ) : (
                <div className={styles.mediumboxActive}>개인 수업 </div>
              )}
            </label>

            <input type="checkbox" id="group" onClick={handleChange("group")} />
            <label htmlFor="group">
              {form.update.group == "off" ? (
                <div className={styles.mediumbox}>그룹 수업 </div>
              ) : (
                <div className={styles.mediumboxActive}>그룹 수업 </div>
              )}
            </label>
          </div>
        </div>
      </section>

      <section className={styles.bottom}>
        <button type="button" className={styles.next} onClick={nextStep}>
          강의 업로드
        </button>
        <div className={styles.fixedTab}>
          <BottomTab />
        </div>
      </section>
    </>
  );
};
export default NewClass03;
