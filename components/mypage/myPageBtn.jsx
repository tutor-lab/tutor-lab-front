import styles from "./myPageBtn.module.scss";
import router from "next/router";
const ProfileEditBtn = ({ text, url }) => {
  return (
    <button
      type="button"
      className={styles.ProfileEditBtn}
      onClick={() => {
        if (text === "로그아웃") {
          localStorage.removeItem("accessToken");
          router.push(url);
        } else {
          router.push(url);
        }
      }}
    >
      <h1 className={styles.text}>{text}</h1>
      <div className={styles.goto} />
    </button>
  );
};

const CategoryBtn = ({ text }) => {
  return (
    <button type="button" className={styles.myPageCategoryBtn}>
      <h1 className={styles.text}>{text}</h1>
    </button>
  );
};

const BlueBtn = ({ onClick, text }) => {
  return (
    <button type="button" className={styles.blueBtn} onClick={onClick}>
      {text}
    </button>
  );
};

const TuteeBoxBtn = ({ text, lectureID, chatroomID, tuteeID }) => {
  return (
    <button
      type="button"
      className={styles.tuteeBoxBtn}
      onClick={() =>
        text == "대화 요청"
          ? router.push(`/chatDetail/${chatroomID}?tuteeId=${tuteeID}`)
          : (text = "환불 사유"
              ? router.push(`/classDetail/${lectureID}`)
              : router.push("/mypage"))
      }
    >
      <div
        className={
          text == "대화 요청"
            ? styles.img1
            : text == "리뷰 확인"
            ? styles.img2
            : text == "환불 승인"
            ? styles.img3
            : text == "환불 사유"
            ? styles.img4
            : styles.img5
        }
      />
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export { ProfileEditBtn, CategoryBtn, BlueBtn, TuteeBoxBtn };
