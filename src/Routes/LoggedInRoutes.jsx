import React from "react";
import { Route, Routes } from "react-router-dom";
import ManageUsers from "../pages/admin/ManageUsers/page";
import CreateUser from "../pages/admin/CreateUser/page";
import ChangeUser from "../pages/admin/ChangeUser/page";
import ManageWork from "../pages/admin/ManageWork/page";
import CreateWork from "../pages/admin/CreateWork/page";
import ChangeWork from "../pages/admin/ChangeWork/page";
import Revisions from "../pages/admin/Revisions/page";
import CreateRevision from "../pages/admin/CreateRevision/page";
import RevisionsDetails from "../pages/admin/RevisionsDetails/page";
import ChangeRevision from "../pages/admin/ChangeRevision/page";
import Submissions from "../pages/admin/Submissions/page";
import SubmissionsDetail from "../pages/admin/SubmissionsDetail/page";
import Profile from "../pages/admin/Profile/page";
import ChangePassword from "../pages/admin/ChangePassword/page";
import Notifications from "../pages/admin/Notifications/page";
import NotFound from "../pages/admin/NotFound/page";
import Dashboard from "../pages/admin/Dashboard/page";

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
