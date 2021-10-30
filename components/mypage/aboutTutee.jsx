import styles from "./aboutTutee.module.scss";
const TuteeBox = ({ num }) => {
  return (
    <button className={styles.TuteeBox}>
      <span className={num == 1 ? styles.icon1 : styles.icon2} />
      <h1 className={styles.title}>
        {num == 1 ? "튜티 목록" : "환불 목록"}
      </h1>
    </button>
  );
};

const AboutTutee = () => {
  return (
    <section className={styles.aboutTuteeSection}>
      <TuteeBox num={1} />
      <TuteeBox num={2} />
    </section>
  );
};

export default AboutTutee;
