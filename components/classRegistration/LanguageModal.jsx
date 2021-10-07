import styles from "./languageModal.module.scss";
import { useDispatch } from "react-redux";
import {
  InputClass,
} from "../../redux/reducers/update";
export const lectureKindListData = [
  {
    "parent":"1",
    "learningKind":"IT"
  },
  {
    "parent":"2",
    "learningKind":"언어",

  },
]
export const lectureListData = [
  {
    "parent":"1",
    "learningKind":"IT",
    "krSubject":"자바"
  },
  {
    "parent":"1",
    "learningKind":"IT",
    "krSubject":"파이썬"
  },
  {
    "parent":"1",
    "learningKind":"IT",
    "krSubject":"C/C++"
  },
]
// export const lectureListData = [
//   {
//     "parent":"2",
//     "learningKind":"언어",
//     "krSubject":"영어"
//   },
//   {
//     "parent":"2",
//     "learningKind":"언어",
//     "krSubject":"중국어"
//   }
// ]
export const LectureKindModal = ({ ChangingClass,setLectureModal,currentI }) => {
  return (
    <div className={styles.modal2} id="menu">
      {lectureKindListData.map((item,index)=>
        <div key={index}>
          <LectureKind 
            lecture={item.learningKind} 
            select={1} 
            ChangingClass={ChangingClass} 
            setLectureModal={setLectureModal} 
            currentI={currentI}
          />
        </div>
      )}
      <input
        type="text"
        placeholder="직접 입력 후 엔터키"
        className={styles.last}
        onKeyPress={ChangingClass("languageInput")}
        id="modalInput"
        name="languageInput"
      />
    </div>
  );
};

export const LanguageModal = ({ ChangingClass }) => {
  return (
    <div className={styles.modal} id="menu">
      {lectureListData.map((item,index)=>
        <div key={index}>
          <Language language={item.krSubject} select={1} ChangingClass={ChangingClass} />
        </div>
      )}
      <input
        type="text"
        placeholder="직접 입력 후 엔터키"
        className={styles.last}
        onKeyPress={ChangingClass("languageInput")}
        id="modalInput"
        name="languageInput"
      />
    </div>
  );
};
const LectureKind = ({ lecture, select, ChangingClass,setLectureModal,currentI }) => {
  const dispatch = useDispatch();

  const onClickModal = (item) =>{

    console.log("currentI=",currentI)
    dispatch(
      InputClass({ 
        form: "update",
        key: "classtype",
        index: currentI,
        value: item,
      })
    );
    setLectureModal(false)
  }


  return (
    <label htmlFor={lecture}>
      <div
        className={select == 1 ? styles.first : styles.modalElement}
        onClick={(e)=>onClickModal(lecture)}
        name="lecture"
      >
        <input type="radio" name="modalElement" id={lecture}  />
        {lecture}
      </div>
    </label>
  );
};
const Language = ({ language, select, ChangingClass }) => {
  return (
    <label htmlFor={language}>
      <div
        className={select == 1 ? styles.first : styles.modalElement}
        onClick={ChangingClass("language")}
      >
        <input type="radio" name="modalElement" id={language} />
        {language}
      </div>
    </label>
  );
};


const Level = ({ level, select, handleChange }) => {
  return (
    <label htmlFor={level}>
      <div
        className={
          select == 1
            ? styles.first
            : select == 2
            ? styles.modalElement
            : styles.last
        }
        onClick={handleChange("level")}
      >
        <input type="radio" name="levelElement" id={level} />
        {level}
      </div>
    </label>
  );
};

export const LevelModal = ({ handleChange }) => {
  return (
    <div className={styles.modal} id="level">
      <Level level={"입문"} select={1} handleChange={handleChange}></Level>
      <Level level={"초급"} select={2} handleChange={handleChange}></Level>
      <Level level={"중급"} select={2} handleChange={handleChange}></Level>
      <Level level={"고급"} select={3} handleChange={handleChange}></Level>
    </div>
  );
};

export default LanguageModal;
