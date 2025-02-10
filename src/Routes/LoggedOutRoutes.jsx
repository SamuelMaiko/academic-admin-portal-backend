import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/admin/LandingPage/page";
import Login from "../pages/admin/Login/page";
import ForgotPassword from "../pages/admin/ForgotPassword/page";
import VerifySentCode from "../pages/admin/VerifySentCode/page";
import NewPassword from "../pages/admin/NewPassword/page";
import ResetSuccessful from "../pages/admin/ResetSuccessful/page";
import EntryPoint from "../EntryPoint";

const LoggedOutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-sent-code" element={<VerifySentCode />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/reset-successful" element={<ResetSuccessful />} />
      <Route path="*" element={<EntryPoint />} />
    </Routes>
  );
};

export default LoggedOutRoutes;
