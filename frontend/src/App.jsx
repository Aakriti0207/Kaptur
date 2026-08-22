import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./core/context/ThemeContext";
import LandingPage from "./features/landing/pages/LandingPage.jsx";
import PrivacyPolicy from "./features/landing/pages/PrivacyPolicy.jsx";
import TermsOfService from "./features/landing/pages/TermsofServices.jsx";
import Layout from "./components/Layout";
import Dashboard from "./features/dashboard/pages/Dashboard.jsx";
import Applications from "./features/applications/pages/Applications.jsx";
import Profile from "./features/userProfile/pages/Profile.jsx";
import Login from "./features/auth/pages/Login.jsx";
import ProtectedRoute from "./features/auth/components/ProtectedRoutes.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path = "/app" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="applications" element={<Applications />} />
            <Route path="insights" element={<div>Insights — coming in V2</div>} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
