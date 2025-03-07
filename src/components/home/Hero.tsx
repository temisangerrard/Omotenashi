import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              Trusted Hospitality Staff Verification & Job Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with verified hospitality businesses and pre-screened
              staff in Nigeria. Our platform ensures trust and safety through
              comprehensive background checks and employer references.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/register?type=employer">I'm an Employer</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/register?type=staff">I'm Looking for Work</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80"
              alt="Hospitality staff"
              className="rounded-lg shadow-xl relative z-10 w-full"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
