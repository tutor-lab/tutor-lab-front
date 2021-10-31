import styles from "./inputBox.module.scss";
const InputBox = ({ text, order }) => {
  return (
    <section
      className={
        order == 1
          ? styles.myPageInput1
          : order == 2
          ? styles.myPageInput2
          : styles.myPageInput3
      }
    >
      <div className={styles.text}>{text}</div>
      <input type="text" className={styles.inputBox}></input>
    </section>
  );
};

const ThickInputBox = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.thickInputBox}
    />
  );
};

const ThickInputBoxWithTitle = ({ title, type, placeholder }) => {
  return (
    <div className={styles.withTitle}>
      <h1 className={styles.title}>{title}</h1>
      <ThickInputBox type={type} placeholder={placeholder} />
    </div>
  );
};

export { ThickInputBox, ThickInputBoxWithTitle };
export default InputBox;
