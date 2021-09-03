import styles from "./chatPreview.module.scss";
import Image from "next/image";
import router from "next/router";
const ChatPreview = ({ data }) => {
  return (
    <button
      className={styles.previewSection}
      onClick={() => router.push("/chat")}
    >
      <div className={styles.profile}>
        {/* <Image src={data.profile} width="30px" height="30px" alt="프로필" /> */}
      </div>
      <div className={styles.chat}>
        <span className={styles.name}>{data.name} 튜티</span>
        <span className={styles.last}>{data.last}</span>
      </div>
      <span className={styles.date}>{data.date}</span>
    </button>
  );
};
export default ChatPreview;
