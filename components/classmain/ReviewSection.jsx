import Image from "next/image";
import style from "./reviewSection.module.scss";
import Rating from "./Rating";

const Review = ({ name, date, rating, review }) => {
  return (
    <section className={style.UserReview}>
      <button type="button" className={style.dotbtn}>
        <Image src={"/images/dots.png"} alt="" width="10px" height="12px" />
      </button>
      {/* 버튼 이미지 필요 */}
      <div className={style.profile}>
        {/* 프로필 사진 없을 때 사용할 기본 이미지 필요 */}
        {/* {profile != "" ? (
          <Image
            src={profile}
            alt=""
            width="30px"
            height="30px"
            className={style.profile}
          ></Image>
        ) : (
          <Image
            src="/images/profile.png"
            alt=""
            width="30px"
            height="30px"
            className={style.profile}
          ></Image>
        )} */}
      </div>
      <div className={style.textSection}>
        <h2 className={style.reviewInfo}>
          <span className={style.name}>{name}</span>
          <span className={style.date}>{date}</span>
        </h2>
        <span className={style.rating}>
          <Rating rating={rating}></Rating>
        </span>
        <span className={style.review}>{review}</span>
      </div>
    </section>
  );
};

const Comment = ({ date, comment }) => {
  return (
    <section className={style.TutorComment}>
      <div className={style.profile}>
        {/* <Image
          src={profile}
          alt=""
          width="30px"
          height="30px"
          className={style.profile}
        ></Image> */}
      </div>
      <section className={style.textSection}>
        <h2 className={style.reviewInfo}>
          <span className={style.name}>튜터 댓글</span>
          <span className={style.date}>{date}</span>
        </h2>
        <span className={style.comment}>{comment}</span>
      </section>
    </section>
  );
};

const CommentWriting = () => {
  return (
    <section className={style.ReviewWriting}>
      <div className={style.WritingBox}>
        <textarea
          placeholder="댓글을 입력해주세요"
          className={style.text}
        ></textarea>
        <button type="submit" className={style.btn}>
          등록
        </button>
      </div>
    </section>
  );
};

const ReviewSection = ({
  // Uprofile,
  Uname,
  Udate,
  URating,
  Ureview,
  TutorReview,
}) => {
  return (
    <>
      <Review
        // profile={Uprofile}
        name={Uname}
        date={Udate}
        rating={URating}
        review={Ureview}
      />
      {TutorReview.content != null ? (
        <Comment
          date={TutorReview.createdAt.substring(0, 10)}
          comment={TutorReview.content}
        />
      ) : (
        <></>
      )}
      <CommentWriting />
    </>
  );
};
export default ReviewSection;
