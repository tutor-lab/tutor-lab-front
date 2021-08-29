import styles from "./textBtn.module.scss";
const TextBtn = ({ text }) => {
  return (
    <button type="button" className={styles.textBtn}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default TextBtn;
