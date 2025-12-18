import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-1 border border-primary/30 rounded-full animate-fade-in">
            <span className="text-xs font-medium tracking-widest text-primary uppercase">
              New Collection 2024
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">WEAR YOUR</span>
            <br />
            <span className="text-gradient">ATTITUDE</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Premium streetwear designed for those who dare to stand out. 
            Crafted with passion, worn with pride.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/collection">
              <Button variant="hero" size="xl" className="group">
                Shop Collection
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/collection">
              <Button variant="outline" size="xl" className="font-display tracking-widest uppercase">
                View Lookbook
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-12 mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="font-display text-4xl text-foreground">50+</div>
              <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1">Designs</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl text-foreground">10K+</div>
              <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1">Customers</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl text-foreground">100%</div>
              <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1">Cotton</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
