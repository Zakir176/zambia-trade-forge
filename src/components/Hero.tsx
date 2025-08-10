import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-secondary py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-gold/20"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Zambia's #1 Trading Podcast
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Stories That{" "}
              <span className="text-transparent bg-gradient-gold bg-clip-text">
                Change Lives
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-8 lg:pr-8">
              Discover the journeys of Zambia's top traders. Learn from their experiences, 
              challenges, and successes that are transforming the trading industry.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Episodes Released</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">25+</div>
                <div className="text-sm text-muted-foreground">Top Traders Featured</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">10K+</div>
                <div className="text-sm text-muted-foreground">Monthly Listeners</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Listen to Latest Episode
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="h-5 w-5 mr-2" />
                Watch Highlights
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 text-sm text-muted-foreground">
              ✓ New episodes weekly • ✓ Free to listen • ✓ Available on all platforms
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Professional forex trading platform"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Success Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-card border border-border animate-float">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-gradient-success rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-success">+K45,000</div>
                  <div className="text-sm text-muted-foreground">This week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;