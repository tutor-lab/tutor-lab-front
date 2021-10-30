import styles from "./mainPage.module.scss";
const MainTopBar = ({ alarm }) => {
  return (
    <section className={styles.myPageMainTop}>
      <h1 className={styles.title}>마이페이지</h1>
      <div className={styles.icons}>
        <button className={alarm ? styles.alarm : styles.noalarm} />
        <button className={styles.setting} />
      </div>
    </section>
  );
};
export default MainTopBar;
