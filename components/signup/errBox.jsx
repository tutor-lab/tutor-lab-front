import styles from "./errBox.module.scss";
const ErrBox = ({ text }) => {
  return (
    <section className={styles.errBox}>
      <span className={styles.errText}>{text}</span>
    </section>
  );
};
export default ErrBox;
