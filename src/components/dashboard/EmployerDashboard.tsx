import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  BriefcaseBusiness,
  Users,
  Bell,
  CheckCircle,
  Clock,
  FileText,
  Plus,
  Building,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function EmployerDashboard() {
  const stats = [
    {
      title: "Active Jobs",
      value: "5",
      icon: <BriefcaseBusiness className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Total Applicants",
      value: "28",
      icon: <Users className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Pending Reviews",
      value: "12",
      icon: <Clock className="h-5 w-5" />,
      color: "bg-amber-100 text-amber-700",
    },
    {
      title: "Hired Staff",
      value: "7",
      icon: <CheckCircle className="h-5 w-5" />,
      color: "bg-green-100 text-green-700",
    },
  ];

  const recentApplicants = [
    {
      id: 1,
      name: "Adebayo Johnson",
      role: "Hotel Receptionist",
      applied: "2 hours ago",
      status: "new",
      avatar: "AJ",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adebayo",
      verified: true,
    },
    {
      id: 2,
      name: "Chioma Okafor",
      role: "Chef",
      applied: "1 day ago",
      status: "reviewing",
      avatar: "CO",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chioma",
      verified: true,
    },
    {
      id: 3,
      name: "Emmanuel Nwachukwu",
      role: "Housekeeping Supervisor",
      applied: "2 days ago",
      status: "interviewing",
      avatar: "EN",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emmanuel",
      verified: true,
    },
    {
      id: 4,
      name: "Fatima Ibrahim",
      role: "Bartender",
      applied: "3 days ago",
      status: "rejected",
      avatar: "FI",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
      verified: false,
    },
  ];

  const activeJobs = [
    {
      id: 1,
      title: "Hotel Receptionist",
      applicants: 12,
      posted: "5 days ago",
      deadline: "May 30, 2023",
      status: "active",
    },
    {
      id: 2,
      title: "Head Chef",
      applicants: 8,
      posted: "1 week ago",
      deadline: "June 15, 2023",
      status: "active",
    },
    {
      id: 3,
      title: "Housekeeping Supervisor",
      applicants: 5,
      posted: "3 days ago",
      deadline: "June 5, 2023",
      status: "active",
    },
    {
      id: 4,
      title: "Bartender",
      applicants: 3,
      posted: "5 days ago",
      deadline: "May 25, 2023",
      status: "active",
    },
    {
      id: 5,
      title: "Event Coordinator",
      applicants: 0,
      posted: "1 day ago",
      deadline: "June 10, 2023",
      status: "active",
    },
  ];

  const notifications = [
    {
      id: 1,
      message: "Adebayo Johnson applied for Hotel Receptionist",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      message: "Chioma Okafor's background check is complete",
      time: "1 day ago",
      read: false,
    },
    {
      id: 3,
      message: "Your job posting for Head Chef will expire in 3 days",
      time: "2 days ago",
      read: true,
    },
    {
      id: 4,
      message: "Emmanuel Nwachukwu accepted your interview invitation",
      time: "3 days ago",
      read: true,
    },
  ];

  const verificationStatus = 85;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-10 px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-1">Employer Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your job postings and applicants
              </p>
            </div>
            <div className="mt-4 md:mt-0 space-x-2">
              <Button asChild>
                <Link to="/post-job">Post New Job</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/employer-verification">Complete Verification</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    {stat.icon}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Active Job Postings</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/post-job">+ New Job</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeJobs.map((job) => (
                      <div
                        key={job.id}
                        className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div>
                          <h4 className="font-medium">{job.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <span className="flex items-center mr-3">
                              <Users className="h-3.5 w-3.5 mr-1" />
                              {job.applicants} applicants
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              Posted {job.posted}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Badge
                            variant="outline"
                            className="mr-2 bg-green-50 text-green-700 border-green-200"
                          >
                            {job.status}
                          </Badge>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/jobs/${job.id}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/jobs">View All Jobs</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Verification Status</CardTitle>
                  <CardDescription>
                    Complete your business verification to unlock all features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Profile Completion
                        </span>
                        <span className="text-sm font-medium">
                          {verificationStatus}%
                        </span>
                      </div>
                      <Progress value={verificationStatus} className="h-2" />
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-amber-800">
                      <h4 className="font-medium flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Verification in Progress
                      </h4>
                      <p className="text-sm mt-1">
                        Your business documents are being reviewed. This process
                        typically takes 1-3 business days.
                      </p>
                    </div>

                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/employer-verification">
                        Complete Verification
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applicants</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentApplicants.map((applicant) => (
                      <div
                        key={applicant.id}
                        className="flex items-start space-x-4 border-b pb-4 last:border-0 last:pb-0"
                      >
                        <Avatar>
                          <AvatarImage
                            src={applicant.avatarUrl}
                            alt={applicant.name}
                          />
                          <AvatarFallback>{applicant.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{applicant.name}</h4>
                            {applicant.verified && (
                              <Badge
                                variant="outline"
                                className="text-xs bg-green-50 text-green-700 border-green-200"
                              >
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {applicant.role}
                          </p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">
                              Applied {applicant.applied}
                            </span>
                            <Badge
                              variant="outline"
                              className={`
                              ${applicant.status === "new" ? "bg-blue-50 text-blue-700 border-blue-200" : ""}
                              ${applicant.status === "reviewing" ? "bg-amber-50 text-amber-700 border-amber-200" : ""}
                              ${applicant.status === "interviewing" ? "bg-purple-50 text-purple-700 border-purple-200" : ""}
                              ${applicant.status === "rejected" ? "bg-slate-50 text-slate-700 border-slate-200" : ""}
                            `}
                            >
                              {applicant.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Applicants
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex items-start space-x-4 border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div
                          className={`p-2 rounded-full flex-shrink-0 ${notification.read ? "bg-slate-100" : "bg-blue-100"}`}
                        >
                          <Bell
                            className={`h-4 w-4 ${notification.read ? "text-slate-500" : "text-blue-500"}`}
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p
                            className={`text-sm ${notification.read ? "text-muted-foreground" : "font-medium"}`}
                          >
                            {notification.message}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {notification.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Notifications
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
