import { createContext, useContext, useState, ReactNode } from "react";

// Simplified AuthContext with mock data
interface AuthContextType {
  user: any;
  userType: string;
  isLoading: boolean;
  isAuthenticated: boolean;
  isVerified: boolean;
  signIn: () => Promise<{ error: null }>;
  signUp: () => Promise<{ error: null, user: any }>;
  signOut: () => Promise<void>;
  session: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Mock user for development
  const mockUser = {
    id: "mock-user-id",
    email: "test@example.com",
  };
  
  const [user] = useState(mockUser);
  const [userType] = useState("employer"); // or "staff" to test staff routes
  const [isLoading] = useState(false);
  
  // Mock auth functions that do nothing
  const signIn = async () => ({ error: null });
  const signUp = async () => ({ error: null, user: mockUser });
  const signOut = async () => {};

  const value = {
    user,
    userType,
    isLoading,
    signIn,
    signUp,
    signOut,
    isAuthenticated: true, // Always authenticated
    isVerified: true, // Always verified
    session: { user: mockUser }
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
