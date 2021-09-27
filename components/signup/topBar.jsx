import router from "next/router";
import styles from "./topBar.module.scss";
const TopBar = ({ prevStep }) => {
  return (
    <section className={styles.topBar}>
      <button
        type="button"
        className={styles.prev}
        onClick={() => router.push("/")}
      />
      <h1 className={styles.title}>회원가입</h1>
    </section>
  );
};
export default TopBar;
