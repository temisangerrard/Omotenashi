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
import { Badge } from "@/components/ui/badge";
import { Upload, UserCheck, CheckCircle, Phone } from "lucide-react";

export default function StaffVerification() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Staff Verification</h1>
          <p className="text-muted-foreground">
            Complete your verification to increase your chances of being hired
            by top hospitality businesses.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Provide your personal details
                  </CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className="bg-amber-50 text-amber-700 border-amber-200"
                >
                  Step 1 of 4
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input id="dateOfBirth" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+234..." />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Residential Address</Label>
                <Input id="address" placeholder="Your current address" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="City" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="State" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save & Continue</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>ID Verification</CardTitle>
                  <CardDescription>
                    Upload your identification documents
                  </CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className="bg-slate-100 text-slate-500 border-slate-200"
                >
                  Step 2 of 4
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="bg-slate-100 p-3 rounded-full">
                    <UserCheck className="h-6 w-6 text-slate-500" />
                  </div>
                  <h3 className="font-medium">National ID Card</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Upload your National ID, Voter's Card, or International
                    Passport
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Upload className="h-4 w-4 mr-2" /> Upload Front
                  </Button>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" /> Upload Back
                  </Button>
                </div>
              </div>

              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="bg-slate-100 p-3 rounded-full">
                    <Upload className="h-6 w-6 text-slate-500" />
                  </div>
                  <h3 className="font-medium">Proof of Address</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Upload a utility bill or bank statement from the last 3
                    months
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Upload className="h-4 w-4 mr-2" /> Upload Document
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save & Continue</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Work Experience & References</CardTitle>
                  <CardDescription>
                    Add your previous work experience and references
                  </CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className="bg-slate-100 text-slate-500 border-slate-200"
                >
                  Step 3 of 4
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Previous Employment
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="employerName">Employer Name</Label>
                      <Input
                        id="employerName"
                        placeholder="Previous employer"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input id="jobTitle" placeholder="Your position" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input id="startDate" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">End Date</Label>
                      <Input id="endDate" type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="responsibilities">Responsibilities</Label>
                    <Textarea
                      id="responsibilities"
                      placeholder="Describe your key responsibilities"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Reference Contact</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="refName">Reference Name</Label>
                      <Input id="refName" placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="refPosition">Position</Label>
                      <Input
                        id="refPosition"
                        placeholder="Manager, Supervisor, etc."
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="refEmail">Email</Label>
                      <Input
                        id="refEmail"
                        type="email"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="refPhone">Phone</Label>
                      <Input id="refPhone" placeholder="Phone number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relationship">Relationship</Label>
                    <Input
                      id="relationship"
                      placeholder="How you worked with this person"
                    />
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                + Add Another Reference
              </Button>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save & Continue</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Verification Confirmation</CardTitle>
                  <CardDescription>
                    Review and submit your verification request
                  </CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className="bg-slate-100 text-slate-500 border-slate-200"
                >
                  Step 4 of 4
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  By submitting your verification request, you confirm that:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      All information provided is accurate and complete
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      You consent to background checks being performed
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      You understand that verification may take 1-3 business
                      days
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      You authorize us to contact your references
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Submit Verification Request</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
