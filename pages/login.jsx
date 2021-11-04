import { useState } from "react";
import styles from "./login.module.scss";
import axios from "axios";
import router from "next/router";
import { BlueBtn } from "../components/login/btn/mainBtn";
import InputBox from "../components/login/btn/inputBox";
import TextBtn from "../components/login/btn/textBtn";
import { ImageLogo, NameLogo } from "../components/login/logos";

const Login = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkAccount = () => {
    if (username === "" || password === "") {
      return alert("id와 password를 입력해주세요");
    }

    const LoginRequest = new Object();
    LoginRequest.username = username;
    LoginRequest.password = password;

    axios
      .post("/login", LoginRequest)
      .then(function (response) {
        console.log(response);
        const accessToken = response.data.split(" ")[1];
        localStorage.setItem("accessToken", accessToken);
        axios
          .get("/users/my-info")
          .then((res) => {
            alert("로그인에 성공하였습니다");
            if (res.data.role === "TUTEE") {
              router.push("/tutorInfoEdit");
            } else {
              router.push("/myclass");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch(function (error) {
        if (error.response.data.message === "Unauthenticated") {
          alert("이메일 인증을 받아주세요.");
        }
      });
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className={styles.loginSection}>
      <h1 className={styles.title}>{"튜터로 로그인"}</h1>
      <span className={styles.imageLogo}>
        <ImageLogo />
      </span>
      <div className={styles.btns}>
        <InputBox
          type={"email"}
          placeholder={"ID(Email)"}
          onChange={onChangeUsername}
          value={username}
        />
        <InputBox
          type={"password"}
          placeholder={"Password"}
          onChange={onChangePassword}
          value={password}
        />
        <BlueBtn text={"로그인 하기"} type="submit" onClick={checkAccount} />
        <span className={styles.textBtn}>
          <TextBtn text={"아이디 찾기"} />
          <span className={styles.text}>|</span>
          <TextBtn text={"비밀번호 찾기"} />
        </span>
      </div>
      <NameLogo />
    </section>
  );
};

export default Login;
