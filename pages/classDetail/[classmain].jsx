import ImgSection from "../../components/classmain/ImgSection";
import IntroSection from "../../components/classmain/IntroSection";
import style from "../classMain.module.scss";
import ReviewSection from "../../components/classmain/ReviewSection";
import TotalReview from "../../components/classmain/TotalReview";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import renderHTML from "react-render-html";
import InfiniteScroll from "react-infinite-scroll-component";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
} //getServerSideProps 없으면 새로 고침 시 에러!

const ClassMain = () => {
  const [select, setSelect] = useState(true);
  const [introduce, setIntroduce] = useState("");
  const [data, setData] = useState("");
  const [review, setReview] = useState("");
  const [myName, setMyName] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const router = useRouter();
  const classID = router.query.classmain;

  const ClassMainContent = async () => {
    try {
      await axios.get(`/lectures/${classID}`).then((res) => {
        setIntroduce(res.data.content);
        setData(res.data);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const getMyInfo = () => {
    axios
      .get("/users/my-info")
      .then((res) => {
        setMyName(res.data.username);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const GetReview = async () => {
    try {
      await axios
        .get(`/tutors/my-lectures/${classID}/reviews?page=${pageNum}`)
        .then((res) => {
          console.log(res);
          setReview([...review, res]);
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
      getMyInfo();
      ClassMainContent();
    }
  }, []);

  useEffect(() => {
    GetReview();
  }, [pageNum]);

  return data != "" ? (
    <section className={style.main}>
      <ImgSection thumbnail={data?.thumbnail} online={1} offline={1} />
      <IntroSection
        tutorname={data?.lectureTutor.nickname}
        title={data?.title}
        rating={data?.scoreAverage.toFixed(1)}
        reviewCnt={data?.reviewCount}
        subheading={data?.subTitle}
        originPrice={data?.lecturePrices[0]?.totalCost}
        originPrice2={data?.lecturePrices[1]?.totalCost}
        group={data?.lecturePrices[0]?.isGroup}
        group2={data?.lecturePrices[1]?.isGroup}
        discount={0}
        finalPrice={data?.lecturePrices[0]?.totalCost}
        finalPrice2={data?.lecturePrices[1]?.totalCost}
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
          <TotalReview
            totalRating={data?.scoreAverage.toFixed(1)}
            reviewCnt={data.reviewCount}
          />
          {review ? (
            review.map((obj, i) => {
              const hasMore = !obj.data?.last;
              return (
                <>
                  <InfiniteScroll
                    dataLength={obj.data.totalElements}
                    next={() => setPageNum(pageNum + 1)}
                    hasMore={hasMore}
                    key={i}
                  >
                    {obj.data ? (
                      obj.data.content.map((itemData, index) => {
                        console.log(itemData);
                        return (
                          <ReviewSection
                            // Uprofile={"/images/classImage.jpg"}
                            Uname={itemData.username}
                            Udate={itemData.createdAt.substring(0, 10)}
                            URating={itemData.score}
                            Ureview={itemData.content}
                            TutorReview={itemData.child}
                            key={index}
                          />
                        );
                      })
                    ) : (
                      <h1>error1</h1>
                    )}
                  </InfiniteScroll>
                </>
              );
            })
          ) : (
            <h1>error2</h1>
          )}
        </>
      )}
    </section>
  ) : (
    <></>
  );
};
export default ClassMain;
