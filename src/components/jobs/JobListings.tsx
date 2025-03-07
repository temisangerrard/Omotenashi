import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Briefcase,
  Clock,
  CalendarDays,
  Search,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const jobs = [
  {
    id: 1,
    title: "Hotel Receptionist",
    company: "Luxury Palace Hotel",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦60,000 - ₦80,000",
    posted: "2 days ago",
    deadline: "May 30, 2023",
    verified: true,
  },
  {
    id: 2,
    title: "Head Chef",
    company: "Ocean View Restaurant",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦150,000 - ₦200,000",
    posted: "1 week ago",
    deadline: "June 15, 2023",
    verified: true,
  },
  {
    id: 3,
    title: "Housekeeping Supervisor",
    company: "Grand Suites",
    location: "Abuja, Nigeria",
    type: "Full-time",
    salary: "₦90,000 - ₦120,000",
    posted: "3 days ago",
    deadline: "June 5, 2023",
    verified: true,
  },
  {
    id: 4,
    title: "Bartender",
    company: "Sunset Lounge",
    location: "Port Harcourt, Nigeria",
    type: "Part-time",
    salary: "₦45,000 - ₦60,000",
    posted: "5 days ago",
    deadline: "May 25, 2023",
    verified: false,
  },
  {
    id: 5,
    title: "Event Coordinator",
    company: "Royal Events Center",
    location: "Lagos, Nigeria",
    type: "Contract",
    salary: "₦100,000 - ₦130,000",
    posted: "1 day ago",
    deadline: "June 10, 2023",
    verified: true,
  },
];

export default function JobListings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobTypes, setJobTypes] = useState({
    fullTime: false,
    partTime: false,
    contract: false,
    temporary: false,
  });
  const [experienceLevels, setExperienceLevels] = useState({
    entry: false,
    intermediate: false,
    experienced: false,
    senior: false,
  });
  const [salaryRange, setSalaryRange] = useState("");

  // Filter jobs based on search criteria
  const filteredJobs = jobs.filter((job) => {
    // Search term filter
    if (
      searchTerm &&
      !job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !job.company.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Location filter
    if (
      location &&
      !job.location.toLowerCase().includes(location.toLowerCase())
    ) {
      return false;
    }

    // Job type filter
    const anyJobTypeSelected = Object.values(jobTypes).some(Boolean);
    if (anyJobTypeSelected) {
      if (
        jobTypes.fullTime &&
        job.type !== "Full-time" &&
        jobTypes.partTime &&
        job.type !== "Part-time" &&
        jobTypes.contract &&
        job.type !== "Contract" &&
        jobTypes.temporary &&
        job.type !== "Temporary"
      ) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-10 px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Find Hospitality Jobs</h1>
            <p className="text-muted-foreground">
              Browse verified job opportunities in the hospitality industry
              across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-4 space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Search</h3>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Job title or keyword"
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <Select onValueChange={setLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="All locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All locations</SelectItem>
                        <SelectItem value="lagos">Lagos</SelectItem>
                        <SelectItem value="abuja">Abuja</SelectItem>
                        <SelectItem value="port-harcourt">
                          Port Harcourt
                        </SelectItem>
                        <SelectItem value="kano">Kano</SelectItem>
                        <SelectItem value="ibadan">Ibadan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Job Type</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="full-time"
                          checked={jobTypes.fullTime}
                          onCheckedChange={(checked) =>
                            setJobTypes({ ...jobTypes, fullTime: !!checked })
                          }
                        />
                        <label htmlFor="full-time" className="text-sm">
                          Full-time
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="part-time"
                          checked={jobTypes.partTime}
                          onCheckedChange={(checked) =>
                            setJobTypes({ ...jobTypes, partTime: !!checked })
                          }
                        />
                        <label htmlFor="part-time" className="text-sm">
                          Part-time
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="contract"
                          checked={jobTypes.contract}
                          onCheckedChange={(checked) =>
                            setJobTypes({ ...jobTypes, contract: !!checked })
                          }
                        />
                        <label htmlFor="contract" className="text-sm">
                          Contract
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="temporary"
                          checked={jobTypes.temporary}
                          onCheckedChange={(checked) =>
                            setJobTypes({ ...jobTypes, temporary: !!checked })
                          }
                        />
                        <label htmlFor="temporary" className="text-sm">
                          Temporary
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Experience Level</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="entry"
                          checked={experienceLevels.entry}
                          onCheckedChange={(checked) =>
                            setExperienceLevels({
                              ...experienceLevels,
                              entry: !!checked,
                            })
                          }
                        />
                        <label htmlFor="entry" className="text-sm">
                          Entry Level
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="intermediate"
                          checked={experienceLevels.intermediate}
                          onCheckedChange={(checked) =>
                            setExperienceLevels({
                              ...experienceLevels,
                              intermediate: !!checked,
                            })
                          }
                        />
                        <label htmlFor="intermediate" className="text-sm">
                          Intermediate
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="experienced"
                          checked={experienceLevels.experienced}
                          onCheckedChange={(checked) =>
                            setExperienceLevels({
                              ...experienceLevels,
                              experienced: !!checked,
                            })
                          }
                        />
                        <label htmlFor="experienced" className="text-sm">
                          Experienced
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="senior"
                          checked={experienceLevels.senior}
                          onCheckedChange={(checked) =>
                            setExperienceLevels({
                              ...experienceLevels,
                              senior: !!checked,
                            })
                          }
                        />
                        <label htmlFor="senior" className="text-sm">
                          Senior
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Salary Range</h3>
                    <Select onValueChange={setSalaryRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any salary" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any salary</SelectItem>
                        <SelectItem value="0-50000">₦0 - ₦50,000</SelectItem>
                        <SelectItem value="50000-100000">
                          ₦50,000 - ₦100,000
                        </SelectItem>
                        <SelectItem value="100000-150000">
                          ₦100,000 - ₦150,000
                        </SelectItem>
                        <SelectItem value="150000+">₦150,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    className="w-full"
                    onClick={() => {
                      // Reset all filters
                      setSearchTerm("");
                      setLocation("");
                      setJobTypes({
                        fullTime: false,
                        partTime: false,
                        contract: false,
                        temporary: false,
                      });
                      setExperienceLevels({
                        entry: false,
                        intermediate: false,
                        experienced: false,
                        senior: false,
                      });
                      setSalaryRange("");
                    }}
                  >
                    <Filter className="h-4 w-4 mr-2" /> Reset Filters
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <Card key={job.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-semibold mr-2">
                              {job.title}
                            </h3>
                            {job.verified && (
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                Verified
                              </Badge>
                            )}
                          </div>
                          <h4 className="text-lg font-medium text-muted-foreground mb-2">
                            {job.company}
                          </h4>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
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
                          <div className="flex items-center text-sm text-amber-600">
                            <CalendarDays className="h-4 w-4 mr-1" />
                            Application deadline: {job.deadline}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-slate-50 px-6 py-3 flex justify-end">
                      <Button asChild>
                        <Link to={`/jobs/${job.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No jobs found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search filters
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      // Reset all filters
                      setSearchTerm("");
                      setLocation("");
                      setJobTypes({
                        fullTime: false,
                        partTime: false,
                        contract: false,
                        temporary: false,
                      });
                      setExperienceLevels({
                        entry: false,
                        intermediate: false,
                        experienced: false,
                        senior: false,
                      });
                      setSalaryRange("");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}

              {filteredJobs.length > 0 && (
                <div className="flex justify-center mt-6">
                  <Button variant="outline" className="mx-1">
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    className="mx-1 bg-primary text-white"
                  >
                    1
                  </Button>
                  <Button variant="outline" className="mx-1">
                    2
                  </Button>
                  <Button variant="outline" className="mx-1">
                    3
                  </Button>
                  <Button variant="outline" className="mx-1">
                    Next
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
