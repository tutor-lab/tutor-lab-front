import styles from "./profileEdit.module.scss";
import BottomTab from "../components/bottomtab";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import { ProfileEditBtn } from "../components/mypage/myPageBtn";
const ProfileEdit = () => {
  return (
    <section className={styles.profileEditSection}>
      <OtherTopBar title={"프로필 수정"} />
      <section className={styles.imageSection}>
        <div className={styles.profileImage} />
      </section>
      <span className={styles.line} />
      <section className={styles.editBtnSection}>
        <ProfileEditBtn text={"튜터 소개"} />
        <ProfileEditBtn text={"회원정보 수정"} />
        <ProfileEditBtn text={"비밀번호 변경"} />
        <ProfileEditBtn text={"맞춤강의 설정"} />
        <ProfileEditBtn text={"로그아웃"} />
        <ProfileEditBtn text={"회원탈퇴"} />
      </section>
      <div className={styles.fixedTab}>
        <BottomTab />
      </div>
    </section>
  );
};
export default ProfileEdit;
