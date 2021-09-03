import BottomTab from "../components/bottomtab";
import { MyChats, OthersChats } from "../components/chat/chatContent";
import NameTab from "../components/chat/nameTab";
import TypingTab from "../components/chat/typingTab";
import styles from "./chat.module.scss";
import Data from "../chatData.json";
const Chat = () => {
  return (
    <div className={styles.chat}>
      <NameTab name={"김하나"} />
      <section className={styles.contentSection}>
        {Data.other[0].chat.map((data, i) => {
          return data.mine ? (
            <MyChats key={i} text={data.content} time={data.time} />
          ) : (
            <OthersChats key={i} text={data.content} time={data.time} />
          );
        })}
      </section>
      <span className={styles.fixedTab}>
        <TypingTab />
        <BottomTab />
      </span>
    </div>
  );
};
export default Chat;
