import OtherTopBar from "../components/mypage/topBar/otherPage";
import styles from "./tuteeList.module.scss";
import { TuteeBox, TuteeBox2 } from "../components/mypage/tuteeBox";
import BottomTab from "../components/bottomtab";
import SearchSection from "../components/mypage/searchSection";
import axios from "axios";
import { useEffect, useState } from "react";
const TuteeList = () => {
  const [info2, setInfo2] = useState("");
  const [info3, setInfo3] = useState("");
  const [tuteeName, setName] = useState("");
  const [tuteeId, setID] = useState("");
  const [type, setType] = useState("");
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
  }

  const data = {
    closed: false,
  };

  const getTuteeList = () => {
    axios({ method: "GET", url: "/tutors/my-tutees", data: data }).then(
      (response) => {
        setInfo2(response.data);
        setID(response.data.content[0].tuteeId);
        setName(response.data.content[0].name);
      }
    );
  };

  const getTuteeClass = () => {
    axios({
      method: "GET",
      url: `/tutors/my-tutees/${tuteeId}`,
      data: data,
    }).then((response) => {
      setInfo3(response.data);
      setType(response.data.content[0].lecture.systemTypes[0].name);
    });
  };

  useEffect(() => {
    getTuteeList();
  }, []);

  return (
    <section className={styles.tuteeList}>
      <OtherTopBar title={"튜티 목록"} url={"/mypage"} />
      <SearchSection text1={"전체 튜티"} text2={"신규 튜티"} />
      <div className={styles.line} />
      <section className={styles.ing}>
        <h1 className={styles.title}>강의 진행 중인 튜티</h1>
        {info2 && info3 == ""
          ? info2.content?.map((data, i) => {
              return (
                <TuteeBox
                  name={data.name}
                  key={i}
                  count={"1"}
                  onClick={getTuteeClass}
                />
              );
            })
          : info3.content?.map((data, i) => {
              return (
                <TuteeBox2
                  name={tuteeName}
                  title={data.lecture.title}
                  type={type}
                  price={data.lecture.lecturePrice.totalCost.toLocaleString(
                    "ko-KR"
                  )}
                  img={data.lecture.thumbnail}
                  onClick={() => setInfo3("")}
                  key={i}
                />
              );
            })}
      </section>
      <div className={styles.line} />
      <section className={styles.finished}>
        <h1 className={styles.title}>강의 종료된 튜티</h1>
        <TuteeBox name={"김민영"} count={"1"} />
      </section>
      <div className={styles.fixed}>
        <BottomTab num={3} />
      </div>
    </section>
  );
};

export default TuteeList;
