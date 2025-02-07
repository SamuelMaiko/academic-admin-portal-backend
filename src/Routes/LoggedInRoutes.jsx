import React from "react";
import { Route, Routes } from "react-router-dom";
import ManageUsers from "../app/ManageUsers/page";
import CreateUser from "../app/CreateUser/page";
import ChangeUser from "../app/ChangeUser/page";
import ManageWork from "../app/ManageWork/page";
import CreateWork from "../app/CreateWork/page";
import ChangeWork from "../app/ChangeWork/page";
import Revisions from "../app/Revisions/page";
import CreateRevision from "../app/CreateRevision/page";
import RevisionsDetails from "../app/RevisionsDetails/page";
import ChangeRevision from "../app/ChangeRevision/page";
import Submissions from "../app/Submissions/page";
import SubmissionsDetail from "../app/SubmissionsDetail/page";
import Profile from "../app/Profile/page";
import ChangePassword from "../app/ChangePassword/page";
import Notifications from "../app/Notifications/page";
import NotFound from "../app/NotFound/page";
import Dashboard from "../app/Dashboard/page";

const LoggedInRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/manage-users/create" element={<CreateUser />} />
      <Route path="/manage-users/:id/change" element={<ChangeUser />} />
      <Route path="/manage-work" element={<ManageWork />} />
      <Route path="/manage-work/create" element={<CreateWork />} />
      <Route path="/manage-work/:id/change" element={<ChangeWork />} />
      <Route path="/revisions" element={<Revisions />} />
      <Route path="/revisions/create" element={<CreateRevision />} />
      <Route path="/revisions/:id" element={<RevisionsDetails />} />
      <Route path="/revisions/:id/change" element={<ChangeRevision />} />
      <Route path="/submissions" element={<Submissions />} />
      <Route path="/submissions/:id" element={<SubmissionsDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings/change-password" element={<ChangePassword />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default LoggedInRoutes;
