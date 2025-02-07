import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../app/LandingPage/page";
import Login from "../app/Login/page";
import ForgotPassword from "../app/ForgotPassword/page";
import VerifySentCode from "../app/VerifySentCode/page";
import NewPassword from "../app/NewPassword/page";
import ResetSuccessful from "../app/ResetSuccessful/page";
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
