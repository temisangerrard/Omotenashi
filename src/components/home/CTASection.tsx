import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Ready to Transform Your Hiring Process?
        </h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Join thousands of hospitality businesses and professionals building
          trusted relationships through verified connections.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register?type=employer">Register as Employer</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/10"
            asChild
          >
            <Link to="/register?type=staff">Register as Staff</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
