import styles from "./typingTab.module.scss";
import { useState } from "react";
const TypingTab = ({ sendMsgEnter }) => {
  const [data, setData] = useState("");
  const onChangeData = (e) => {
    setData(e.target.value);
  };
  const enter = (e) => {
    if (e.key == "Enter" && data != "") sendMsgEnter(data);
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
        onKeyPress={(e) => enter(e)}
      />
      <button
        type="submit"
        className={styles.send}
        onClick={() => {
          if (data != "") sendMsgEnter(data);
        }}
      />
    </section>
  );
};
//이미지 필요!
export default TypingTab;
