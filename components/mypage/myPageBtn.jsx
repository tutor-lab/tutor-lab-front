import styles from "./myPageBtn.module.scss";
const ProfileEditBtn = ({ text }) => {
  return (
    <button type="button" className={styles.ProfileEditBtn}>
      <h1 className={styles.text}>{text}</h1>
      <span className={styles.goto} />
    </button>
  );
};

const CategoryBtn = ({ text }) => {
  return (
    <button type="button" className={styles.myPageCategoryBtn}>
      <h1 className={styles.text}>{text}</h1>
    </button>
  );
};

export { ProfileEditBtn, CategoryBtn };
