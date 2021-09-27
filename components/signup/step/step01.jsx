import styles from "./step01.module.scss";
import InputBox from "../inputBox";
import ErrBox from "../errBox";
import TopBar from "../topBar";
import BlueBtn from "../button";
import SelectBox from "../selectBox";
import Modal from "../modal";
import Gender from "../gender";
const Step01 = ({
  form,
  prevStep,
  handleChange,
  handleSubmit,
  showState,
  showGender,
  close,
}) => {
  if (typeof window === "undefined" || !window.document) {
    return <></>;
  }
  return (
    <section className={styles.signUp01} onClick={close}>
      <div className={styles.stateBackground} id="stateBackground">
        <div className={styles.stateModalPart} id="stateModal">
          <Modal form={form} onChange={handleChange} />
        </div>
      </div>
      <div className={styles.genderBackground} id="genderBackground">
        <div className={styles.genderModalPart} id="genderModal">
          <Gender onChange={handleChange} />
        </div>
      </div>
      <TopBar prevStep={prevStep} />
      <div className={styles.contentSection}>
        <div className={styles.inputSection}>
          <InputBox
            type="text"
            placeholder={"이름"}
            onChange={handleChange("name")}
          />
          <InputBox
            type="email"
            placeholder={"ID(E-mail)"}
            onChange={handleChange("email")}
          />
          <InputBox
            type="password"
            placeholder={"비밀번호 입력(6-14자)"}
            onChange={handleChange("password")}
          />
          <InputBox
            type="password"
            placeholder={"비밀번호 재입력"}
            onChange={handleChange("passwordConfirm")}
          />
          <InputBox
            type="number"
            placeholder={"휴대폰 번호('-' 제외)"}
            onChange={handleChange("phoneNumber")}
          />
        </div>
        <div className={styles.selectSection}>
          <span className={styles.row}>
            <SelectBox placeholder={"출생년도"} num={1} />
            <SelectBox
              num={3}
              id="gender"
              btnText={form.gender}
              onClick={showGender}
            />
          </span>
          <span className={styles.row}>
            <SelectBox
              btnText={form.stateL == "" ? "시" : form.stateL}
              num={2}
              onClick={showState}
              id="large"
            />
            <SelectBox
              btnText={form.stateM == "" ? "군" : form.stateM}
              num={2}
              onClick={showState}
              id="medium"
            />
          </span>
          <span className={styles.row}>
            <SelectBox
              btnText={form.stateS == "" ? "구" : form.stateS}
              num={2}
              onClick={showState}
              id="small"
            />
          </span>
        </div>
        <span className={styles.text}>동네 강의 추천을 위해 입력해주세요</span>
      </div>
      <div className={styles.footer}>
        <BlueBtn text={"완료"} onClick={handleSubmit} />
      </div>
    </section>
  );
};
export default Step01;
