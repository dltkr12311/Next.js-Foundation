import Link from "next/link";

const linkStyle = {
  marginRight: "1rem",
};

const Header = () => {
  const linkStyle = {
    marginRight: "1rem",
  };

  return (
    <div>
      {/* link 컴포넌트를 렌더링 할떄 prefetch값을 넣어주면 데이터를 불러온 다음에 라우팅을 시작합니다. */}
      <Link href="/">
        <a style={linkStyle}>홈</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About Me</a>
      </Link>
      <Link prefetch href="ssr-test">
        <a style={linkStyle}>SSR테스트</a>
      </Link>
    </div>
  );
};

export default Header;
