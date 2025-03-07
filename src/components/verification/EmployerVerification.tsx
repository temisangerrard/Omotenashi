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
import { Upload, Building, CheckCircle } from "lucide-react";

export default function EmployerVerification() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Business Verification</h1>
          <p className="text-muted-foreground">
            Complete your business verification to gain full access to the
            platform and start posting jobs.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Business Information</CardTitle>
                  <CardDescription>
                    Provide details about your hospitality business
                  </CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className="bg-amber-50 text-amber-700 border-amber-200"
                >
                  Step 1 of 3
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    placeholder="Your Hotel or Restaurant Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Input
                    id="businessType"
                    placeholder="Hotel, Restaurant, etc."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessAddress">Business Address</Label>
                <Input id="businessAddress" placeholder="Full address" />
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
              <div className="space-y-2">
                <Label htmlFor="businessDescription">
                  Business Description
                </Label>
                <Textarea
                  id="businessDescription"
                  placeholder="Tell us about your business"
                  rows={4}
                />
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
                  <CardTitle>Document Verification</CardTitle>
                  <CardDescription>
                    Upload required business documents
                  </CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className="bg-slate-100 text-slate-500 border-slate-200"
                >
                  Step 2 of 3
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="bg-slate-100 p-3 rounded-full">
                    <Building className="h-6 w-6 text-slate-500" />
                  </div>
                  <h3 className="font-medium">Business Registration</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Upload your business registration certificate or CAC
                    document
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Upload className="h-4 w-4 mr-2" /> Upload Document
                  </Button>
                </div>
              </div>

              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="bg-slate-100 p-3 rounded-full">
                    <Upload className="h-6 w-6 text-slate-500" />
                  </div>
                  <h3 className="font-medium">Tax Identification</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Upload your Tax Identification Number (TIN) certificate
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
                  <CardTitle>Verification Confirmation</CardTitle>
                  <CardDescription>
                    Review and submit your verification request
                  </CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className="bg-slate-100 text-slate-500 border-slate-200"
                >
                  Step 3 of 3
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
                      You are authorized to represent this business
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      You understand that verification may take 1-3 business
                      days
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
