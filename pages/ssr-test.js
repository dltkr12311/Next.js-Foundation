import Link from "next/link";
import Layout from "../components/Layout";
import React from "react";
import axios from "axios";

//코드스쿼드 async await편을 보고 공부하자
class SSRTest extends React.Component {
  static async getInitialProps() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
    return {
      users: response.data,
    };
  }

  render() {
    const { users } = this.props;

    const userList = users.map((user) => (
      <li key={user.id}>{user.username}</li>
    ));
    return (
      <Layout>
        <h2>{userList}</h2>
      </Layout>
    );
  }
}

export default SSRTest;
