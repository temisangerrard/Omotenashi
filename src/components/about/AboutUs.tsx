import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Building, Target } from "lucide-react";

export function AboutUs() {
  const stats = [
    { id: 1, label: "Hospitality Partners", value: "50+", icon: Building },
    { id: 2, label: "Job Seekers", value: "1,000+", icon: Users },
    { id: 3, label: "Cities Covered", value: "10+", icon: MapPin },
    { id: 4, label: "Successful Placements", value: "200+", icon: Target },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">About HospitalityHub</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Connecting Nigeria's finest hospitality talent with leading employers
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <Card className="p-6">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              We're transforming how Nigeria's hospitality industry connects talent with opportunity. 
              Born from firsthand industry experience, we understand the unique challenges both employers 
              and job seekers face in the hospitality sector.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
            <p className="text-muted-foreground">
              We've created a standardized platform that simplifies the hiring process, ensures quality 
              candidates, and helps hospitality professionals advance their careers through verified 
              opportunities with leading establishments.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.id} className="p-6 text-center">
              <CardContent>
                <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Expertise</h2>
        <div className="grid gap-6">
          <Card className="p-6">
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">Industry Knowledge</h3>
              <p className="text-muted-foreground">
                Our team combines decades of experience in Nigeria's hospitality sector with 
                expertise in finance and technology. We understand the unique challenges and 
                opportunities in the local market.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">Quality Standards</h3>
              <p className="text-muted-foreground">
                We've developed rigorous verification processes to ensure both job listings 
                and candidate profiles meet industry standards. Our platform helps maintain 
                professionalism and trust in the hiring process.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">Market Innovation</h3>
              <p className="text-muted-foreground">
                By standardizing applications and streamlining the hiring process, we're 
                making it easier for hospitality businesses to find the right talent, and 
                for professionals to advance their careers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AboutUs; 