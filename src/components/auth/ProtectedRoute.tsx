import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  userType?: "employer" | "staff" | null;
  requireVerification?: boolean;
}

export default function ProtectedRoute({
  children,
  userType = null,
  requireVerification = false,
}: ProtectedRouteProps) {
  const {
    isAuthenticated,
    isLoading,
    userType: currentUserType,
    isVerified,
  } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Check user type if specified
  if (userType && userType !== currentUserType) {
    return <Navigate to="/" />;
  }

  // Check verification if required
  if (requireVerification && !isVerified) {
    if (currentUserType === "employer") {
      return <Navigate to="/employer-verification" />;
    } else if (currentUserType === "staff") {
      return <Navigate to="/staff-verification" />;
    }
  }

  return <>{children}</>;
}
