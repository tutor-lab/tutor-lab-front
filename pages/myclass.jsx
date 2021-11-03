import router from "next/router";
import styles from "../styles/myclass.module.scss";
import ClassCard from "../components/classcard";
import BottomTab from "../components/bottomtab";
import axios from "axios";
import { useEffect, useState } from "react";

const MyClass = ({}) => {
  const [response, setResponse] = useState("");
  const [res, setRes] = useState(false);
  const [userRole, setUserRole] = useState("");

  const getMyInfo = () => {
    axios
      .get("/users/my-info")
      .then((res) => {
        setUserRole(res.data.role);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const ClassLists = async () => {
    try {
      setResponse(await axios.get("/tutors/my-lectures"));
      setRes(true);
      return response;
    } catch (e) {
      setRes(false);
      return Promise.reject(e);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/");
    } else {
      ClassLists();
    }
  }, []);
  // useEffect(() => {
  //   getMyInfo();
  //   if (userRole === "TUTEE") {
  //     router.push("/tutorInfoEdit");
  //   }
  // }, [userRole]);

  console.log(response);
  return res ? (
    <>
      <div className={styles.whitesection}>
        <h1 className={styles.title}>튜터</h1>
        <div className={styles.category}>
          <button
            type="button"
            className={styles.selected}
            onClick={() => router.push("/myclass")}
          >
            내 강의
          </button>
          <button
            type="button"
            className={styles.unselected}
            onClick={() => router.push("/classposting")}
          >
            강의 등록
          </button>
        </div>
      </div>
      <div className={styles.graysection}>
        <h3 className={styles.smallheadingB}>
          등록한 강의 총 {response.data?.length}개
        </h3>
        {response.data ? (
          response.data.content.map((data) => {
            return <ClassCard data={data} key={data.id} />;
          })
        ) : (
          <></>
        )}
        <div className={styles.fixedTab}>
          <BottomTab />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
  {
    /*에러 페이지 */
  }
};
export default MyClass;
