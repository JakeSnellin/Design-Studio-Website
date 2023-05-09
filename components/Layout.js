import Footer from "./Footer";
import Topbar from "./Topbar";
import Navmenu from "./Navmenu";

export default function Layout({ children }) {
    return (
      <div className="content">
        <Topbar />
        <Navmenu />
          { children }
        <Footer />
      </div>
    );
  }