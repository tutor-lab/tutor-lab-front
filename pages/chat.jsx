import BottomTab from "../components/bottomtab";
import { MyChats, OthersChats } from "../components/chat/chatContent";
import NameTab from "../components/chat/nameTab";
import TypingTab from "../components/chat/typingTab";
import styles from "./chat.module.scss";
import Data from "../chatData.json";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://8701-14-63-95-228.ngrok.io";
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});
const Chat = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [sendMsg, setSendMsg] = useState(0);
  const [items, setItems] = useState([]);
  const [user, setUser] = useState("");
  const webSocketUrl = `ws://8701-14-63-95-228.ngrok.io/ws/chat/1`;
  let ws = useRef(null);

  let msgArray = new Array();
  const getMy = async () => {
    try {
      await axios.get(`/users/me`).then((response) => {
        setUser(response);
        return response;
      });
    } catch (error) {
      return error;
      // return Promise.reject(errormsg);
    }
  };

  // 소켓 객체 생성
  useEffect(() => {
    getMy();
    if (!ws.current) {
      ws.current = new WebSocket(webSocketUrl);
      ws.current.onopen = () => {
        console.log("connected to " + webSocketUrl);
        setSocketConnected(true);
      };
      ws.current.onerror = (error) => {
        console.log("connection error " + webSocketUrl);
        console.log(error);
      };
    }
  }, []);

  useEffect(() => {
    if (sendMsg) {
      ws.current.onmessage = (evt) => {
        const data = JSON.parse(evt.data);
        setItems((prevItems) => [...prevItems, data]);
        // setItems([...items, data]);
      };
    }
  }, [sendMsg]);

  // 소켓이 연결되었을 시에 send 메소드
  useEffect(() => {
    if (socketConnected) {
      ws.current.send(
        JSON.stringify({
          username: user?.data?.name,
          message: "tests",
          sessionId: "30ae0b1d-45bc-ed13-2f3a-ee5c402725c7",
          chatroomId: 1,
          type: "message",
        })
      );
      setSendMsg(sendMsg + 1);
    }
  }, [socketConnected]);

  const sendMsgEnter = (data) => {
    alert(JSON.stringify(user.data.name));
    ws.current.send(
      JSON.stringify({
        username: user.data.name,
        message: data,
        sessionId: "30ae0b1d-45bc-ed13-2f3a-ee5c402725c7",
        chatroomId: 1,
        type: "message",
      })
    );
    setSendMsg(sendMsg + 1);
  };

  return (
    <div className={styles.chat}>
      <NameTab name={"김하나"} />
      <section className={styles.contentSection}>
        {items.map((data, i) => {
          return user?.data.name == data.username ? (
            <MyChats key={i} text={data.message} />
          ) : (
            <OthersChats key={i} text={data.message} />
          );
        })}
      </section>
      <span className={styles.fixedTab}>
        <TypingTab sendMsgEnter={sendMsgEnter} />
        <BottomTab />
      </span>
    </div>
  );
};
export default Chat;
