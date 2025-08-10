import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Signal, 
  Users, 
  BookOpen, 
  Crown, 
  CheckCircle, 
  TrendingUp,
  MessageCircle,
  Calendar
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Signal,
      title: "Trading Signals",
      description: "Get real-time, high-accuracy forex signals delivered to your phone.",
      features: ["90%+ Accuracy Rate", "5-10 Signals Daily", "Risk Management", "Entry & Exit Points"],
      price: "K199/month",
      popular: false
    },
    {
      icon: Users,
      title: "1-on-1 Mentorship",
      description: "Personal coaching with experienced traders to accelerate your success.",
      features: ["Personal Trading Coach", "Custom Strategy", "Weekly Sessions", "Portfolio Review"],
      price: "K799/month",
      popular: true
    },
    {
      icon: BookOpen,
      title: "Trading Academy",
      description: "Comprehensive courses from beginner basics to advanced strategies.",
      features: ["Video Tutorials", "Live Webinars", "Trading Psychology", "Risk Management"],
      price: "K299/month",
      popular: false
    },
    {
      icon: Crown,
      title: "VIP Membership",
      description: "All-inclusive package for serious traders who want maximum support.",
      features: ["Everything Included", "Priority Support", "Exclusive Signals", "Monthly Calls"],
      price: "K1,499/month",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Trading Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package to match your trading goals and experience level
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-elegant ${
                service.popular ? 'border-gold shadow-glow' : 'border-border hover:border-gold/50'
              }`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-gold-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className={`h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    service.popular ? 'bg-gradient-gold' : 'bg-primary/10'
                  }`}>
                    <Icon className={`h-8 w-8 ${service.popular ? 'text-gold-foreground' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center border-t border-border pt-6">
                    <div className="text-2xl font-bold text-foreground mb-4">{service.price}</div>
                    <Button 
                      variant={service.popular ? "hero" : "outline"} 
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <MessageCircle className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">WhatsApp Support</h3>
            <p className="text-muted-foreground">Get instant support via WhatsApp for all your trading questions</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Weekly Webinars</h3>
            <p className="text-muted-foreground">Join live sessions with expert traders every week</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <TrendingUp className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Performance Tracking</h3>
            <p className="text-muted-foreground">Monitor your progress with detailed analytics and reports</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;