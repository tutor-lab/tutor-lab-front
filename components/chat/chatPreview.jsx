import styles from "./chatPreview.module.scss";
import router from "next/router";
const ChatPreview = ({ data, newChat }) => {
  console.log(data);
  return (
    <button
      className={styles.previewSection}
      onClick={() => router.push(`/chatDetail/${data.chatroomId}`)}
    >
      <div className={styles.profile}>
        {/* <Image src={data.profile} width="30px" height="30px" alt="프로필" /> */}
      </div>
      <div className={styles.chat}>
        <span className={styles.tuteeInfo}>
          <span className={styles.tutee}>튜티</span>
          <span className={styles.name}>{data.tuteeName}</span>
        </span>
        <span className={styles.last}>{data.last}</span>
      </div>
      <div className={styles.timeInfo}>
        <span className={styles.date}>{data.date}</span>
        {newChat ? <span className={styles.newChat}>{newChat}</span> : <></>}
        {/* <span className={styles.newChat}>{newChat}</span> */}
      </div>
    </button>
  );
};
export default ChatPreview;
