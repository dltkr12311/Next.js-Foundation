//react import 할 필요가 없다
//import react from 'react'
import Layout from "../components/Layout";
import Head from "next/head";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Index 페이지</title>
      </Head>
      <h1>리삭의 페이지의 오신것을 환영합니다.</h1>
      <h2></h2>
    </Layout>
  );
};

export default Index;
