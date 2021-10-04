import styles from "./otherPage.module.scss";
const OtherTopBar = ({ title }) => {
  return (
    <section className={styles.myPageOtherTop}>
      <button type="button" className={styles.prev} />
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
};

export default OtherTopBar;
