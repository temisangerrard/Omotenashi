import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import JobListings from "./components/jobs/JobListings";
import JobDetail from "./components/jobs/JobDetail";
import JobPostingForm from "./components/jobs/JobPostingForm";
import StaffListings from "./components/staff/StaffListings";
import StaffProfile from "./components/staff/StaffProfile";
import EmployerVerification from "./components/verification/EmployerVerification";
import StaffVerification from "./components/verification/StaffVerification";
import EmployerDashboard from "./components/dashboard/EmployerDashboard";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { Toaster } from "./components/ui/toaster";
import routes from "tempo-routes";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/staff" element={<StaffListings />} />
            <Route path="/staff/:id" element={<StaffProfile />} />

            {/* Protected Routes */}
            <Route
              path="/post-job"
              element={
                <ProtectedRoute userType="employer">
                  <JobPostingForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employer-verification"
              element={
                <ProtectedRoute userType="employer">
                  <EmployerVerification />
                </ProtectedRoute>
              }
            />
            <Route
              path="/staff-verification"
              element={
                <ProtectedRoute userType="staff">
                  <StaffVerification />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute userType="employer">
                  <EmployerDashboard />
                </ProtectedRoute>
              }
            />

            {import.meta.env.VITE_TEMPO === "true" && (
              <Route path="/tempobook/*" />
            )}
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          <Toaster />
        </>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
