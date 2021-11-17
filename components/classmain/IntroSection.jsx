import Discount from "./Discount";
import style from "./introSection.module.scss";
import Rating from "./Rating";

const IntroSection = ({
  tutorname,
  title,
  rating,
  reviewCnt,
  subheading,
  originPrice,
  discount,
  finalPrice,
  setReview,
  notes, //특이사항 (ex) 쿠폰 적용시 5개월 할부
}) => {
  return (
    <section className={style.IntroductionSection}>
      <span className={style.tutor}>
        튜터&nbsp;<strong>{tutorname}</strong>
      </span>
      <h1 className={style.title}>{title}</h1>

      <span className={style.rateReviews}>
        <span className={style.stars}>
          <Rating rating={rating}></Rating>
        </span>
        <span className={style.rates}>{rating}</span>
        <button
          type="button"
          className={style.reviewBtn}
          onClick={() => setReview(false)}
        >
          <span className={style.gotoReview}> 리뷰보기&nbsp;</span>
          <span className={style.reviewcount}>({reviewCnt})</span>
        </button>
      </span>

      <h3 className={style.subheading}>{subheading}</h3>
      <Discount
        originPrice={originPrice}
        discount={discount}
        finalPrice={finalPrice}
        notes={notes}
      ></Discount>
      <button type="submit" className={style.register}>
        강의 신청
      </button>
    </section>
  );
};
export default IntroSection;
