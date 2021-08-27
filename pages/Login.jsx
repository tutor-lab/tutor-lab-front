import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "../styles/login.module.scss";
import axios from "axios";
import router from "next/router";

const LogIn = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkAccount = () => {
    // const id = document.getElementById('id').value;
    // const password = document.getElementById('password').value;

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
        alert("로그인에 성공하였습니다");
        router.push("/myclass");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.box}>
      <Container fluid className={styles.container}>
        <div className={styles.title}>튜터 로그인</div>
        <Row>
          <Col xs="12" sm="12" md="4" className={styles.form}>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="ID(Email)"
              onChange={onChangeUsername}
              value={username}
            />
            <div className="mt-1" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={onChangePassword}
              value={password}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="12" sm="12" md="4" className={styles.submit}>
            <input
              id={styles.button}
              type="submit"
              value="로그인 하기"
              onClick={checkAccount}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <div className={styles.find}>
            <div
              className={styles.find}
              onClick={() => {
                alert("find id");
              }}
            >
              아이디 찾기
            </div>
            <div
              className={styles.find}
              onClick={() => {
                alert("find pw");
              }}
            >
              비밀번호 찾기
            </div>
          </div>
        </Row>
        <Row>
          <div className={styles.footer}>
            <span>@tutorlab</span>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LogIn;
