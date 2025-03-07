import {
  CheckCircle,
  Shield,
  UserCheck,
  Building,
  Clock,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Multi-Level Verification",
    description:
      "ID verification, background checks, and previous employer references for maximum security.",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Job Posting Board",
    description:
      "Post and find jobs with filtering options for location, role type, and experience level.",
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: "Employer Dashboard",
    description:
      "Powerful tools for candidate screening, reference checking, and applicant tracking.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "Verified Staff Profiles",
    description:
      "Staff profiles with verified work history, skills assessment badges, and background check status.",
  },
  {
    icon: <Bell className="h-10 w-10 text-primary" />,
    title: "Real-time Notifications",
    description:
      "Stay updated with notifications for new job matches and application updates.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Quick Matching",
    description:
      "Our algorithm matches the right candidates with the right employers, saving time for everyone.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed to create a secure and efficient hiring
            process for Nigeria's hospitality industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
