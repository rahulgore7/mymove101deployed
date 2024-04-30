import { Outlet } from "react-router-dom";
import "../css/normalize.css";
import "../css/components.css";
import "../css/davids-cool-site-c7af88.css";
import "../components/style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout() {
  return (
    <>
      <Navbar />
      {<Outlet />}
      <Footer />
    </>
  );
}
