import styles from "./chatContent.module.scss";
const MyChats = ({ text, time }) => {
  return (
    <div className={styles.myChat}>
      <span className={styles.content}>{text}</span>
      <span className={styles.time}>{time}</span>
    </div>
  );
};

const OthersChats = ({ text, time }) => {
  return (
    <div className={styles.otherChat}>
      <span className={styles.content}>{text}</span>
      <span className={styles.time}>{time}</span>
    </div>
  );
};

export { MyChats, OthersChats };
