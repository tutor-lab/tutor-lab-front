import styles from "./chatLists.module.scss";
import Data from "../chatData.json";
import ChatPreview from "../components/chat/chatPreview";
import BottomTab from "../components/bottomtab";
const ChatLists = () => {
  return (
    <div className={styles.chatLists}>
      <section className={styles.listSection}>
        <span className={styles.titleBox}>
          <h1 className={styles.title}>채팅 목록</h1>
        </span>
        {Data.other.map((data, i) => {
          return data ? <ChatPreview data={data} key={i} /> : <></>;
        })}
      </section>
      <span className={styles.fixedTab}>
        <BottomTab />
      </span>
    </div>
  );
};

export default ChatLists;
