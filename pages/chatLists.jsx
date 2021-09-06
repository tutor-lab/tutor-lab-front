import styles from "./chatLists.module.scss";
import Data from "../chatData.json";
import ChatPreview from "../components/chat/chatPreview";
import BottomTab from "../components/bottomtab";
import ChatListTitleBox from "../components/chat/chatListTitleBox";
import ChatListSearchBox from "../components/chat/chatListSearchBox";
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";

const ChatLists = ({ newAlarm }) => {
  const [noChat, setNoChat] = useState(false);
  const [res, setRes] = useState(false);
  const getChatLists = async () => {
    try {
      await axios.get("/tutors/my-chatrooms");
      setRes(true);
    } catch (e) {
      setRes(false);
      return e;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/");
    } else {
      getChatLists();
    }
  }, []);

  return res ? (
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
  ) : (
    <></>
  );
};

export default ChatLists;
