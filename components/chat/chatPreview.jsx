import styles from "./chatPreview.module.scss";
import router from "next/router";
import Image from "next/image";

const ChatPreview = ({ data, newChat }) => {
  console.log("data===", data.tuteeId);
  return (
    <button
      className={styles.previewSection}
      onClick={() =>
        router.push({
          pathname: `/chatDetail/${data.chatroomId}`,
          query: { tuteeId: data.tuteeId },
        })
      }
    >
      <div className={styles.profile}>
        {data.tuteeImage !== null && (
          <Image
            src={data.tuteeImage}
            width="56px"
            height="56px"
            alt="프로필"
          />
        )}
      </div>
      <div className={styles.chat}>
        <span className={styles.tuteeInfo}>
          <span className={styles.tutee}>튜티</span>
          <span>{data.tuteeNickname}</span>
          <span className={styles.name}>{data.lectureTitle}</span>
        </span>
        {/* <span className={styles.last}>{data.lastMessage?.message}</span> */}
      </div>
      <div className={styles.timeInfo}>
        <span className={styles.date}>{data.date}</span>
        <span className={styles.newChat}>{data.uncheckedMessageCount}</span>
        {/* {newChat ? <span className={styles.newChat}>{data.uncheckedMessageCount}</span> : <></>} */}
        {/* <span className={styles.newChat}>{newChat}</span> */}
      </div>
    </button>
  );
};
export default ChatPreview;
