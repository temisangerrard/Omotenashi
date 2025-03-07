import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const employerSteps = [
  {
    number: "01",
    title: "Register & Verify",
    description:
      "Create an account and submit your business documents for verification.",
  },
  {
    number: "02",
    title: "Post Jobs",
    description:
      "Once verified, post job openings with detailed requirements and expectations.",
  },
  {
    number: "03",
    title: "Review Applicants",
    description:
      "Browse through pre-screened applicants and check their verified credentials.",
  },
  {
    number: "04",
    title: "Hire with Confidence",
    description:
      "Select the best candidates knowing their background has been thoroughly checked.",
  },
];

const staffSteps = [
  {
    number: "01",
    title: "Create Profile",
    description:
      "Sign up and create your professional profile with your skills and experience.",
  },
  {
    number: "02",
    title: "Complete Verification",
    description:
      "Submit your ID, documents, and references for our verification process.",
  },
  {
    number: "03",
    title: "Browse & Apply",
    description:
      "Search for jobs that match your skills and location preferences.",
  },
  {
    number: "04",
    title: "Get Hired",
    description:
      "Receive job offers from verified employers in the hospitality industry.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform makes it easy for both employers and staff to connect
            safely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="bg-primary text-white p-2 rounded-full mr-3 text-sm">
                For Employers
              </span>
            </h3>
            <div className="space-y-8">
              {employerSteps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-6 flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link to="/register?type=employer">Register as Employer</Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="bg-secondary text-secondary-foreground p-2 rounded-full mr-3 text-sm">
                For Staff
              </span>
            </h3>
            <div className="space-y-8">
              {staffSteps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-6 flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary-foreground font-bold">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="secondary" asChild>
                <Link to="/register?type=staff">Register as Staff</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
