import styles from "./typingTab.module.scss";
import { useState } from "react";
import { useEffect } from "react";
const TypingTab = ({ sendMsgEnter }) => {
  const [data, setData] = useState("");
  const onChangeData = (e) => {
    setData(e.target.value);
  };
  return (
    <section className={styles.typingTab}>
      <button type="button" className={styles.addFile}>
        +
      </button>
      <input
        type="text"
        className={styles.chatContent}
        placeholder={"튜티에게 메세지를 보내보세요."}
        onChange={onChangeData}
      />
      <button
        type="button"
        className={styles.send}
        onClick={() => sendMsgEnter(data)}
      />
    </section>
  );
};
//이미지 필요!
export default TypingTab;
