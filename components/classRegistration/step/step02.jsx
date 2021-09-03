import styles from "./step02.module.scss";
import style2 from "../btn_inputs/addDelete.module.scss";
import WhiteSection from "../WhiteSection";
import BottomSection from "../BottomSection";
import SquareButton from "../btn_inputs/SquareButton";
import Quill from "../../quillEditor/QuillDynamic";
import LanguageModal from "../LanguageModal";
import { LevelModal } from "../LanguageModal";
import { AddBtn, DeleteBtn } from "../btn_inputs/AddDeleteBtn";
import { useEffect, useState } from "react";
const Step02 = ({
  form,
  nextStep,
  prevStep,
  handleChange,
  showModal,
  showLevel,
  MoveStep,
  Close,
  AddingClass,
  DeletingClass,
}) => {
  const [able, setAble] = useState(false);
  useEffect(() => {
    if (form.content != "") setAble(true);
  }, [form]); //quill editor 입력 내용 여부 확인 방법..??? <p><br/><p> 구분방법..

  return (
    <div className={styles.step02} onClick={Close}>
      <div className={styles.background} id="LanBackground">
        <div className={styles.modal} id="languageModal">
          <LanguageModal ChangingClass={handleChange} />
        </div>
      </div>
      <div className={styles.background} id="LevBackground">
        <div className={styles.modal} id="levelModal">
          <LevelModal handleChange={handleChange} />
        </div>
      </div>
      <WhiteSection
        step={2}
        onClick={prevStep}
        MoveStep={MoveStep}
        able={able}
      />
      <section className={styles.graySection}>
        <div className={styles.margin}>
          <h1 className={styles.title}>1. 강의 종류를 선택해주세요.</h1>
          {form.language.length > 0 &&
            form.language.map((e, i) => {
              return (
                <>
                  <div className={styles.classType}>
                    <SquareButton category={"강의 종류"} element={"개발"} />
                    <SquareButton
                      category={"언어"}
                      element={form.language[i]}
                      showModal={() => showModal(i)}
                    />
                    {form.language.length == 1 ? (
                      <div className={style2.temp} />
                    ) : (
                      <DeleteBtn DeleteClasses={() => DeletingClass(i)} />
                    )}
                  </div>
                  {i == form.language.length - 1 ? (
                    <AddBtn AddClasses={AddingClass} />
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
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
        <Quill handleChange={handleChange} />
      </section>
      <BottomSection text={"다음"} onClick={nextStep} able={able} />
    </div>
  );
};
export default Step02;
