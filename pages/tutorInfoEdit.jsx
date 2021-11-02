import { useState } from "react";
import styles from "./tutorInfoEdit.module.scss";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import InputBox from "../components/mypage/inputBox";
import { SaveBtn } from "../components/mypage/myPageBtn";
import axios from "axios";
import router from "next/router";
const TutorInfoEdit = () => {
  const [companyName, setcompanyName] = useState("");
  const [job, setJob] = useState("");
  const [license, setLicense] = useState("");
  const [caothers, setCaOthers] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [major, setMajor] = useState("");
  const [edothers, setEdOthers] = useState("");
  const [schoolName, setSchoolName] = useState("");

  const handleSave = () => {
    const sendData = {
      careers: [
        {
          companyName: companyName,
          job: job,
          license: license,
          others: caothers,
        },
      ],
      educations: [
        {
          educationLevel: educationLevel,
          major: major,
          others: edothers,
          schoolName: schoolName,
        },
      ],
    };
    console.log(sendData);
    axios
      .post("tutors", sendData)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          alert("등록되었습니다.");
          router.push("/myclass");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        }
      });
  };

  return (
    <section className={styles.tutorInfoEdit}>
      <OtherTopBar title={"튜터 정보 수정"} />
      <section className={styles.text}>
        <p className={styles.intro}>
          입력하신 학력 및 경력 정보를 인증할 수 있는 첨부파일을 추가로 업로드
          해주세요. 관리자 확인 후, 인증마크를 부여합니다. <br />
          <span className={styles.caution}>
            * 첨부파일은 JPEG, PNG, GIF 형식으로만 첨부가능합니다.
          </span>
        </p>
      </section>
      <div className={styles.line} />
      <section className={styles.academic}>
        <div className={styles.firstLine}>
          <h1 className={styles.title}>학력정보</h1>
          <label htmlFor="academicFile">
            <div className={styles.fileImg} />
          </label>
          <input type="file" id="academicFile" required />
        </div>
        <InputBox
          text={"최종 학력"}
          order={1}
          value={educationLevel}
          setValue={setEducationLevel}
        />
        <InputBox
          text={"학교 명"}
          order={2}
          value={schoolName}
          setValue={setSchoolName}
        />
        <InputBox
          text={"전공 명"}
          order={2}
          value={major}
          setValue={setMajor}
        />
        <InputBox
          text={"그 외 학력"}
          order={3}
          value={edothers}
          setValue={setEdOthers}
        />
      </section>
      <div className={styles.line} />
      <section className={styles.career}>
        <div className={styles.firstLine}>
          <h1 className={styles.title}>경력정보</h1>
          <label htmlFor="careerFile">
            <div className={styles.fileImg} />
          </label>
          <input type="file" id="careerFile" required />
        </div>
        <InputBox text={"직업"} order={1} value={job} setValue={setJob} />
        <InputBox
          text={"직장 명"}
          order={2}
          value={companyName}
          setValue={setcompanyName}
        />
        <InputBox
          text={"그 외 경력"}
          order={2}
          value={caothers}
          setValue={setCaOthers}
        />
        <InputBox
          text={"자격증"}
          order={3}
          value={license}
          setValue={setLicense}
        />
      </section>
      <div className={styles.fixed}>
        <SaveBtn onClick={handleSave} />
      </div>
    </section>
  );
};

export default TutorInfoEdit;
