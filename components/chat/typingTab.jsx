import styles from "./typingTab.module.scss";
const TypingTab = () => {
  return (
    <section className={styles.typingTab}>
      <button type="button" className={styles.addFile}>
        +
      </button>
      <input
        type="text"
        className={styles.chatContent}
        placeholder={"튜티에게 메세지를 보내보세요."}
      />
      <button type="button" className={styles.send} />
    </section>
  );
};
//이미지 필요!
export default TypingTab;
