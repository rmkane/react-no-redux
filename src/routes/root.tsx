import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

function Root() {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-row">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default Root;
