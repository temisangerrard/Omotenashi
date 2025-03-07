import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Briefcase, GraduationCap, ArrowLeft, Calendar, Star, Clock } from "lucide-react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// Mock staff data - should match the structure in StaffListings
const staffMembers = [
  {
    id: 1,
    name: "John Okafor",
    role: "Head Chef",
    location: "Lagos, Nigeria",
    experience: "10 years",
    availability: "Available",
    verified: true,
    bio: "Experienced Head Chef with expertise in Nigerian and international cuisine. Specializes in fine dining and has worked in several 5-star hotels across West Africa.",
    skills: ["Menu Development", "Kitchen Management", "Food Presentation", "Inventory Control", "Staff Training"],
    languages: ["English", "Yoruba", "Igbo"],
    education: "Culinary Arts Diploma, Lagos Culinary Institute",
    certifications: ["Food Safety and Hygiene Certification", "Advanced Culinary Techniques"],
    previousEmployers: ["Transcorp Hilton Abuja", "Eko Hotel & Suites", "Radisson Blu Lagos"],
    hourlyRate: "₦5,000 - ₦7,000",
    availabilityStatus: "Available Immediately",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 2,
    name: "Sarah Adebayo",
    role: "Restaurant Manager",
    location: "Abuja, Nigeria",
    experience: "8 years",
    availability: "Available Next Month",
    verified: true,
    bio: "Dedicated Restaurant Manager with a passion for exceptional customer service. Experienced in managing high-volume restaurants and implementing efficient operational procedures.",
    skills: ["Staff Management", "Customer Service", "Inventory Management", "Sales Forecasting", "Training & Development"],
    languages: ["English", "French", "Hausa"],
    education: "BSc Hospitality Management, University of Lagos",
    certifications: ["Restaurant Management Certification", "Customer Service Excellence"],
    previousEmployers: ["Sheraton Abuja", "Hard Rock Cafe Lagos", "Southern Sun Ikoyi"],
    hourlyRate: "₦4,500 - ₦6,000",
    availabilityStatus: "Available from June 15",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    rating: 4.9,
    reviews: 18,
  },
  {
    id: 3,
    name: "Michael Eze",
    role: "Sous Chef",
    location: "Port Harcourt, Nigeria",
    experience: "5 years",
    availability: "Available",
    verified: true,
    bio: "Creative Sous Chef with experience in both traditional Nigerian cuisine and international dishes. Strong focus on quality ingredients and innovative cooking techniques.",
    skills: ["Food Preparation", "Menu Planning", "Kitchen Coordination", "Quality Control", "Culinary Creativity"],
    languages: ["English", "Igbo"],
    education: "Culinary Certificate, Port Harcourt Culinary School",
    certifications: ["Food Safety Certification", "Specialized Pastry Techniques"],
    previousEmployers: ["Le Meridien Port Harcourt", "Protea Hotel Select Ikeja", "Federal Palace Hotel"],
    hourlyRate: "₦3,500 - ₦5,000",
    availabilityStatus: "Available Immediately",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
    rating: 4.6,
    reviews: 12,
  }
];

export default function StaffProfile() {
  const { id } = useParams<{ id: string }>();
  const staffId = parseInt(id || "0");
  
  // Find the staff member with the matching ID
  const staff = staffMembers.find(s => s.id === staffId);

  if (!staff) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Staff Profile Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The staff profile you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/staff">Browse All Staff</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button variant="ghost" className="mb-4" asChild>
                <Link to="/staff">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to Staff
                </Link>
              </Button>
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex flex-col items-center">
                    <Avatar className="h-32 w-32 mb-4">
                      <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
                        {staff.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      {staff.verified && (
                        <Badge className="bg-green-100 text-green-800 mb-2">Verified</Badge>
                      )}
                      <div className="flex items-center justify-center mb-2">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-medium">{staff.rating}</span>
                        <span className="text-muted-foreground ml-1">({staff.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h1 className="text-2xl font-bold mb-1">{staff.name}</h1>
                    <h2 className="text-xl text-muted-foreground mb-4">{staff.role}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{staff.location}</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{staff.experience} experience</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{staff.availabilityStatus}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{staff.hourlyRate}/hour</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="w-full md:w-auto">Contact {staff.name.split(' ')[0]}</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">About</h3>
                    <p className="text-muted-foreground mb-6">{staff.bio}</p>
                    
                    <h4 className="font-semibold mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {staff.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {staff.languages.map((language, index) => (
                        <Badge key={index} variant="outline">{language}</Badge>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold mb-2">Education</h4>
                    <p className="text-muted-foreground mb-6">{staff.education}</p>
                    
                    <h4 className="font-semibold mb-2">Certifications</h4>
                    <ul className="list-disc pl-5 mb-6">
                      {staff.certifications.map((cert, index) => (
                        <li key={index} className="text-muted-foreground">{cert}</li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold mb-2">Previous Employers</h4>
                    <ul className="list-disc pl-5">
                      {staff.previousEmployers.map((employer, index) => (
                        <li key={index} className="text-muted-foreground">{employer}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Availability</h3>
                    <p className="text-muted-foreground mb-4">{staff.availabilityStatus}</p>
                    
                    <h4 className="font-medium mb-2">Available Days</h4>
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
                        const isAvailable = staff.availableDays.includes(
                          ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][index]
                        );
                        return (
                          <div 
                            key={day} 
                            className={`text-center p-2 rounded-md text-xs ${
                              isAvailable 
                                ? "bg-green-100 text-green-800" 
                                : "bg-gray-100 text-gray-400"
                            }`}
                          >
                            {day}
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Book a meeting</span>
                    </div>
                    <Button variant="outline" className="w-full">Schedule Interview</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Verification</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span>Identity Verified</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span>Experience Verified</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span>References Checked</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
