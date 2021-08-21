import styles from "./step02.module.scss";
import WhiteSection from "../WhiteSection";
import BottomSection from "../BottomSection";
import SquareButton from "../btn_inputs/SquareButton";
import Quill from "../../quillEditor/QuillDynamic";
import LanguageModal from "../LanguageModal";
import { LevelModal } from "../LanguageModal";
import { AddBtn, DeleteBtn } from "../btn_inputs/AddDeleteBtn";
const Step02 = ({
  form,
  nextStep,
  prevStep,
  handleChange,
  showModal,
  showLevel,
  MoveStep,
  Close,
}) => {
  return (
    <div className={styles.step02} onClick={Close}>
      <div className={styles.background} id="LanBackground">
        <div className={styles.modal} id="languageModal">
          <LanguageModal handleChange={handleChange} />
        </div>
      </div>
      <div className={styles.background} id="LevBackground">
        <div className={styles.modal} id="levelModal">
          <LevelModal handleChange={handleChange} />
        </div>
      </div>
      <WhiteSection step={2} onClick={prevStep} MoveStep={MoveStep} />
      <section className={styles.graySection}>
        <div className={styles.margin}>
          <h1 className={styles.title}>1. 강의 종류를 선택해주세요.</h1>
          <div className={styles.classType}>
            <SquareButton category={"강의 종류"} element={"개발"} />
            <SquareButton
              id="languageBtn"
              category={"언어"}
              element={form.language}
              showModal={showModal}
            />
            <DeleteBtn /> {/* 수정 예정 */}
          </div>
          <AddBtn />
        </div>
        <div className={styles.margin}>
          <h1 className={styles.title}>2. 강의 난이도를 선택해주세요.</h1>
          <SquareButton
            id="levelBtn"
            category={"강의 난이도"}
            element={form.level}
            showModal={showLevel}
          />
        </div>
        <div className={styles.margin}>
          <h1 className={styles.title}>
            3. 강의 상세 내용 및 이미지를 등록해주세요.
          </h1>
          <ul className={styles.example}>
            <li>튜터 간략 소개</li>
            <li>커리큘럼</li>
            <li>강의 예시화면 - gif 등록 가능(00mb 이하)</li>
          </ul>
        </div>
        <Quill className={styles.quillEditor} />
      </section>
      <BottomSection text={"다음"} onClick={nextStep} />
    </div>
  );
};
export default Step02;
