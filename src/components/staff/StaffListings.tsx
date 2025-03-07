import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

interface Staff {
  id: number;
  name: string;
  role: string;
  location: string;
  experience: string;
  availability: "Available" | "Available Next Month" | "Not Available";
  verified: boolean;
}

const staffMembers: Staff[] = [
  {
    id: 1,
    name: "John Okafor",
    role: "Head Chef",
    location: "Lagos, Nigeria",
    experience: "10 years",
    availability: "Available",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Adebayo",
    role: "Restaurant Manager",
    location: "Abuja, Nigeria",
    experience: "8 years",
    availability: "Available Next Month",
    verified: true,
  },
  {
    id: 3,
    name: "Michael Eze",
    role: "Sous Chef",
    location: "Port Harcourt, Nigeria",
    experience: "5 years",
    availability: "Available",
    verified: true,
  }
];

export function StaffListings() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStaff = staffMembers.filter((staff) =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find Staff</h1>
        <Input
          type="search"
          placeholder="Search staff by name, role, or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="grid gap-6">
        {filteredStaff.map((staff) => (
          <Card key={staff.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{staff.name}</h3>
                    {staff.verified && (
                      <Badge className="bg-green-100 text-green-800">Verified</Badge>
                    )}
                  </div>
                  <p className="text-lg text-muted-foreground mt-1">{staff.role}</p>
                  <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {staff.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      {staff.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {staff.availability}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 p-6">
              <Button asChild>
                <Link to={`/staff/${staff.id}`}>View Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
