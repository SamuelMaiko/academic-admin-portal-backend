import React, { useEffect, useState } from "react";
import "./App.css";
import EntryPoint from "./EntryPoint";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StateContext, { useStateShareContext } from "./Context/StateContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./SharedComponents/Loader";
import LandingPage from "./app/LandingPage/page";
import Login from "./app/Login/page";
import SignUp from "./app/SignUp/page";
import ScrollToTop from "./SharedComponents/ScrollToTop ";
import ForgotPassword from "./app/ForgotPassword/page";
import VerifySentCode from "./app/VerifySentCode/page";
import NewPassword from "./app/NewPassword/page";
import ResetSuccessful from "./app/ResetSuccessful/page";
import Onboarding from "./app/Onboarding/page";
import ProgressBarContext from "./Context/ProgressBarContext";
import FillDetails from "./app/Onboarding/pages/FillDetails";
import VerifyEmail from "./app/Onboarding/pages/VerifyEmail";
import CompleteProfile from "./app/Onboarding/pages/CompleteProfile";
import OnboardingNewPassword from "./app/Onboarding/pages/OnboardingNewPassword";
import Success from "./app/Onboarding/pages/Success";
import NotificationContext from "./Context/NotificationContext";
import AdminContext from "./Context/AdminContext";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loader = document.getElementById("initial-loader");
    if (loader) {
      loader.style.display = "none";
    }
  }, []);

  if (loading) {
    return (
      <div
        className={`bg-[rgba(0,0,0,0.9)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
      >
        <Loader />
      </div>
    );
  }
  return (
    <>
      <BrowserRouter>
        <StateContext>
          <ProgressBarContext>
            <NotificationContext>
              <AdminContext>
                <ScrollToTop />
                <div className="w-full ">
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                    <Route
                      path="/verify-sent-code"
                      element={<VerifySentCode />}
                    />
                    <Route path="/new-password" element={<NewPassword />} />
                    <Route
                      path="/reset-successful"
                      element={<ResetSuccessful />}
                    />
                    {/* <Route path="*" element={<RoutingApp />} /> */}
                    <Route path="/onboarding" element={<Onboarding />}>
                      <Route path="verify-email" element={<VerifyEmail />} />
                      <Route path="fill-details" element={<FillDetails />} />
                      <Route
                        path="complete-profile"
                        element={<CompleteProfile />}
                      />
                      <Route
                        path="change-password"
                        element={<OnboardingNewPassword />}
                      />
                      <Route path="success" element={<Success />} />
                    </Route>
                    <Route path="*" element={<EntryPoint />} />
                  </Routes>
                </div>
                {/* <MobileNavBar /> */}
                {/* <EntryPoint /> */}
                <ToastContainer position="bottom-left" />
              </AdminContext>
            </NotificationContext>
          </ProgressBarContext>
        </StateContext>
      </BrowserRouter>
    </>
  );
};

export default App;
