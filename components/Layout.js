import Header from "./Header";

//children에 대해서 공부하자
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
