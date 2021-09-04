import styles from "./chatLists.module.scss";
import Data from "../chatData.json";
import ChatPreview from "../components/chat/chatPreview";
import BottomTab from "../components/bottomtab";
import ChatListTitleBox from "../components/chat/chatListTitleBox";
import ChatListSearchBox from "../components/chat/chatListSearchBox";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ChatLists = ({ newAlarm }) => {
  const [noChat, setNoChat] = useState(false);
  const [response, setResponse] = useState("");
  const getChatLists = async () => {
    try {
      console.log(await axios.get("/tutees/my-chatrooms"));
      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  useEffect(() => {
    getChatLists();
    console.log(response);
  }, []);

  return (
    <>
      <div className={styles.chatLists}>
        <ChatListTitleBox newAlarm={newAlarm} />
        <section className={styles.listSection}>
          <ChatListSearchBox />
          <div className={styles.chatPreviews}>
            {Data.other.map((data, i) => {
              return data ? (
                <ChatPreview data={data} key={i} newChat={2} />
              ) : (
                setNoChat(true)
              );
            })}
          </div>
          {noChat ? (
            <span className={styles.background}>
              <span className={styles.basicImg} />
            </span>
          ) : (
            ""
          )}
        </section>
        <span className={styles.fixedTab}>
          <BottomTab />
        </span>
      </div>
    </>
  );
};

export default ChatLists;
