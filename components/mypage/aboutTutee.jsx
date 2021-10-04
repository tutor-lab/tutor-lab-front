import styles from "./aboutTutee.module.scss";
const TuteeBox = ({ num }) => {
  return (
    <button className={styles.TuteeBox}>
      <span className={num == 1 ? styles.icon1 : styles.icon2} />
      <h1 className={styles.title}>
        {num == 1 ? "강의 신청 튜티" : "환불 신청 튜티"}
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
