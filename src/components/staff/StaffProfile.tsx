import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Briefcase,
  Star,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  Shield,
  Award,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function StaffProfile() {
  const staff = {
    id: 1,
    name: "Adebayo Johnson",
    role: "Hotel Receptionist",
    location: "Lagos, Nigeria",
    experience: "3 years",
    rating: 4.8,
    verified: true,
    email: "adebayo.j@example.com",
    phone: "+234 123 456 7890",
    joinDate: "January 2021",
    bio: "Experienced hotel receptionist with a passion for exceptional customer service. I have worked in various hospitality settings, from boutique hotels to large resorts, and pride myself on creating memorable experiences for guests.",
    skills: [
      { name: "Customer Service", level: 95 },
      { name: "Reservation Management", level: 90 },
      { name: "Front Desk Operations", level: 85 },
      { name: "Conflict Resolution", level: 80 },
      { name: "Computer Literacy", level: 85 },
    ],
    experience: [
      {
        role: "Front Desk Receptionist",
        company: "Luxury Palace Hotel",
        period: "Jan 2021 - Present",
        description:
          "Handle guest check-ins and check-outs, manage reservations, and address guest inquiries and concerns.",
      },
      {
        role: "Guest Relations Assistant",
        company: "Seaside Resort",
        period: "Mar 2019 - Dec 2020",
        description:
          "Assisted with guest services, coordinated with different departments to ensure guest satisfaction, and handled special requests.",
      },
      {
        role: "Customer Service Representative",
        company: "Travel Agency Ltd",
        period: "Jun 2018 - Feb 2019",
        description:
          "Provided information about travel packages, processed bookings, and handled customer inquiries.",
      },
    ],
    education: [
      {
        degree: "Diploma in Hospitality Management",
        institution: "Lagos School of Hospitality",
        year: "2018",
      },
      {
        degree: "Certificate in Customer Service Excellence",
        institution: "Nigerian Institute of Customer Service",
        year: "2019",
      },
    ],
    verificationBadges: [
      { name: "ID Verified", icon: <Shield className="h-4 w-4" /> },
      { name: "Background Checked", icon: <CheckCircle className="h-4 w-4" /> },
      { name: "References Verified", icon: <Award className="h-4 w-4" /> },
    ],
    reviews: [
      {
        name: "Oluwaseun Adeyemi",
        role: "HR Manager, Luxury Palace Hotel",
        rating: 5,
        comment:
          "Adebayo is an exceptional receptionist. His attention to detail and guest-focused approach has significantly improved our guest satisfaction ratings.",
        date: "March 2023",
      },
      {
        name: "Chioma Okonkwo",
        role: "General Manager, Seaside Resort",
        rating: 4.5,
        comment:
          "A reliable and hardworking professional who consistently goes above and beyond for guests. Would highly recommend.",
        date: "December 2020",
      },
    ],
    avatar: "AJ",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adebayo",
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" className="mb-4" asChild>
            <Link to="/staff">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Staff
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card className="mb-6">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarImage src={staff.avatarUrl} alt={staff.name} />
                  <AvatarFallback className="text-3xl">
                    {staff.avatar}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold mb-1">{staff.name}</h2>
                <h3 className="text-lg text-muted-foreground mb-3">
                  {staff.role}
                </h3>

                <div className="flex items-center justify-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <span className="font-medium">{staff.rating}</span>
                  <span className="text-muted-foreground ml-1">rating</span>
                </div>

                <div className="w-full space-y-3 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{staff.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{staff.experience} experience</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="truncate">{staff.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{staff.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>Joined {staff.joinDate}</span>
                  </div>
                </div>

                <div className="w-full">
                  <Button className="w-full mb-2">Contact</Button>
                  <Button variant="outline" className="w-full">
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Verification Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {staff.verificationBadges.map((badge, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-green-50 p-2 rounded-md"
                    >
                      <div className="bg-green-100 p-1.5 rounded-full mr-2">
                        {badge.icon}
                      </div>
                      <span className="text-sm font-medium text-green-800">
                        {badge.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {staff.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">{staff.bio}</p>

                    <h4 className="font-semibold text-lg mb-3">Education</h4>
                    <div className="space-y-4 mb-6">
                      {staff.education.map((edu, index) => (
                        <div key={index}>
                          <h5 className="font-medium">{edu.degree}</h5>
                          <p className="text-muted-foreground">
                            {edu.institution}, {edu.year}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Work Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {staff.experience.map((exp, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-primary pl-4 pb-6"
                        >
                          <h4 className="font-semibold text-lg">{exp.role}</h4>
                          <h5 className="font-medium text-muted-foreground mb-1">
                            {exp.company}
                          </h5>
                          <p className="text-sm text-muted-foreground mb-2">
                            {exp.period}
                          </p>
                          <p>{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills & Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {staff.skills.map((skill, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Employer Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {staff.reviews.map((review, index) => (
                        <div
                          key={index}
                          className="border-b pb-6 last:border-0"
                        >
                          <div className="flex items-center mb-2">
                            <div className="flex mr-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(review.rating) ? "text-yellow-500" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="font-medium">{review.rating}</span>
                          </div>
                          <p className="mb-3">"{review.comment}"</p>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>
                              <strong>{review.name}</strong> • {review.role}
                            </span>
                            <span>{review.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
