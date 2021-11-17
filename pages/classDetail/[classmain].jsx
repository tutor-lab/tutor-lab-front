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

export async function getServerSideProps(context) {
  return {
    props: {},
  };
} //getServerSideProps 없으면 새로 고침 시 에러!

const ClassMain = () => {
  const [select, setSelect] = useState(true);
  const [introduce, setIntroduce] = useState("");
  const [data, setData] = useState("");
  const router = useRouter();
  const classID = router.query.classmain;

  const ClassMainContent = async () => {
    try {
      await axios.get(`/lectures/${classID}`).then((res) => {
        console.log(res);
        setIntroduce(res.data.content);
        setData(res.data);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/");
    } else {
      ClassMainContent();
    }
  }, []);

  return data != "" ? (
    <section className={style.main}>
      <ImgSection thumbnail={data?.thumbnail} online={1} offline={1} />
      <IntroSection
        tutorname={data?.lectureTutor.nickname}
        title={data?.title}
        // rating={Data.totalRating.toFixed(1)}
        reviewCnt={data?.reviewCount}
        subheading={data?.explanation}
        originPrice={data?.lecturePrices[0].totalCost}
        discount={0}
        finalPrice={data?.lecturePrices[0].totalCost * (100 - 0) * 0.01}
        setReview={setSelect}
        // notes={Data.notes}
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
          리뷰({data.reviewCount})
        </button>
      </div>

      {select ? (
        <div className={style.classIntroduce}>{renderHTML(introduce)}</div>
      ) : (
        <>
          {/* <TotalReview
            totalRating={Data.totalRating}
            reviewCnt={Data.reviewCnt}
          /> */}
          {/* {Data.reviews.map((data, i) => {
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
          })} */}
        </>
      )}

      <div className={style.fixedTab}>
        <BottomTab />
      </div>
    </section>
  ) : (
    <></>
  );
};
export default ClassMain;
