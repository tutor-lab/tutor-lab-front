import React,{useState} from "react";
import { wrapper } from "../redux/store";
import "../styles/globals.css";
import axios from 'axios'
import jwt_decode from "jwt-decode";

function MyApp({ Component, pageProps }) {
  const [authorized, setAuthorized] = useState(false);

  axios.defaults.baseURL = "http://3.35.255.192:8081";
  axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
      
      const decodedJwt = jwt_decode(token);
      // const d = new Date(0);
      // d.setUTCSeconds(decodedJwt.exp);
      // console.log('dTimes=',d); //날짜확인용
      if (decodedJwt.exp * 1000 < Date.now()) {
        localStorage.removeItem("accessToken");
      }
    }
    return config;   
  });


  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
