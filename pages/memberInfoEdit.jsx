import styles from "./memberInfoEdit.module.scss";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import { ThickInputBoxWithTitle } from "../components/mypage/inputBox";
import { BlueBtn } from "../components/mypage/myPageBtn";

const year = [];
for (let i = 2002; i >= 1921; i--) {
  year.push(i);
}

const SelectBox = ({ title, opt }) => {
  return (
    <section className={styles.selectBox}>
      <span className={styles.title}>{title}</span>
      <select className={styles.sel}>
        {opt == 1 ? (
          <>
            <option value="M" className={styles.option}>
              남자
            </option>
            <option value="F" className={styles.option}>
              여자
            </option>
          </>
        ) : (
          <>
            {year.map((data, i) => {
              return (
                <option value={data} className={styles.option} key={i}>
                  {data}
                </option>
              );
            })}
          </>
        )}
      </select>
    </section>
  );
};

const MemberInfoEdit = () => {
  return (
    <section className={styles.memberInfoEdit}>
      <OtherTopBar title={"회원정보 수정"} />
      <section className={styles.content}>
        <ThickInputBoxWithTitle
          title={"이메일"}
          type={"email"}
          placeholder={"이메일을 입력하세요"}
        />
        <ThickInputBoxWithTitle
          title={"성명"}
          type={"text"}
          placeholder={"성명을 입력하세요"}
        />
        <section className={styles.sexBirth}>
          <SelectBox title={"성별"} opt={1} />
          <SelectBox title={"출생년도"} opt={2} />
        </section>

        <ThickInputBoxWithTitle
          title={"휴대폰 번호"}
          type={"tel"}
          placeholder={"휴대폰 번호를 입력하세요"}
        />
        <ThickInputBoxWithTitle
          title={"주소"}
          type={"text"}
          placeholder={"주소를 입력하세요"}
        />
      </section>
      <div className={styles.fixed}>
        <BlueBtn text={"저장"} />
      </div>
    </section>
  );
};

export default MemberInfoEdit;
