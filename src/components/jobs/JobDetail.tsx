import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MapPin,
  Briefcase,
  Clock,
  CalendarDays,
  Building,
  CheckCircle,
  Share2,
  Bookmark,
  ArrowLeft,
} from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Mock job data - in a real app, this would come from an API
const jobsData = [
  {
    id: "1",
    title: "Hotel Receptionist",
    company: "Luxury Palace Hotel",
    companyLogo: "LP",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦60,000 - ₦80,000",
    posted: "2 days ago",
    deadline: "May 30, 2023",
    verified: true,
    description: `<p>We are looking for a professional Hotel Receptionist to serve as our clients' first point of contact. Hotel Receptionist responsibilities include registering guests, managing reservations and providing information about rooms, rates and amenities.</p>
    <p>If you have a knack for customer service and work experience in the hospitality industry, we'd like to meet you. Ultimately, you'll help ensure our front desk provides professional and friendly service to our customers.</p>`,
    responsibilities: [
      "Welcome and register guests in a friendly and efficient manner",
      "Respond to inquiries regarding hotel services and facilities",
      "Handle complaints and requests with a positive attitude",
      "Maintain guest records and update booking platforms",
      "Process payments and handle cash transactions",
      "Answer phone calls and redirect them when necessary",
      "Collaborate with housekeeping and maintenance staff",
    ],
    requirements: [
      "Proven work experience as a Hotel Receptionist or similar role",
      "Understanding of hotel management systems and reservation platforms",
      "Proficiency in English; knowledge of other languages is a plus",
      "Excellent communication and customer service skills",
      "Problem-solving abilities",
      "High school diploma; additional hospitality training is a plus",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Opportunities for career advancement",
      "Staff meals provided",
      "Training and development programs",
      "Employee discounts at hotel facilities",
    ],
    verificationRequired: [
      "ID Verification",
      "Background Check",
      "Reference Check",
    ],
  },
  {
    id: "2",
    title: "Head Chef",
    company: "Ocean View Restaurant",
    companyLogo: "OV",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦150,000 - ₦200,000",
    posted: "1 week ago",
    deadline: "June 15, 2023",
    verified: true,
    description: `<p>We are seeking an experienced Head Chef to lead our kitchen team at Ocean View Restaurant. The ideal candidate will have a passion for creating exceptional dining experiences and a strong background in managing kitchen operations.</p>
    <p>As Head Chef, you will be responsible for menu development, food preparation, and ensuring high-quality standards are maintained at all times.</p>`,
    responsibilities: [
      "Develop and implement menu items based on seasonal availability and customer preferences",
      "Manage kitchen staff, including scheduling, training, and performance evaluations",
      "Ensure compliance with health, safety, and hygiene standards",
      "Control food costs and minimize waste",
      "Order supplies and maintain inventory",
      "Prepare special dishes for customers with dietary requirements",
      "Collaborate with restaurant management to improve service and increase profitability",
    ],
    requirements: [
      "Minimum 5 years of experience in a professional kitchen, with at least 2 years in a leadership role",
      "Culinary degree or equivalent qualification",
      "Strong knowledge of various cooking methods, ingredients, and equipment",
      "Excellent leadership and communication skills",
      "Ability to work under pressure in a fast-paced environment",
      "Creative with exceptional attention to detail",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Health insurance coverage",
      "Opportunities for professional development",
      "Staff meals provided",
      "Flexible scheduling options",
    ],
    verificationRequired: [
      "ID Verification",
      "Background Check",
      "Reference Check",
      "Culinary Skills Assessment",
    ],
  },
  {
    id: "3",
    title: "Housekeeping Supervisor",
    company: "Grand Suites",
    companyLogo: "GS",
    location: "Abuja, Nigeria",
    type: "Full-time",
    salary: "₦90,000 - ₦120,000",
    posted: "3 days ago",
    deadline: "June 5, 2023",
    verified: true,
    description: `<p>Grand Suites is looking for a dedicated Housekeeping Supervisor to oversee our housekeeping operations. The successful candidate will ensure that all guest rooms and public areas meet our high standards of cleanliness and presentation.</p>
    <p>This role requires excellent attention to detail, leadership skills, and the ability to manage a team effectively.</p>`,
    responsibilities: [
      "Supervise and coordinate housekeeping staff activities",
      "Inspect rooms and public areas to ensure cleanliness standards are met",
      "Train new housekeeping staff on procedures and standards",
      "Manage inventory of cleaning supplies and linens",
      "Address guest complaints related to housekeeping services",
      "Create and maintain housekeeping schedules",
      "Implement and enforce safety and security procedures",
    ],
    requirements: [
      "Minimum 3 years of experience in hotel housekeeping, with at least 1 year in a supervisory role",
      "Strong leadership and organizational skills",
      "Excellent attention to detail",
      "Good communication and interpersonal abilities",
      "Knowledge of cleaning chemicals, equipment, and techniques",
      "Ability to stand for extended periods and perform physical tasks",
    ],
    benefits: [
      "Competitive salary with performance incentives",
      "Health benefits package",
      "Accommodation allowance",
      "Career advancement opportunities",
      "Staff discounts on hotel services",
    ],
    verificationRequired: [
      "ID Verification",
      "Background Check",
      "Reference Check",
    ],
  },
  {
    id: "4",
    title: "Bartender",
    company: "Sunset Lounge",
    companyLogo: "SL",
    location: "Port Harcourt, Nigeria",
    type: "Part-time",
    salary: "₦45,000 - ₦60,000",
    posted: "5 days ago",
    deadline: "May 25, 2023",
    verified: false,
    description: `<p>Sunset Lounge is seeking a skilled Bartender to join our team. The ideal candidate will have a passion for mixology and providing excellent customer service in a vibrant lounge environment.</p>
    <p>You will be responsible for preparing and serving drinks, maintaining the bar area, and creating a welcoming atmosphere for our guests.</p>`,
    responsibilities: [
      "Prepare alcoholic and non-alcoholic beverages for bar and restaurant patrons",
      "Interact with customers, take orders and serve drinks",
      "Assess customers' needs and preferences and make recommendations",
      "Mix ingredients to prepare cocktails according to recipes",
      "Restock and replenish bar inventory and supplies",
      "Stay updated on new cocktail recipes and bartending techniques",
      "Maintain a clean and organized bar area",
    ],
    requirements: [
      "Previous experience as a bartender or in a similar role",
      "Knowledge of cocktail recipes and mixology techniques",
      "Excellent customer service skills",
      "Good communication and interpersonal abilities",
      "Ability to work in a fast-paced environment",
      "Available to work evenings and weekends",
    ],
    benefits: [
      "Competitive hourly rate plus tips",
      "Flexible scheduling",
      "Staff meals during shifts",
      "Training and development opportunities",
      "Fun and dynamic work environment",
    ],
    verificationRequired: ["ID Verification", "Background Check"],
  },
  {
    id: "5",
    title: "Event Coordinator",
    company: "Royal Events Center",
    companyLogo: "RE",
    location: "Lagos, Nigeria",
    type: "Contract",
    salary: "₦100,000 - ₦130,000",
    posted: "1 day ago",
    deadline: "June 10, 2023",
    verified: true,
    description: `<p>Royal Events Center is looking for a creative and organized Event Coordinator to join our team. The successful candidate will be responsible for planning, organizing, and executing various events, ensuring client satisfaction and smooth operations.</p>
    <p>This role requires excellent communication skills, attention to detail, and the ability to work under pressure.</p>`,
    responsibilities: [
      "Coordinate and organize events from conception to completion",
      "Meet with clients to understand their requirements and vision",
      "Prepare event proposals and cost estimates",
      "Negotiate with vendors and manage contracts",
      "Coordinate event logistics, including venue, catering, and entertainment",
      "Supervise event staff and volunteers",
      "Handle post-event evaluations and client feedback",
    ],
    requirements: [
      "Proven experience as an event coordinator or similar role",
      "Strong organizational and planning skills",
      "Excellent communication and negotiation abilities",
      "Problem-solving skills and ability to think on your feet",
      "Proficiency in MS Office and event management software",
      "Flexibility to work evenings and weekends when required",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Opportunity to work on diverse and exciting events",
      "Professional development and training",
      "Networking opportunities within the industry",
      "Flexible work arrangements",
    ],
    verificationRequired: [
      "ID Verification",
      "Background Check",
      "Reference Check",
    ],
  },
];

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated, userType } = useAuth();
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");

  // Find the job with the matching ID
  const job = jobsData.find((job) => job.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The job you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/jobs">Browse All Jobs</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleApply = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to apply for this job.",
        variant: "destructive",
      });
      navigate("/login?redirect=/jobs/" + id);
      return;
    }

    if (userType !== "staff") {
      toast({
        title: "Staff Account Required",
        description: "You need a staff account to apply for jobs.",
        variant: "destructive",
      });
      return;
    }

    setIsApplyDialogOpen(true);
  };

  const handleSubmitApplication = () => {
    // In a real app, this would send the application to the backend
    toast({
      title: "Application Submitted",
      description: "Your application has been sent to the employer.",
    });
    setIsApplyDialogOpen(false);
    setCoverLetter("");
  };

  const handleSaveJob = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to save this job.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Job Saved",
      description: "This job has been saved to your favorites.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button variant="ghost" className="mb-4" asChild>
                <Link to="/jobs">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to Jobs
                </Link>
              </Button>
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-3/4">
                    <div className="flex items-center mb-2">
                      <h1 className="text-2xl font-bold mr-2">{job.title}</h1>
                      {job.verified && (
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200"
                        >
                          Verified Employer
                        </Badge>
                      )}
                    </div>
                    <h2 className="text-xl font-medium text-muted-foreground mb-4">
                      {job.company}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Posted {job.posted}
                      </div>
                    </div>
                    <div className="flex items-center text-sm mb-4">
                      <span className="font-medium">Salary:</span>
                      <span className="ml-2">{job.salary}</span>
                    </div>
                    <div className="flex items-center text-sm text-amber-600 mb-6">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      Application deadline: {job.deadline}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        className="flex-1 sm:flex-none"
                        onClick={handleApply}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleSaveJob}
                      >
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/4 flex flex-col items-center justify-center">
                    <Avatar className="h-24 w-24 mb-3">
                      <AvatarImage src="" alt={job.company} />
                      <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                        {job.companyLogo}
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm" className="w-full">
                      <Building className="h-4 w-4 mr-2" /> View Company
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Job Description
                    </h3>
                    <div
                      className="prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: job.description }}
                    />

                    <h4 className="text-lg font-semibold mt-6 mb-3">
                      Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold mt-6 mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold mt-6 mb-3">
                      Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {job.benefits.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Verification Required
                    </h3>
                    <div className="space-y-3">
                      {job.verificationRequired.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Similar Jobs</h3>
                    <div className="space-y-4">
                      {jobsData
                        .filter((j) => j.id !== job.id)
                        .slice(0, 3)
                        .map((similarJob) => (
                          <div
                            key={similarJob.id}
                            className="border-b pb-3 last:border-0 last:pb-0"
                          >
                            <Link
                              to={`/jobs/${similarJob.id}`}
                              className="hover:text-primary"
                            >
                              <h4 className="font-medium">
                                {similarJob.title}
                              </h4>
                            </Link>
                            <p className="text-sm text-muted-foreground">
                              {similarJob.company} •{" "}
                              {similarJob.location.split(",")[0]}
                            </p>
                            <p className="text-sm">{similarJob.salary}</p>
                          </div>
                        ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4" asChild>
                      <Link to="/jobs">View All Jobs</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Ready to Apply?</h3>
              <Button size="lg" className="px-8" onClick={handleApply}>
                Apply for this Position
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <Dialog open={isApplyDialogOpen} onOpenChange={setIsApplyDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Apply for {job.title}</DialogTitle>
            <DialogDescription>
              Complete your application for {job.company}. Your profile
              information will be automatically included.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="cover-letter">Cover Letter</Label>
              <Textarea
                id="cover-letter"
                placeholder="Explain why you're a good fit for this position..."
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                rows={8}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsApplyDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleSubmitApplication}>
              Submit Application
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
