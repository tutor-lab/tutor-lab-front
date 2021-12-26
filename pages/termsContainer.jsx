import { useState, useEffect } from "react";
import styles from "./termsContainer.module.scss";
import BlueBtn from "../components/signup/button";
import router from "next/router";
import TopBar from "../components/signup/topBar";
const TermsElement = ({ id, text, show, setDisable, disable, url }) => {
  return (
    <div className={styles.agreeElem}>
      <input
        type="checkbox"
        id={id}
        onChange={() => setDisable(!disable)}
        checked={!disable}
      />
      <label htmlFor={id} className={styles.elemText}>
        {text}
        {show ? (
          <button
            type="button"
            className={styles.showBtn}
            onClick={() => router.push(url)}
          >
            내용 보기
          </button>
        ) : (
          <></>
        )}
      </label>
    </div>
  );
};

const TermsContainer = () => {
  const [disable1, setDisable1] = useState(true);
  const [disable2, setDisable2] = useState(true);
  const [disable3, setDisable3] = useState(true);
  const [allDisable, setAllDisable] = useState(true);

  useEffect(() => {
    if (!disable1 && !disable2 && !disable3) {
      setAllDisable(false);
    } else {
      setAllDisable(true);
    }
  }, [disable1, disable2, disable3]);

  const setAllChange = () => {
    setDisable1(!disable1);
    setDisable2(!disable2);
    setDisable3(!disable3);
  };

  return (
    <section className={styles.termsContainer}>
      <TopBar url={"/"} title={"회원가입"} />
      <section className={styles.termsContent}>
        <button
          type="button"
          className={styles.agreeBtn}
          onClick={setAllChange}
        >
          <span className={styles.agreeText}>전체동의</span>
        </button>

        <div>
          <TermsElement
            id={"agree1"}
            text={"[필수] 서비스 이용 약관에 동의합니다."}
            show={true}
            setDisable={setDisable1}
            disable={disable1}
            url={"/terms"}
          />
          <TermsElement
            id={"agree2"}
            text={"[필수] 개인 정보 수집 및 이용에 동의합니다."}
            show={true}
            setDisable={setDisable2}
            disable={disable2}
            url={"/terms2"}
          />
          <TermsElement
            id={"agree3"}
            text={"[필수] 악의적 콘텐츠 제한에 동의합니다."}
            show={false}
            setDisable={setDisable3}
            disable={disable3}
          />
        </div>
        <p className={styles.c}>
          튜터랩은 건강하고 합법적인 콘텐츠를 지향합니다.
          <br />
          다음과 같은 콘텐츠를 업로드한 이용자는 경고 또는 서비스 제한을 받을 수
          있습니다.
          <br />
          <br />
          1. 음란 콘텐츠
          <br />
          2. 폭력적인 내용을 포함한 콘텐츠
          <br />
          3. 타인의 권리를 침해하는 콘텐츠
          <br />
          4. 기타 튜터랩 운영에 방해가 되는 콘텐츠
          <br />
          <br />
          악의적 콘텐츠로 판단되는 콘텐츠 발견시, 이용자분들의 적극적인 신고
          부탁드립니다.
        </p>
      </section>

      <div className={styles.fixedTab}>
        <BlueBtn
          text={"다음"}
          onClick={() => router.push("/signup")}
          disable={allDisable}
        />
      </div>
    </section>
  );
};

export default TermsContainer;
