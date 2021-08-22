import styles from "./languageModal.module.scss";
export const LanguageModal = ({ ChangingClass }) => {
  return (
    <div className={styles.modal} id="menu">
      <Language language={"Java"} select={1} ChangingClass={ChangingClass} />
      <Language
        language={"JavaScript"}
        select={2}
        ChangingClass={ChangingClass}
      />
      <Language language={"Python"} select={2} ChangingClass={ChangingClass} />
      <Language language={"SQL"} select={2} ChangingClass={ChangingClass} />
      <Language language={"R"} select={2} ChangingClass={ChangingClass} />
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
