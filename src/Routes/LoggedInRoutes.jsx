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
import WorkDetail from "../pages/writer/WorkDetail/page";
import UptakenWork from "../pages/writer/UptakenWork/page";
import SubmitWork from "../pages/writer/SubmitWork/page";
import AssignedWork from "../pages/writer/AssignedWork/page";
import Bookmark from "../pages/writer/Bookmark/page";
import MySubmissions from "../pages/writer/MySubmissions/page";
import MySubmissionsDetail from "../pages/writer/MySubmissionsDetail/page";
import WorkRevisions from "../pages/writer/WorkRevisions/page";
import WriterDashboard from "../pages/writer/WriterDashboard/page";
import WorkFeed from "../pages/writer/WorkFeed/page";

const LoggedInRoutes = () => {
  return (
    <Routes>
      {/* ADMIN ROUTES */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/manage-users/create" element={<CreateUser />} />
      <Route path="/manage-users/:id/change" element={<ChangeUser />} />
      <Route path="/manage-work" element={<ManageWork />} />
      <Route path="/manage-work/create" element={<CreateWork />} />
      <Route path="/manage-work/:id/change" element={<ChangeWork />} />
      <Route path="/revisions" element={<Revisions />} />
      <Route path="/revisions/create" element={<CreateRevision />} />
      <Route path="/revisions/:id/change" element={<ChangeRevision />} />
      <Route path="/submissions" element={<Submissions />} />
      <Route path="/submissions/:id" element={<SubmissionsDetail />} />
      {/* WRITERS ROUTES */}
      <Route path="/work-feed" element={<WorkFeed />} />
      <Route path="/my-dashboard" element={<WriterDashboard />} />
      <Route path="/work/:id" element={<WorkDetail />} />
      <Route path="/work/:id/submit" element={<SubmitWork />} />
      <Route path="/uptaken-work" element={<UptakenWork />} />
      <Route path="/assigned-work" element={<AssignedWork />} />
      <Route path="/my-submissions" element={<MySubmissions />} />
      <Route path="/my-submissions/:id" element={<MySubmissionsDetail />} />
      <Route path="/work-revisions" element={<WorkRevisions />} />
      <Route path="/bookmarks" element={<Bookmark />} />

      {/* SHARED ROUTES*/}
      <Route path="/profile" element={<Profile />} />
      <Route path="/revisions/:id" element={<RevisionsDetails />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings/change-password" element={<ChangePassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default LoggedInRoutes;
