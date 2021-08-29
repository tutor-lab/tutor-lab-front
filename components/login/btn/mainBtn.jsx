import styles from "./mainBtn.module.scss";
const WhiteBtn = ({ text }) => {
  return (
    <button type="button" className={styles.whiteBtn}>
      <span className={styles.blueText}>{text}</span>
    </button>
  );
};

const BlueBtn = ({ text }) => {
  return (
    <button type="button" className={styles.blueBtn}>
      <span className={styles.whiteText}>{text}</span>
    </button>
  );
};

export { WhiteBtn, BlueBtn };
