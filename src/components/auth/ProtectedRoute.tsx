import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  userType?: "employer" | "staff" | null;
  requireVerification?: boolean;
}

// Simplified ProtectedRoute that always renders children
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return <>{children}</>;
};

export default ProtectedRoute;
