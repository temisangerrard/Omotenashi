import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Finding reliable staff used to be a nightmare. With this platform, I can quickly verify candidates' backgrounds and hire with confidence.",
    name: "Oluwaseun Adeyemi",
    role: "Restaurant Owner, Lagos",
    avatar: "OA",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oluwaseun",
  },
  {
    quote:
      "The verification process was thorough but straightforward. I've found consistent work with reputable hotels since joining.",
    name: "Chioma Okonkwo",
    role: "Hotel Receptionist",
    avatar: "CO",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chioma",
  },
  {
    quote:
      "As a hotel manager, I appreciate the detailed background checks. It's saved us time and improved our hiring quality tremendously.",
    name: "Emmanuel Okafor",
    role: "Hotel Manager, Abuja",
    avatar: "EO",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emmanuel",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from employers and staff who have found success on our
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6">
                  <svg
                    width="45"
                    height="36"
                    viewBox="0 0 45 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary/20"
                  >
                    <path
                      d="M13.4 36C9.4 36 6.2 34.6667 3.8 32C1.4 29.2 0.2 25.8667 0.2 22C0.2 17.8667 1.66667 13.9333 4.6 10.2C7.53333 6.46667 11.8 3.33333 17.4 0.8L19.8 4.8C15.1333 6.8 11.6667 9 9.4 11.4C7.13333 13.8 6 16.4 6 19.2C6 20 6.13333 20.8 6.4 21.6C6.66667 22.4 7.13333 23.2 7.8 24C9.53333 22.5333 11.6667 21.8 14.2 21.8C16.6 21.8 18.6667 22.6 20.4 24.2C22.1333 25.8 23 27.8667 23 30.4C23 32.9333 22.0667 35 20.2 36.6C18.3333 38.2 16.0667 39 13.4 39V36ZM35 36C31 36 27.8 34.6667 25.4 32C23 29.2 21.8 25.8667 21.8 22C21.8 17.8667 23.2667 13.9333 26.2 10.2C29.1333 6.46667 33.4 3.33333 39 0.8L41.4 4.8C36.7333 6.8 33.2667 9 31 11.4C28.7333 13.8 27.6 16.4 27.6 19.2C27.6 20 27.7333 20.8 28 21.6C28.2667 22.4 28.7333 23.2 29.4 24C31.1333 22.5333 33.2667 21.8 35.8 21.8C38.2 21.8 40.2667 22.6 42 24.2C43.7333 25.8 44.6 27.8667 44.6 30.4C44.6 32.9333 43.6667 35 41.8 36.6C39.9333 38.2 37.6667 39 35 39V36Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="mb-6 text-lg">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
