import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/components_lite/Home";
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy.jsx";
import TermsofService from "./components/components_lite/TermsofService.jsx";
import Jobs from "./components/components_lite/Jobs.jsx";
import Browse from "./components/components_lite/Browse.jsx";
import Profile from "./components/components_lite/Profile.jsx";
import Description from "./components/components_lite/Description.jsx";

import Companies from "./components/admincomponent/Companies";
import CompanyCreate from "./components/admincomponent/CompanyCreate";
import CompanySetup from "./components/admincomponent/CompanySetup";
import AdminJobs from "./components/admincomponent/AdminJobs.jsx";
import PostJob from "./components/admincomponent/PostJob";
import Applicants from "./components/admincomponent/Applicants";
import ProtectedRoute from "./components/admincomponent/ProtectedRoute";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/description/:id", element: <Description /> },
  { path: "/Profile", element: <Profile /> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
  { path: "/TermsofService", element: <TermsofService /> },
  { path: "/Jobs", element: <Jobs /> },
  { path: "/Browse", element: <Browse /> },

  // Admin routes
  {
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        <Companies />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <CompanyCreate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectedRoute>
        <CompanySetup />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute>
        <AdminJobs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoute>
        <PostJob />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        <Applicants />
      </ProtectedRoute>
    ),
  },

  // 🔥 Fallback route (prevents ugly 404 error page)
  {
    path: "*",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;