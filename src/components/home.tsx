import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./home/Hero";
import Features from "./home/Features";
import HowItWorks from "./home/HowItWorks";
import Testimonials from "./home/Testimonials";
import CTASection from "./home/CTASection";

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
