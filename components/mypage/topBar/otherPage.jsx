import styles from "./otherPage.module.scss";
const OtherTopBar = ({ title }) => {
  return (
    <section className={styles.myPageOtherTop}>
      <div className={styles.textSection}>
        <button type="button" className={styles.prev} />
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.logoSection} />
    </section>
  );
};

export default OtherTopBar;
