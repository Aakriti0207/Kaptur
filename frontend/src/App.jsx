import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./core/context/ThemeContext";
import Layout from "./components/Layout";
import Dashboard from "./features/dashboard/pages/Dashboard.jsx";
import Applications from "./features/applications/pages/Applications.jsx";
import Profile from "./features/userProfile/pages/Profile.jsx";
import Login from "./features/auth/pages/Login.jsx";
import ProtectedRoute from "./features/auth/components/ProtectedRoutes.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route path="/" element={<Dashboard />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/insights" element={<div>Insights — coming in V2</div>} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
