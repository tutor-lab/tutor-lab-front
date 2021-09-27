import styles from "./button.module.scss";
const BlueBtn = ({ text, onClick }) => {
  return (
    <button type="button" className={styles.bluebtn} onClick={onClick}>
      <span className={styles.btnText}>{text}</span>
    </button>
  );
};
export default BlueBtn;
