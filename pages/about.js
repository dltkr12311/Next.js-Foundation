import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <style jsx>
      {`
        h2 {
          color: green;
        }
      `}
    </style>
    <h2>
      안녕하세요 사용자 더 좋은 서비스를 경험할 수 있도록 노력하는 개발자
      이삭입니다.
    </h2>
  </Layout>
);

export default About;
