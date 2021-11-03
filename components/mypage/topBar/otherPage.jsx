import styles from "./otherPage.module.scss";
import router from "next/router";
const OtherTopBar = ({ title }) => {
  return (
    <section className={styles.myPageOtherTop}>
      <div className={styles.textSection}>
        <button
          type="button"
          className={styles.prev}
          onClick={() => router.push("/mypage")}
        />
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.logoSection} />
    </section>
  );
};

export default OtherTopBar;
