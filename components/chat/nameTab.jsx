import router from "next/router";
import styles from "./nameTab.module.scss";
const NameTab = ({ name }) => {
  return (
    <section className={styles.nameSection}>
      <div className={styles.left}>
        <button
          type="button"
          className={styles.prev}
          onClick={() => router.push("/chatLists")}
        />
        <span className={styles.tutee}>튜티</span>
        <h1 className={styles.name}>{name}</h1>
      </div>
      <div className={styles.right}>
        <button
          type="button"
          className={styles.search}
          onClick={() => console.log("search")}
        />
        <button
          type="button"
          className={styles.menu}
          onClick={() => console.log("menu")}
        />
      </div>
    </section>
  );
};

export default NameTab;
