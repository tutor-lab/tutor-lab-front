import router from "next/router";
import styles from "../styles/myclass.module.scss";
import ClassCard from "../components/classcard";
import BottomTab from "../components/bottomtab";
import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.baseURL = "http://3.35.255.192:8081";
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

const MyClass = ({}) => {
  const [response, setResponse] = useState("");
  const [res, setRes] = useState(false);
  const ClassLists = async () => {
    try {
      setResponse(await axios.get("/tutors/mylectures"));
      setRes(true);
      return response;
    } catch (e) {
      setRes(false);
      return Promise.reject(e);
    }
  };

  useEffect(() => {
    ClassLists();
  }, []);

  return (
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
        </div>{" "}
      </div>
      <div className={styles.graysection}>
        <h3 className={styles.smallheadingB}>
          등록한 강의 총 {response.data?.length}개
        </h3>
        {response.data ? (
          response.data.map((data, i) => {
            return <ClassCard data={data} key={i} />;
          })
        ) : (
          <></>
        )}

        <div className={styles.fixedTab}>
          <BottomTab />
        </div>
      </div>
    </>
  );
};
export default MyClass;
