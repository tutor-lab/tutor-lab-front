import router from "next/router";
import styles from "./nameTab.module.scss";
const NameTab = ({ name }) => {
  return (
    <section className={styles.nameSection}>
      <button
        type="button"
        className={styles.prev}
        onClick={() => router.push("/chatLists")}
      />
      <h1 className={styles.name}>{name} 튜티</h1>
    </section>
  );
};

export default NameTab;
