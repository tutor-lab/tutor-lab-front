import styles from "./chatLists.module.scss";
import ChatPreview from "../components/chat/chatPreview";
import BottomTab from "../components/bottomtab";
import ChatListTitleBox from "../components/chat/chatListTitleBox";
import ChatListSearchBox from "../components/chat/chatListSearchBox";
import React, { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";

const ChatLists = ({ newAlarm }) => {
  const [noChat, setNoChat] = useState(false);
  const [chatList, setChatList] = useState([]);
  const getChatLists = () => {
    axios.get("/tutors/my-chatrooms").then((resData) => {
      console.log(resData.data);
      setChatList(resData.data.content);
    });
    // setResponse(await axios.get("/tutors/my-chatrooms"));
    //setRes(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/");
    } else {
      getChatLists();
    }
  }, []);

  return (
    <>
      <div className={styles.chatLists}>
        <ChatListTitleBox newAlarm={newAlarm} />
        <section className={styles.listSection}>
          <ChatListSearchBox />
          <div className={styles.chatPreviews}>
            {/* {response.content?.map((data, i) =>
              data ? (
                <ChatPreview data={data} key={i} newChat={2} />
              ) : (
                setNoChat(true)
              )
            )} */}
            {chatList !== undefined &&
              chatList.map((item, index) => (
                <ChatPreview data={item} key={index} newChat={2} />
              ))}
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
