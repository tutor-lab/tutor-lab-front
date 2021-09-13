import Image from "next/image";
import styles from "../styles/bottomtab.module.scss";
import router from "next/router";

const BottomTab = ({}) => {
  return (
    <>
      <ul className={styles.tab}>
        <button
          type="button"
          onClick={() => router.push("/myclass")}
          className={styles.elements}
        >
          {/* 임시로 링크! */}
          <li>
            <div className={styles.img}>
              <Image
                src="/images/class.png"
                width="23px"
                height="23px"
                alt="강의"
                className={styles.img}
              />
            </div>
            <span>강의</span>
          </li>
        </button>

        <button
          type="button"
          onClick={() => router.push("/board")}
          className={styles.elements}
        >
          <li>
            <div className={styles.img}>
              <Image
                src="/images/board.png"
                width="23px"
                height="23px"
                alt="게시판"
                className={styles.img}
              />
            </div>
            <span>게시판</span>
          </li>
        </button>

        <button
          type="button"
          onClick={() => router.push("/promotion")}
          className={styles.elements}
        >
          <li>
            <div className={styles.img}>
              <Image
                src="/images/promotion.png"
                width="23px"
                height="23px"
                alt="프로모션"
              />
            </div>
            <span>프로모션</span>
          </li>
        </button>

        <button
          type="button"
          onClick={() => router.push("/mypage")}
          className={styles.elements}
        >
          <li>
            <div className={styles.img}>
              <Image
                src="/images/mypage.png"
                width="23px"
                height="23px"
                alt="마이페이지"
              />
            </div>
            <span>마이페이지</span>
          </li>
        </button>
      </ul>
    </>
  );
};
export default BottomTab;
