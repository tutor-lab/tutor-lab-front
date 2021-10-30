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

export default InputBox;
