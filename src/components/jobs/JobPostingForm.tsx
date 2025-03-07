import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function JobPostingForm() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Post a New Job</h1>
          <p className="text-muted-foreground">
            Create a job posting to find qualified hospitality staff for your
            business.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
            <CardDescription>
              Provide information about the position you're hiring for
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                placeholder="e.g. Hotel Receptionist, Chef, Waiter"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="jobType">Job Type</Label>
                <Select>
                  <SelectTrigger id="jobType">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="temporary">Temporary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experienceLevel">Experience Level</Label>
                <Select>
                  <SelectTrigger id="experienceLevel">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="experienced">Experienced</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, State" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Salary Range (₦)</Label>
                <Input id="salary" placeholder="e.g. 50,000 - 80,000" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the job responsibilities, requirements, and benefits"
                rows={6}
              />
            </div>

            <div className="space-y-3">
              <Label>Required Skills</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="skill1" />
                  <label htmlFor="skill1" className="text-sm">
                    Customer Service
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="skill2" />
                  <label htmlFor="skill2" className="text-sm">
                    Food Preparation
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="skill3" />
                  <label htmlFor="skill3" className="text-sm">
                    Housekeeping
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="skill4" />
                  <label htmlFor="skill4" className="text-sm">
                    Front Desk
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="skill5" />
                  <label htmlFor="skill5" className="text-sm">
                    Bartending
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="skill6" />
                  <label htmlFor="skill6" className="text-sm">
                    Event Planning
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="applicationDeadline">Application Deadline</Label>
              <Input id="applicationDeadline" type="date" />
            </div>

            <div className="space-y-2">
              <Label>Verification Requirements</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="req1" defaultChecked />
                  <label htmlFor="req1" className="text-sm">
                    ID Verification
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="req2" defaultChecked />
                  <label htmlFor="req2" className="text-sm">
                    Background Check
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="req3" defaultChecked />
                  <label htmlFor="req3" className="text-sm">
                    Reference Check
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save as Draft</Button>
            <Button>Post Job</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
