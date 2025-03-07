import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MapPin,
  Briefcase,
  Star,
  Search,
  Filter,
  CheckCircle,
} from "lucide-react";

const staff = [
  {
    id: 1,
    name: "Adebayo Johnson",
    role: "Hotel Receptionist",
    location: "Lagos, Nigeria",
    experience: "3 years",
    rating: 4.8,
    verified: true,
    skills: ["Customer Service", "Reservation Management", "Front Desk"],
    avatar: "AJ",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adebayo",
  },
  {
    id: 2,
    name: "Chioma Okafor",
    role: "Chef",
    location: "Lagos, Nigeria",
    experience: "5 years",
    rating: 4.9,
    verified: true,
    skills: ["Food Preparation", "Menu Planning", "Kitchen Management"],
    avatar: "CO",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chioma",
  },
  {
    id: 3,
    name: "Emmanuel Nwachukwu",
    role: "Housekeeping Supervisor",
    location: "Abuja, Nigeria",
    experience: "4 years",
    rating: 4.7,
    verified: true,
    skills: ["Staff Management", "Inventory Control", "Quality Assurance"],
    avatar: "EN",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emmanuel",
  },
  {
    id: 4,
    name: "Fatima Ibrahim",
    role: "Bartender",
    location: "Port Harcourt, Nigeria",
    experience: "2 years",
    rating: 4.5,
    verified: false,
    skills: ["Mixology", "Customer Service", "Inventory Management"],
    avatar: "FI",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
  },
  {
    id: 5,
    name: "Oluwaseun Adeyemi",
    role: "Event Coordinator",
    location: "Lagos, Nigeria",
    experience: "6 years",
    rating: 4.9,
    verified: true,
    skills: ["Event Planning", "Vendor Management", "Client Relations"],
    avatar: "OA",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oluwaseun",
  },
];

export default function StaffListings() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Find Verified Hospitality Staff
        </h1>
        <p className="text-muted-foreground">
          Browse pre-screened hospitality professionals with verified
          credentials
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
                  <Input placeholder="Role or skill" className="pl-8" />
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                    <SelectItem value="kano">Kano</SelectItem>
                    <SelectItem value="ibadan">Ibadan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="font-medium mb-2">Role</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="receptionist" className="mr-2" />
                    <label htmlFor="receptionist" className="text-sm">
                      Receptionist
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="chef" className="mr-2" />
                    <label htmlFor="chef" className="text-sm">
                      Chef
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="housekeeping" className="mr-2" />
                    <label htmlFor="housekeeping" className="text-sm">
                      Housekeeping
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="bartender" className="mr-2" />
                    <label htmlFor="bartender" className="text-sm">
                      Bartender
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="event-coordinator"
                      className="mr-2"
                    />
                    <label htmlFor="event-coordinator" className="text-sm">
                      Event Coordinator
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Experience</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="0-1" className="mr-2" />
                    <label htmlFor="0-1" className="text-sm">
                      0-1 years
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="1-3" className="mr-2" />
                    <label htmlFor="1-3" className="text-sm">
                      1-3 years
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="3-5" className="mr-2" />
                    <label htmlFor="3-5" className="text-sm">
                      3-5 years
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="5+" className="mr-2" />
                    <label htmlFor="5+" className="text-sm">
                      5+ years
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Verification Status</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="verified"
                      className="mr-2"
                      defaultChecked
                    />
                    <label htmlFor="verified" className="text-sm">
                      Verified Only
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full">
                <Filter className="h-4 w-4 mr-2" /> Apply Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-4">
          {staff.map((person) => (
            <Card key={person.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={person.avatarUrl} alt={person.name} />
                      <AvatarFallback>{person.avatar}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold">{person.name}</h3>
                      {person.verified && (
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200"
                        >
                          Verified
                        </Badge>
                      )}
                    </div>
                    <h4 className="text-lg font-medium text-muted-foreground mb-2">
                      {person.role}
                    </h4>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {person.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {person.experience} experience
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-500" />
                        {person.rating} rating
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {person.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="font-normal"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button>View Profile</Button>
                      <Button variant="outline">Contact</Button>
                    </div>
                  </div>
                  {person.verified && (
                    <div className="flex-shrink-0 hidden md:block">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-green-50 p-2 rounded-full mb-2">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          Fully Verified
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-center mt-6">
            <Button variant="outline" className="mx-1">
              Previous
            </Button>
            <Button variant="outline" className="mx-1 bg-primary text-white">
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
        </div>
      </div>
    </div>
  );
}
