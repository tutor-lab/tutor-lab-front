import BottomTab from "../bottomtab";
import styles from "./bottomSection.module.scss";
const BottomSection = ({ text, onClick }) => {
  return (
    <section className={styles.fixed}>
      <button type="button" className={styles.next} onClick={onClick}>
        {text}
      </button>
      <BottomTab />
    </section>
  );
};
export default BottomSection;
