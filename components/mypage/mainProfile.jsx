import styles from "./mainProfile.module.scss";
const MainProfile = ({ name }) => {
  return (
    <section className={styles.mainPageProfile}>
      <div className={styles.profileImage} />
      <div className={styles.profileInfo}>
        <span className={styles.profile}>튜터</span>
        <h1 className={styles.name}>{name}</h1>
      </div>
      <button type="button" className={styles.profileEditBtn}>
        <span className={styles.btnText}>프로필 수정</span>
      </button>
    </section>
  );
};
export default MainProfile;
