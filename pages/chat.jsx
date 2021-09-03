import BottomTab from "../components/bottomtab";
import { MyChats, OthersChats } from "../components/chat/chatContent";
import NameTab from "../components/chat/nameTab";
import TypingTab from "../components/chat/typingTab";
import styles from "./chat.module.scss";
import Data from "../chatData.json";
import {useRef,useEffect,useState} from 'react'

const Chat = () => {

  const [socketConnected, setSocketConnected] = useState(false);
  const [sendMsg, setSendMsg] = useState(false);
  const [items, setItems] = useState([]);
  const [sessionId,setSessionId] = useState("");

  const webSocketUrl = `ws://localhost:8081/ws/chat/1`
  let ws = useRef(null);

  // 소켓 객체 생성
  useEffect(() => {
    if (!ws.current) {
      ws.current = new WebSocket(webSocketUrl);
      ws.current.onopen = () => {
        console.log("connected to " + webSocketUrl);
        setSocketConnected(true);
      };
      // ws.current.onclose = (error) => {
      //   console.log("disconnect from " + webSocketUrl);
      //   console.log(error);
      // };
      ws.current.onerror = (error) => {
        console.log("connection error " + webSocketUrl);
        console.log(error);
      };
      ws.current.onmessage = (evt) => {
        const data = JSON.parse(evt.data);
        console.log(data.sessionId);
        setSessionId(data.sessionId)
        setItems((prevItems) => [...prevItems, data]);
      };
    }

    // return () => {
    //   console.log("clean up");
    //   ws.current.close();
    // };
  }, []);

  // 소켓이 연결되었을 시에 send 메소드
  useEffect(() => {
    if (socketConnected) {
      ws.current.send(
        JSON.stringify({
          username:"choiseongjun",
          message: "tests",
          sessionId : "30ae0b1d-45bc-ed13-2f3a-ee5c402725c7",
          chatroomId:1,
          type:"message"
        })
      );

      setSendMsg(true);
    }
  }, [socketConnected]);

  const sendMsgEnter = () =>{
    console.log('gg')
    ws.current.send(
      JSON.stringify({
        username:"choiseongjun",
        message: "tests",
        sessionId : "30ae0b1d-45bc-ed13-2f3a-ee5c402725c7",
        chatroomId:1,
        type:"message"
      })
    );

    setSendMsg(true);
  }


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
        <TypingTab sendMsgEnter={sendMsgEnter}/>
        <BottomTab />
      </span>
    </div>
  );
};
export default Chat;
