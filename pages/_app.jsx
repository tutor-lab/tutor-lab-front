import React from "react";
import { wrapper } from "../redux/store";
import "../styles/globals.css";
import "../styles/classcard.module.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);

