import styles from "./tuteeBox.module.scss";
import Image from "next/image";
import { TuteeBoxBtn } from "./myPageBtn";
const TuteeBox = ({ name, count, open }) => {
  return (
    <section className={styles.tuteeBox}>
      <div className={styles.img} />
      <strong className={styles.name}>{name} 튜티</strong>
      <span className={styles.count}>{count}개의 강의</span>
      <button type="button" className={styles.dropBtn} />
    </section>
  );
};

const ClassBox = ({ title, type, price }) => {
  return (
    <section className={styles.boxContent}>
      <div className={styles.classImg}>
        <Image src="/images/mypage/classImg.png" width="84px" height="84px" />
      </div>
      <div className={styles.classContent}>
        <strong className={styles.title}>{title}</strong>
        <br />
        <span className={styles.type}>{type}</span>
        <br />
        <strong className={styles.price}>
          {price}
          <span className={styles.unit}>원</span>
        </strong>
        <span className={styles.month}> /1개월 기준</span>
      </div>
    </section>
  );
};

const TuteeBox2 = ({ name, title, type, price }) => {
  return (
    <section className={styles.tuteeBoxOpen}>
      <section className={styles.firstLine}>
        <div className={styles.nameSection}>
          <div className={styles.img} />
          <strong className={styles.name}>{name} 튜티</strong>
        </div>
        <button type="button" className={styles.upbar} />
      </section>
      <ClassBox title={title} type={type} price={price} />
      <div className={styles.btn}>
        <TuteeBoxBtn text={"대화 요청"} />
        <TuteeBoxBtn text={"리뷰 확인"} />
      </div>
    </section>
  );
};

const RefundReq = () => {
  return (
    <div className={styles.refundReq}>
      <div className={styles.req}>
        <span className={styles.text}>환불요청</span>
      </div>
      <button type="button" className={styles.chat} />
    </div>
  );
};

const RefundBox = ({ date, name, title, type, price }) => {
  return (
    <>
      <section className={styles.refundBox}>
        <div className={styles.date}>{date}</div>
        <section className={styles.firstLine}>
          <div className={styles.nameSection}>
            <div className={styles.img} />
            <strong className={styles.name}>{name} 튜티</strong>
          </div>
          <RefundReq />
        </section>
        <ClassBox title={title} type={type} price={price} />
        <div className={styles.btn}>
          <TuteeBoxBtn text={"환불 승인"} />
          <TuteeBoxBtn text={"환불 사유"} />
        </div>
      </section>
      <div className={styles.line} />
    </>
  );
};

export { TuteeBox, TuteeBox2, RefundBox };
