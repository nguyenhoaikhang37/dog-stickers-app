import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = ({ children }) => {
  return (
    <div className="body">
      <Header />
      <div className="body-children">{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
