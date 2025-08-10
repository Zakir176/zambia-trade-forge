import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BookOpen, 
  MessageCircle, 
  Video,
  CheckCircle, 
  TrendingUp,
  Clock,
  Award,
  Target,
  User
} from "lucide-react";

const Mentorship = () => {
  const mentorshipPrograms = [
    {
      icon: User,
      title: "1-on-1 Mentorship",
      description: "Personal guidance from featured podcast guests and successful traders.",
      features: ["Direct access to top traders", "Personalized trading strategy", "Weekly one-hour sessions", "Portfolio review & feedback", "WhatsApp support"],
      price: "K1,200/month",
      duration: "3-month minimum",
      popular: true,
      mentors: ["James Mwanza", "Grace Tembo", "Peter Banda"]
    },
    {
      icon: Users,
      title: "Group Mentorship",
      description: "Learn alongside other aspiring traders in small group sessions.",
      features: ["Small groups (max 8 people)", "Weekly 2-hour sessions", "Peer learning network", "Group challenges", "Resource sharing"],
      price: "K450/month",
      duration: "6-month program",
      popular: false,
      mentors: ["Mary Phiri", "Daniel Sakala", "Ruth Mulenga"]
    },
    {
      icon: BookOpen,
      title: "Podcast Academy",
      description: "Structured learning program based on podcast episodes and guest insights.",
      features: ["Episode-based modules", "Guest expert sessions", "Interactive workshops", "Trading simulator access", "Certificate completion"],
      price: "K800/month",
      duration: "4-month course",
      popular: false,
      mentors: ["All Featured Guests", "Podcast Host Team"]
    }
  ];

  const mentors = [
    {
      name: "James Mwanza",
      specialty: "Risk Management & Psychology",
      experience: "8+ Years",
      students: "200+",
      successRate: "92%",
      image: "/placeholder.svg",
      available: true
    },
    {
      name: "Grace Tembo",
      specialty: "Swing Trading & Strategy",
      experience: "6+ Years",
      students: "150+",
      successRate: "88%",
      image: "/placeholder.svg",
      available: true
    },
    {
      name: "Peter Banda",
      specialty: "Trading Psychology",
      experience: "10+ Years",
      students: "300+",
      successRate: "85%",
      image: "/placeholder.svg",
      available: false
    },
    {
      name: "Mary Phiri",
      specialty: "Institutional Trading",
      experience: "12+ Years",
      students: "100+",
      successRate: "90%",
      image: "/placeholder.svg",
      available: true
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Proven Results",
      description: "Learn from traders who've been featured on our podcast for their success"
    },
    {
      icon: MessageCircle,
      title: "Real Stories",
      description: "Get mentored by the same traders whose stories inspire thousands"
    },
    {
      icon: TrendingUp,
      title: "Practical Strategies",
      description: "Apply the exact methods our podcast guests use to achieve success"
    },
    {
      icon: Award,
      title: "Community Access",
      description: "Join the exclusive community of podcast listeners and successful traders"
    }
  ];

  return (
    <section id="mentorship" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Learn From Podcast Guests
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get direct mentorship from the successful traders featured on our podcast
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center border border-border hover:shadow-elegant transition-all duration-300 hover:border-gold/50">
                <CardContent className="p-6">
                  <div className="h-16 w-16 mx-auto bg-gradient-gold rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-gold-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mentorship Programs */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {mentorshipPrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-elegant ${
                program.popular ? 'border-gold shadow-glow' : 'border-border hover:border-gold/50'
              }`}>
                {program.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-gold-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className={`h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    program.popular ? 'bg-gradient-gold' : 'bg-primary/10'
                  }`}>
                    <Icon className={`h-8 w-8 ${program.popular ? 'text-gold-foreground' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-foreground">{program.price}</div>
                      <div className="text-sm text-muted-foreground">{program.duration}</div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Available Mentors:</p>
                      <div className="flex flex-wrap gap-1">
                        {program.mentors.slice(0, 2).map((mentor, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {mentor}
                          </Badge>
                        ))}
                        {program.mentors.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{program.mentors.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      variant={program.popular ? "hero" : "outline"} 
                      className="w-full"
                    >
                      Start Mentorship
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Mentors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Podcast Guest Mentors</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <Card key={index} className="border border-border hover:shadow-elegant transition-all duration-300 hover:border-gold/50">
                <CardContent className="p-6 text-center">
                  <div className="h-20 w-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  
                  <h4 className="font-bold text-foreground mb-1">{mentor.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{mentor.specialty}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="text-foreground">{mentor.experience}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Students:</span>
                      <span className="text-foreground">{mentor.students}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Success Rate:</span>
                      <span className="text-success">{mentor.successRate}</span>
                    </div>
                  </div>
                  
                  <Badge 
                    variant={mentor.available ? "default" : "secondary"}
                    className="w-full justify-center"
                  >
                    {mentor.available ? "Available" : "Waitlist Only"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <Video className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Live Sessions</h3>
            <p className="text-muted-foreground">Weekly live sessions with podcast guests and mentors</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <MessageCircle className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Direct Access</h3>
            <p className="text-muted-foreground">WhatsApp groups and direct messaging with mentors</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <Clock className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Flexible Schedule</h3>
            <p className="text-muted-foreground">Sessions scheduled around your availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;