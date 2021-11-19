import { CategoryBtn } from "../components/mypage/myPageBtn";
import AboutTutee from "../components/mypage/aboutTutee";
import MainTopBar from "../components/mypage/topBar/mainPage";
import styles from "./mypage.module.scss";
import MainProfile from "../components/mypage/mainProfile";
import BottomTab from "../components/bottomtab";
import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";
const MyPage = () => {
  const [username, setUsername] = useState("");
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
  }

  const getMyInfo = () => {
    axios.get("/tutors/my-info").then((response) => {
      setUsername(response.data.user.name);
    });
  };

  const redirect = () => {
    window.location.assign(
      "https://github.com/tutor-lab/tutor-lab-front/wiki/%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80"
    );
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <section className={styles.mypageSection}>
      <MainTopBar />
      <section className={styles.profileSection}>
        <MainProfile name={username} />
        <AboutTutee />
      </section>

      <span className={styles.line} />

      <section className={styles.categorySection}>
        <div className={styles.selectCategory}>
          <h1 className={styles.title}>계정정보</h1>
          <CategoryBtn text={"내 계정"} />
          <CategoryBtn text={"설정"} />
        </div>

        <div className={styles.selectCategory}>
          <h1 className={styles.title}>TUTOR LAB</h1>
          <CategoryBtn text={"공지사항"} />
          <CategoryBtn text={"이용약관"} onClick={redirect} />
          <CategoryBtn text={"문의하기"} onClick={() => router.push("/ask")} />
        </div>
      </section>

      <div className={styles.fixedTab}>
        <BottomTab num={3} />
      </div>
    </section>
  );
};

export default MyPage;
