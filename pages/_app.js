import "../styles/index.css";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import Router from "next/router";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/nprogress.css";
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const handleStart = (url) => {
    url !== Router.asPath && NProgress.start();
    setLoading(true);
  };

  const handleComplete = (url) => {
    url === Router.asPath && NProgress.done();
    setLoading(false);
  };
  Router.events.on("routeChangeStart", handleStart);
  Router.events.on("routeChangeComplete", handleComplete);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
