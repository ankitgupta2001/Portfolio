import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
