import styles from "./profileEdit.module.scss";
import BottomTab from "../components/bottomtab";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import { ProfileEditBtn } from "../components/mypage/myPageBtn";
const ProfileEdit = () => {
  return (
    <section className={styles.profileEditSection}>
      <OtherTopBar title={"프로필 수정"} url={"/mypage"} />
      <section className={styles.imageSection}>
        <input type="file" id="profile" />
        <label htmlFor="profile">
          <div className={styles.profileImage} />
          <div className={styles.editBtn} />
        </label>
      </section>
      <span className={styles.line} />
      <section className={styles.editBtnSection}>
        <ProfileEditBtn text={"튜터 소개"} url={"/tutorIntroduction"} />
        <ProfileEditBtn text={"회원정보 수정"} url={"/memberInfoEdit"} />
        <ProfileEditBtn text={"비밀번호 변경"} url={"/changePW"} />
        <ProfileEditBtn text={"로그아웃"} url={"/"} />
        <ProfileEditBtn text={"회원탈퇴"} url={"/deleteAccount"} />
      </section>
      <div className={styles.fixedTab}>
        <BottomTab num={3} />
      </div>
    </section>
  );
};
export default ProfileEdit;
