import { Header } from "../modules/Header";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
      <div className=""></div>
    </div>
  );
};

export default Layout;