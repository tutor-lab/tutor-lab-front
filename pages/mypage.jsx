import { CategoryBtn } from "../components/mypage/myPageBtn";
import AboutTutee from "../components/mypage/aboutTutee";
import MainTopBar from "../components/mypage/topBar/mainPage";
import styles from "./mypage.module.scss";
import MainProfile from "../components/mypage/mainProfile";
import BottomTab from "../components/bottomtab";

const MyPage = () => {
  return (
    <section className={styles.mypageSection}>
      <MainTopBar alarm={false} />

      <section className={styles.profileSection}>
        <MainProfile name={"김하나"} />
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
          <CategoryBtn text={"이용약관"} />
          <CategoryBtn text={"문의하기"} />
        </div>
      </section>

      <div className={styles.fixedTab}>
        <BottomTab />
      </div>
    </section>
  );
};

export default MyPage;
