import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Briefcase, Clock } from "lucide-react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  salary: string;
  posted: string;
  verified: boolean;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Hotel Manager",
    company: "Transcorp Hilton",
    location: "Abuja, Nigeria",
    type: "Full-time",
    salary: "₦350,000 - ₦450,000",
    posted: "2 days ago",
    verified: true,
  },
  {
    id: 2,
    title: "Executive Chef",
    company: "Eko Hotel & Suites",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    salary: "₦400,000 - ₦600,000",
    posted: "1 week ago",
    verified: true,
  },
  {
    id: 3,
    title: "Restaurant Supervisor",
    company: "Hard Rock Cafe",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    salary: "₦200,000 - ₦250,000",
    posted: "3 days ago",
    verified: true,
  }
];

export function JobListings() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter((job) => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Find Jobs</h1>
            <Input
              type="search"
              placeholder="Search jobs by title, company, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        {job.verified && (
                          <Badge className="bg-green-100 text-green-800">Verified</Badge>
                        )}
                      </div>
                      <p className="text-lg text-muted-foreground mt-1">{job.company}</p>
                      <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.posted}
                        </span>
                      </div>
                      <p className="mt-2 text-primary font-medium">{job.salary}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 p-6">
                  <Button asChild>
                    <Link to={`/jobs/${job.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default JobListings;
