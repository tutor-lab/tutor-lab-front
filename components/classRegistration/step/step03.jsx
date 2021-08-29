import styles from "./step03.module.scss";
import WhiteSection from "../WhiteSection";
import BottomSection from "../BottomSection";
import EllipseButton from "../btn_inputs/EllipseButton";
import ClassCost from "../btn_inputs/ClassCost";
import { BlueModal } from "../Modal";

const Step03 = ({ form, prevStep, handleChange, handleSubmit, MoveStep }) => {
  return (
    <div className={styles.step03}>
      <div className={styles.background} id="uploadBack">
        <div className={styles.uploadModal} id="uploadModal">
          <BlueModal />
        </div>
      </div>{" "}
      <WhiteSection step={3} onClick={prevStep} MoveStep={MoveStep} />
      <section className={styles.graySection}>
        <div>
          <h1 className={styles.title}>1. 강의 방식1을 선택해주세요.</h1>
          <span className={styles.cf}>* 중복선택 가능</span>
          <div className={styles.classType}>
            <EllipseButton
              element={"온라인"}
              selected={form.online}
              id={"online"}
              onClick={handleChange("online")}
            />
            <EllipseButton
              element={"오프라인"}
              selected={form.offline}
              id={"offline"}
              onClick={handleChange("offline")}
            />
            <EllipseButton
              element={"장소 협의 가능"}
              selected={form.discuss}
              id={"discuss"}
              onClick={handleChange("discuss")}
            />
          </div>
        </div>
        <div>
          <h1 className={styles.title}>2. 강의 방식2을 선택해주세요.</h1>
          <span className={styles.cf}>* 중복선택 가능</span>
          <div className={styles.classType}>
            <EllipseButton
              element={"1:1 수업"}
              selected={form.personal}
              id={"personal"}
              onClick={handleChange("personal")}
            />
            <div className={styles.group}>
              <EllipseButton
                element={"그룹 수업"}
                selected={form.group}
                id={"group"}
                onClick={handleChange("group")}
              />
              {form.group == "on" ? (
                <div className={styles.groupMax}>
                  <input
                    type="number"
                    onChange={handleChange("groupMax")}
                    className={styles.maxInput}
                  />
                  <span className={styles.guide1}>최대</span>
                  <span className={styles.guide2}>명</span>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        {form.personal == "off" && form.group == "off" && (
          <div className={styles.basic} />
        )}

        {form.personal == "on" && (
          <div>
            <h1 className={styles.title}>3. 1:1 수업 가격을 입력해주세요.</h1>
            <ClassCost
              form={form}
              handleChange={handleChange}
              distinct={"personal"}
            />
          </div>
        )}

        {form.group == "on" && (
          <div>
            <h1 className={styles.title}>
              {form.personal == "on" ? <span>4</span> : <span>3</span>}. 그룹
              수업 가격을 입력해주세요.
            </h1>
            <ClassCost
              form={form}
              handleChange={handleChange}
              distinct={"group"}
            />
          </div>
        )}
      </section>
      <BottomSection text={"강의 업로드"} handleSubmit={handleSubmit} />
    </div>
  );
};
export default Step03;
