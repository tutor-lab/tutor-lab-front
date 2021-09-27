import { MyChats, OthersChats } from "../../components/chat/chatContent";
import NameTab from "../../components/chat/nameTab";
import TypingTab from "../../components/chat/typingTab";
import styles from "../chat.module.scss";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
axios.defaults.baseURL = "http://3.35.255.192:8081";
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

export async function getServerSideProps(context) {
  return {
    props: {},
  };
} //getServerSideProps 없으면 새로 고침 시 에러!

const Chat = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [sendMsg, setSendMsg] = useState(0);
  const [items, setItems] = useState([]);
  const [user, setUser] = useState("");
  const router = useRouter();
  const chatID = router.query.chat;

  const webSocketUrl = `ws://3.35.255.192:8081/ws/chat/${chatID}`;
  let ws = useRef(null);

  const getMy = async () => {
    try {
      await axios.get(`/users/my-info`).then((response) => {
        setUser(response);
        return response;
      });
    } catch (error) {
      return error;
    }
  };

  const getPrevChat = async () => {
    try {
      await axios.get(`/tutors/my-chatrooms/${chatID}`).then((response) => {
        setItems(response.data);
        return response;
      });
    } catch (error) {
      return error;
    }
  };

  // 소켓 객체 생성
  useEffect(() => {
    getMy();
    getPrevChat();
    // if (!ws.current) {
    ws.current = new WebSocket(webSocketUrl);
    ws.current.onopen = () => {
      console.log("connected to " + webSocketUrl);
      setSocketConnected(true);
      // };
      ws.current.onerror = (error) => {
        console.log("connection error " + webSocketUrl);
        console.log(error);
      };
    };
  }, []);

  useEffect(() => {
    ws.current.onmessage = (evt) => {
      const data = JSON.parse(evt.data);
      if (items) {
        setItems((prevItems) => [...prevItems, data]);
      }
    };
  }, []);

  // 소켓이 연결되었을 시에 send 메소드
  useEffect(() => {
    if (socketConnected) {
      // ws.current.send(
      //   JSON.stringify({
      //     username: user?.data?.name,
      //     message: "tests",
      //     sessionId: "30ae0b1d-45bc-ed13-2f3a-ee5c402725c7",
      //     chatroomId: 1,
      //     type: "message",
      //   })
      // );
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

  console.log(items);
  return user ? (
    <div className={styles.chat}>
      <NameTab name={"김하나"} />
      <section className={styles.contentSection}>
        <div className={styles.content}>
          {items != undefined &&
            items.length > 0 &&
            items.map((data, i) => {
              return user?.data?.name == data.username ? (
                <MyChats key={i} text={data.message} />
              ) : (
                <OthersChats key={i} text={data.message} name={data.username} />
              );
            })}
        </div>{" "}
      </section>
      <span className={styles.fixedTab}>
        <TypingTab sendMsgEnter={sendMsgEnter} />
      </span>
    </div>
  ) : (
    <></>
  );
};
export default Chat;
