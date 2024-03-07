import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

import { getContacts } from "../contacts";

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

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default Root;
