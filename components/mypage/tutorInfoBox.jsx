import styles from "./tutorInfoBox.module.scss";
const TutorInfoBox = ({ category, content }) => {
  return (
    <section className={styles.tutorInfoBox}>
      <div className={styles.littleTitle}>{category}</div>
      <div className={styles.text}>{content}</div>
    </section>
  );
};

export default TutorInfoBox;
