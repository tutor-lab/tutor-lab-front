import ImgSection from "../../components/classmain/ImgSection";
import IntroSection from "../../components/classmain/IntroSection";
import style from "../classMain.module.scss";
import BottomTab from "../../components/bottomtab";
import ReviewSection from "../../components/classmain/ReviewSection";
import Data from "../../classdata.json";
import TotalReview from "../../components/classmain/TotalReview";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import renderHTML from "react-render-html";

axios.defaults.baseURL = "http://3.35.255.192:8081";
const ClassMain = ({}) => {
  const router = useRouter();
  const [select, setSelect] = useState(true);
  const [introduce, setIntroduce] = useState("");
  const classID = router.query.classmain;
  console.log(classID);

  const ClassMainContent = async () => {
    try {
      await axios
        .get(`/lectures/30`) //main에서 넘겨주기
        .then((res) => setIntroduce(res.data.content));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  useEffect(() => {
    ClassMainContent();
  }, []);
  return (
    <section className={style.main}>
      <ImgSection thumbnail={"/images/classImage.jpg"} online={1} offline={1} />
      <IntroSection
        tutorname={Data.tutor}
        title={Data.title}
        rating={Data.totalRating.toFixed(1)}
        reviewCnt={Data.reviewCnt}
        subheading={Data.explanation}
        originPrice={Data.originPrice}
        discount={Data.dc}
        finalPrice={Data.originPrice * (100 - Data.dc) * 0.01}
        notes={Data.notes}
      ></IntroSection>

      <div className={style.category}>
        <button
          className={select ? style.selected : style.unselected}
          onClick={() => setSelect(true)}
        >
          강의소개
        </button>
        <button
          className={select ? style.unselected : style.selected}
          onClick={() => setSelect(false)}
        >
          리뷰({Data.reviewCnt})
        </button>
      </div>

      {select ? (
        <div className={style.classIntroduce}>{renderHTML(introduce)}</div>
      ) : (
        <>
          <TotalReview
            totalRating={Data.totalRating}
            reviewCnt={Data.reviewCnt}
          />
          {Data.reviews.map((data, i) => {
            return (
              <ReviewSection
                Uprofile={"/images/classImage.jpg"}
                // Uprofile={""}
                Uname={data[0].name}
                Udate={data[0].Udate}
                URating={data[0].rate}
                Ureview={data[0].Utext}
                Tprofile={"/images/classImage.jpg"}
                Tdate={data[1].Tdate}
                Tcomment={data[1].Ttext}
                key={i}
              ></ReviewSection>
            );
          })}
        </>
      )}

      <div className={style.fixedTab}>
        <BottomTab />
      </div>
    </section>
  );
};
export default ClassMain;
