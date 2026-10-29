import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import LandingPage from "./LandingPage";
import ForgotPassword from "./component-Login/ForgotPassword";
import LoginPage from "./component-Login/LoginPage";
import PasswordResetLink from "./component-Login/PasswordResetLink";
import ResetSuccessful from "./component-Login/ResetSuccessful";
import ResetPasswordPage from "./component-Login/ResetPassword";
import OtpVerfication from "./component-Login/OtpVerfication";

//Candidate
import UserRegistration from "./Components-Candidate/UserRegCandidate";
import CandidateDashboard from "./Components-Candidate/Dashboard";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/Login",
      element: <LoginPage />,
    },
    {
      path: "/ForgotPassword?",
      element: <ForgotPassword />,
    },
    {
      path: "/OtpVerification",
      element: <OtpVerfication />,
    },
    {
      path: "/ResetPassword",
      element: <ResetPasswordPage />,
    },
    {
      path: "/ResetPassword/Successful",
      element: <ResetSuccessful />,
    },
    {
      path: "/Candidate/Registration",
      element: <UserRegistration />,
    },
    {
      path: "/Candidate/Dashboard",
      element: <CandidateDashboard />,
    },
  ],
  {
    basename: "/Ai-Resume-Builder",
  },
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
