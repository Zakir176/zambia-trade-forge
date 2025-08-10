import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Award, 
  Users, 
  Calendar,
  Play,
  ExternalLink
} from "lucide-react";

const TopTraders = () => {
  const traders = [
    {
      name: "James Mwanza",
      title: "Professional Forex Trader",
      location: "Lusaka",
      image: "/placeholder.svg",
      specialty: "Risk Management Expert",
      experience: "8+ Years",
      achievements: ["K2M+ Portfolio", "95% Win Rate", "500+ Students"],
      featured: true,
      episodeNumber: 1,
      story: "From losing his life savings to becoming Zambia's most respected trader, James shares his incredible journey of resilience and success.",
      keyLessons: ["Never risk more than 2% per trade", "Psychology beats strategy", "Consistency over perfection"]
    },
    {
      name: "Grace Tembo",
      title: "Trading Consultant & Mentor",
      location: "Kitwe",
      image: "/placeholder.svg",
      specialty: "Swing Trading",
      experience: "6+ Years",
      achievements: ["Trading Academy", "300+ Mentees", "85% Success Rate"],
      featured: false,
      episodeNumber: 2,
      story: "Grace built Zambia's first female-led trading consultancy, empowering hundreds of women to achieve financial independence.",
      keyLessons: ["Start small, think big", "Education before execution", "Build your network"]
    },
    {
      name: "Peter Banda",
      title: "Trading Psychologist",
      location: "Ndola",
      image: "/placeholder.svg",
      specialty: "Market Psychology",
      experience: "10+ Years",
      achievements: ["PhD in Psychology", "Trading Author", "Mental Coach"],
      featured: false,
      episodeNumber: 3,
      story: "Peter combines his psychology background with trading expertise to help traders overcome mental barriers and achieve peak performance.",
      keyLessons: ["Master your emotions", "Develop trading routines", "Embrace losses as learning"]
    },
    {
      name: "Mary Phiri",
      title: "Former Banking Executive",
      location: "Livingstone",
      image: "/placeholder.svg",
      specialty: "Institutional Trading",
      experience: "12+ Years",
      achievements: ["Ex-Bank Manager", "Corporate Trainer", "Risk Specialist"],
      featured: false,
      episodeNumber: 4,
      story: "Mary transitioned from a senior banking position to full-time trading, bringing institutional knowledge to retail traders.",
      keyLessons: ["Understand market structure", "Institutional vs retail mindset", "Long-term wealth building"]
    },
    {
      name: "Daniel Sakala",
      title: "Young Entrepreneur",
      location: "Lusaka",
      image: "/placeholder.svg",
      specialty: "Algorithmic Trading",
      experience: "4+ Years",
      achievements: ["Tech Innovator", "Social Media Influence", "Young Achiever Award"],
      featured: false,
      episodeNumber: 5,
      story: "At just 22, Daniel has revolutionized trading education through technology and social media, inspiring a new generation.",
      keyLessons: ["Leverage technology", "Stay updated", "Share your journey"]
    },
    {
      name: "Ruth Mulenga",
      title: "Community Leader",
      location: "Kabwe",
      image: "/placeholder.svg",
      specialty: "Community Building",
      experience: "5+ Years",
      achievements: ["Women's Trading Network", "1000+ Members", "Mentorship Programs"],
      featured: false,
      episodeNumber: 6,
      story: "Ruth founded Zambia's largest female trading community, creating support systems that help women succeed in trading.",
      keyLessons: ["Power of community", "Support each other", "Break barriers together"]
    }
  ];

  return (
    <section id="guests" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Zambia's Top Traders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from the experiences, strategies, and wisdom of Zambia's most successful traders
          </p>
        </div>

        {/* Featured Trader */}
        {traders.filter(trader => trader.featured).map((trader) => (
          <Card key={trader.name} className="mb-12 border-2 border-gold shadow-glow bg-gradient-to-r from-card to-secondary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-gold">
                    <AvatarImage src={trader.image} alt={trader.name} />
                    <AvatarFallback className="bg-gradient-gold text-gold-foreground text-2xl">
                      {trader.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className="bg-gradient-gold text-gold-foreground mb-2">Featured Guest</Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{trader.name}</h3>
                  <p className="text-muted-foreground mb-2">{trader.title}</p>
                  <p className="text-sm text-gold">{trader.location}</p>
                </div>
                
                <div className="md:col-span-2">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-card rounded-lg border border-border">
                      <Award className="h-6 w-6 text-gold mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">{trader.specialty}</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border border-border">
                      <Calendar className="h-6 w-6 text-gold mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">{trader.experience}</div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{trader.story}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trader.achievements.map((achievement, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Lessons:</h4>
                    <ul className="space-y-2">
                      {trader.keyLessons.map((lesson, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="hero" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Listen to Episode {trader.episodeNumber}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Traders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traders.filter(trader => !trader.featured).map((trader) => (
            <Card key={trader.name} className="border border-border hover:shadow-elegant transition-all duration-300 hover:border-gold/50">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src={trader.image} alt={trader.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {trader.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold text-foreground mb-1">{trader.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{trader.title}</p>
                  <p className="text-xs text-gold">{trader.location}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Specialty:</span>
                    <span className="font-medium text-foreground">{trader.specialty}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium text-foreground">{trader.experience}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Episode:</span>
                    <Badge variant="outline" className="text-xs">#{trader.episodeNumber}</Badge>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{trader.story}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {trader.achievements.slice(0, 2).map((achievement, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                    {trader.achievements.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{trader.achievements.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Listen to Story
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">25+</div>
            <div className="text-muted-foreground">Top Traders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success">50+</div>
            <div className="text-muted-foreground">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold">K10M+</div>
            <div className="text-muted-foreground">Combined Profits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">1000+</div>
            <div className="text-muted-foreground">Lives Impacted</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopTraders;