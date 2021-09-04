import styles from "./chatContent.module.scss";
import Image from "next/image";
const MyChats = ({ text, time }) => {
  return (
    <section className={styles.myChat}>
      <span className={styles.content}>{text}</span>
      <span className={styles.time}>{time}</span>
    </section>
  );
};

const OthersChats = ({ text, time, profile, name }) => {
  return (
    <section className={styles.otherChat}>
      <div className={styles.profile}>
        {profile ? (
          <Image
            src={profile}
            width="44px"
            height="44px"
            alt=""
            className={styles.profileImg}
          />
        ) : (
          <button type="button" className={styles.profileImg} />
        )}
        {/* 기본 이미지로 바꾸기 */}
      </div>
      <div className={styles.chatContents}>
        <span className={styles.name}>{name}</span>
        <span className={styles.content}>{text}</span>
        <span className={styles.time}>{time}</span>
      </div>{" "}
    </section>
  );
};

export { MyChats, OthersChats };
