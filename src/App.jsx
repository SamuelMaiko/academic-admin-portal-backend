import React, { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoggedOutRoutes from "./Routes/LoggedOutRoutes";
import ContextWrapper from "./Context/ContextWrapper";

const App = () => {
  useEffect(() => {
    const loader = document.getElementById("initial-loader");
    if (loader) {
      loader.style.display = "none";
    }
  }, []);

  return (
    <>
      <ContextWrapper>
        <div className="w-full ">
          {/* routes */}
          <LoggedOutRoutes />
        </div>
        <ToastContainer
          position="bottom-left"
          hideProgressBar
          autoClose={1000}
        />
      </ContextWrapper>
    </>
  );
};

export default App;
