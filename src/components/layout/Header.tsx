import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserCircle, Menu, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
  const { isAuthenticated, userType, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-primary">
            Omotenashi
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/jobs" className="text-sm font-medium hover:text-primary">
            Find Jobs
          </Link>
          <Link to="/staff" className="text-sm font-medium hover:text-primary">
            Find Staff
          </Link>
          {isAuthenticated && userType === "employer" && (
            <Link
              to="/post-job"
              className="text-sm font-medium hover:text-primary"
            >
              Post Job
            </Link>
          )}
          {isAuthenticated && (
            <Link
              to="/dashboard"
              className="text-sm font-medium hover:text-primary"
            >
              Dashboard
            </Link>
          )}
          <Link to="/about" className="text-sm font-medium hover:text-primary">
            About Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <UserCircle className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  {userType === "employer" ? (
                    <DropdownMenuItem asChild>
                      <Link to="/post-job">Post a Job</Link>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem asChild>
                      <Link to="/jobs">Find Jobs</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link
                      to={
                        userType === "employer"
                          ? "/employer-verification"
                          : "/staff-verification"
                      }
                    >
                      Verification
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    className="text-red-600"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hidden md:flex"
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button size="sm" asChild className="hidden md:flex">
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Omotenashi</SheetTitle>
                <SheetDescription>
                  Hospitality Staff Verification & Job Platform
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 flex flex-col space-y-4">
                <SheetClose asChild>
                  <Link
                    to="/jobs"
                    className="text-sm font-medium hover:text-primary"
                  >
                    Find Jobs
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/staff"
                    className="text-sm font-medium hover:text-primary"
                  >
                    Find Staff
                  </Link>
                </SheetClose>
                {isAuthenticated && userType === "employer" && (
                  <SheetClose asChild>
                    <Link
                      to="/post-job"
                      className="text-sm font-medium hover:text-primary"
                    >
                      Post Job
                    </Link>
                  </SheetClose>
                )}
                {isAuthenticated && (
                  <SheetClose asChild>
                    <Link
                      to="/dashboard"
                      className="text-sm font-medium hover:text-primary"
                    >
                      Dashboard
                    </Link>
                  </SheetClose>
                )}
                <SheetClose asChild>
                  <Link
                    to="/about"
                    className="text-sm font-medium hover:text-primary"
                  >
                    About Us
                  </Link>
                </SheetClose>

                {isAuthenticated ? (
                  <SheetClose asChild>
                    <Button
                      onClick={handleSignOut}
                      variant="destructive"
                      className="mt-4"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign out
                    </Button>
                  </SheetClose>
                ) : (
                  <div className="flex flex-col space-y-2 mt-4">
                    <SheetClose asChild>
                      <Button variant="outline" asChild>
                        <Link to="/login">Login</Link>
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button asChild>
                        <Link to="/register">Register</Link>
                      </Button>
                    </SheetClose>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
