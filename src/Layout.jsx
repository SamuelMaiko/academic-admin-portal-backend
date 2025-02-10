import React, { useRef } from "react";
import LoggedInRoutes from "./Routes/LoggedInRoutes";
import { Outlet } from "react-router-dom";
import { useStateShareContext } from "./Context/StateContext";
import { useAdminContext } from "./Context/AdminContext";
import ScrollToTop from "./SharedComponents/ScrollToTop ";
import RevisionChatBar from "./pages/admin/RevisionsDetails/components/RevisionChatBar";
import Footer from "./SharedComponents/Footer";
import SideBar from "./SharedComponents/SideBar";
import NavBar from "./SharedComponents/NavBar";

const Layout = () => {
  const { darkMode, showEditPFPModal } = useStateShareContext();
  const { showNavBar } = useAdminContext();
  const scrollableRef = useRef(null);

  return (
    <div
      // preventing scrolling page when a modal is open
      className={`${
        showEditPFPModal ? " overflow-hidden" : ""
      }  flex justify-between gap-0 font-opensans ${
        darkMode ? "dark" : ""
      } dark:bg-darkMode-bars h-[calc(100vh-0.0rem)] w-full overflow-hidden`}
    >
      <SideBar />
      <div
        ref={scrollableRef}
        className=" w-full h-full flex-1 overflow-y-scroll scrollble"
      >
        {/* to always scroll up for every page */}
        <ScrollToTop scrollableRef={scrollableRef} />
        {/* navbar */}
        {showNavBar ? <NavBar /> : <RevisionChatBar />}
        {/* routes */}
        <LoggedInRoutes />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
