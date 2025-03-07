import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { supabase } from "@/lib/supabase";
import { Session, User } from "@supabase/supabase-js";

type UserType = "employer" | "staff" | null;

interface AuthContextType {
  user: User | null;
  userType: UserType;
  session: Session | null;
  isLoading: boolean;
  signIn: (
    email: string,
    password: string,
    type: UserType,
  ) => Promise<{ error: any | null }>;
  signUp: (
    email: string,
    password: string,
    type: UserType,
    userData: any,
  ) => Promise<{ error: any | null; user: User | null }>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
  isVerified: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<UserType>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Check for active session on load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        getUserType(session.user.id);
      } else {
        setIsLoading(false);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        getUserType(session.user.id);
      } else {
        setUserType(null);
        setIsVerified(false);
        setIsLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function getUserType(userId: string) {
    try {
      // First check if user is an employer
      const { data: employerData, error: employerError } = await supabase
        .from("employers")
        .select("id, is_verified")
        .eq("user_id", userId)
        .single();

      if (employerData) {
        setUserType("employer");
        setIsVerified(employerData.is_verified);
        setIsLoading(false);
        return;
      }

      // If not an employer, check if user is staff
      const { data: staffData, error: staffError } = await supabase
        .from("staff")
        .select("id, is_verified")
        .eq("user_id", userId)
        .single();

      if (staffData) {
        setUserType("staff");
        setIsVerified(staffData.is_verified);
        setIsLoading(false);
        return;
      }

      // If we get here, user type is not set yet
      setUserType(null);
      setIsVerified(false);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user type:", error);
      setUserType(null);
      setIsVerified(false);
      setIsLoading(false);
    }
  }

  async function signIn(email: string, password: string, type: UserType) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { error };
      }

      // For demo purposes, we'll set the user type directly
      // In a real app, this would be verified from the database
      setUserType(type);

      return { error: null };
    } catch (error) {
      return { error };
    }
  }

  async function signUp(
    email: string,
    password: string,
    type: UserType,
    userData: any,
  ) {
    try {
      // Create auth user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            user_type: type,
            ...userData,
          },
        },
      });

      if (error) {
        return { error, user: null };
      }

      if (data.user) {
        // Create profile in the appropriate table
        if (type === "employer") {
          const { error: profileError } = await supabase
            .from("employers")
            .insert([
              {
                user_id: data.user.id,
                business_name: userData.businessName,
                first_name: userData.firstName,
                last_name: userData.lastName,
                is_verified: false,
              },
            ]);

          if (profileError) {
            return { error: profileError, user: data.user };
          }
        } else if (type === "staff") {
          const { error: profileError } = await supabase.from("staff").insert([
            {
              user_id: data.user.id,
              first_name: userData.firstName,
              last_name: userData.lastName,
              is_verified: false,
            },
          ]);

          if (profileError) {
            return { error: profileError, user: data.user };
          }
        }

        setUserType(type);
        return { error: null, user: data.user };
      }

      return { error: new Error("User creation failed"), user: null };
    } catch (error) {
      return { error, user: null };
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    setUserType(null);
    setSession(null);
    setIsVerified(false);
  }

  const value = {
    user,
    userType,
    session,
    isLoading,
    signIn,
    signUp,
    signOut,
    isAuthenticated: !!user,
    isVerified,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
