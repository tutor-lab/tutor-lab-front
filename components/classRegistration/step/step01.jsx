import styles from "./step01.module.scss";
import InputBox from "../btn_inputs/InputBox";
import WhiteSection from "../WhiteSection";
import BottomSection from "../BottomSection";
import AddImg from "../btn_inputs/AddImg";
import { GrayModal } from "../Modal";

const Step01 = ({
  form,
  nextStep,
  handleChange,
  preview,
  showGray,
  hideGray,
}) => {
  return (
    <div className={styles.step01}>
      <div className={styles.goBackModal} id="goBackModal">
        <div className={styles.modal} id="modal">
          <GrayModal hideGray={hideGray} id="grayOne" />
        </div>
      </div>
      <WhiteSection step={1} onClick={showGray} />
      <section className={styles.graySection}>
        <div>
          <h3 className={styles.question}>
            1. 강의 소개 메인 이미지를 등록해주세요.
          </h3>
          <label htmlFor="classImg">
            <AddImg form={form} preview={preview} />
            <input type="file" id="classImg" onChange={handleChange("image")} />
          </label>
        </div>

        <InputBox
          title={"2. 강의 타이틀을 입력해주세요."}
          placeholder={"최대 40자"}
          example={"ex) 금융권 취업을 위한 데이터 분석 및 모델링 "}
          value={form.maintitle}
          onChange={handleChange("maintitle")}
          limit={40}
        />

        <InputBox
          title={"3. 강의 소제목을 입력해주세요."}
          placeholder={"최대 25자"}
          example={"ex) 빅데이터플랫폼 구축, 실무 경험 그대로"}
          value={form.subheading}
          onChange={handleChange("subheading")}
          limit={25}
        />

        <InputBox
          title={"4. 간략하게 나를 소개해주세요."}
          placeholder={"최대 25자"}
          example={"ex) 삼성전자 10년 근무, sw 개발 및 품질 경력"}
          value={form.introduction}
          onChange={handleChange("introduction")}
          limit={25}
        />
      </section>
      <BottomSection text={"다음"} onClick={nextStep} />
    </div>
  );
};
export default Step01;
