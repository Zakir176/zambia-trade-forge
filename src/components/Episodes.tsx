import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Calendar, 
  Clock, 
  Headphones,
  ExternalLink,
  TrendingUp
} from "lucide-react";

const Episodes = () => {
  const episodes = [
    {
      id: 1,
      title: "From Zero to Hero: James Mwanza's Trading Journey",
      description: "Learn how James went from losing his savings to becoming one of Zambia's most successful forex traders.",
      guest: "James Mwanza",
      guestTitle: "Professional Forex Trader",
      date: "2024-08-05",
      duration: "45 min",
      listens: "2.5K",
      featured: true,
      topics: ["Risk Management", "Psychology", "Strategy Development"]
    },
    {
      id: 2,
      title: "Building a Trading Empire: Grace Tembo's Success Story",
      description: "Grace shares her journey from part-time trader to running a successful trading consultancy.",
      guest: "Grace Tembo",
      guestTitle: "Trading Consultant & Mentor",
      date: "2024-07-29",
      duration: "38 min",
      listens: "1.8K",
      featured: false,
      topics: ["Business Building", "Mentorship", "Scaling"]
    },
    {
      id: 3,
      title: "The Psychology of Winning: Peter Banda's Mindset",
      description: "Discover the mental strategies that helped Peter overcome trading losses and achieve consistency.",
      guest: "Peter Banda",
      guestTitle: "Trading Psychologist",
      date: "2024-07-22",
      duration: "52 min",
      listens: "3.1K",
      featured: false,
      topics: ["Trading Psychology", "Mindset", "Discipline"]
    },
    {
      id: 4,
      title: "From Corporate to Trading: Mary Phiri's Transition",
      description: "How Mary successfully transitioned from her corporate job to become a full-time trader.",
      guest: "Mary Phiri",
      guestTitle: "Former Banking Executive",
      date: "2024-07-15",
      duration: "41 min",
      listens: "1.9K",
      featured: false,
      topics: ["Career Change", "Financial Planning", "Risk Assessment"]
    },
    {
      id: 5,
      title: "Young and Profitable: Daniel Sakala's Early Success",
      description: "At 22, Daniel is already making waves in the trading world. Learn his secrets to early success.",
      guest: "Daniel Sakala",
      guestTitle: "Young Entrepreneur",
      date: "2024-07-08",
      duration: "35 min",
      listens: "2.2K",
      featured: false,
      topics: ["Youth Trading", "Technology", "Social Media"]
    },
    {
      id: 6,
      title: "Community Building: Ruth Mulenga's Trading Network",
      description: "Ruth discusses how she built Zambia's largest female trading community and supports other women.",
      guest: "Ruth Mulenga",
      guestTitle: "Community Leader",
      date: "2024-07-01",
      duration: "47 min",
      listens: "1.7K",
      featured: false,
      topics: ["Community", "Women in Trading", "Support Networks"]
    }
  ];

  return (
    <section id="episodes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Latest Episodes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive deep into the stories of Zambia's most successful traders and learn from their experiences
          </p>
        </div>

        {/* Featured Episode */}
        {episodes.filter(ep => ep.featured).map((episode) => (
          <Card key={episode.id} className="mb-12 border-2 border-gold shadow-glow bg-gradient-to-r from-card to-secondary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-gradient-gold text-gold-foreground">Featured Episode</Badge>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(episode.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{episode.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Headphones className="h-4 w-4" />
                    <span>{episode.listens} listens</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{episode.title}</h3>
                  <p className="text-muted-foreground mb-4">{episode.description}</p>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-12 w-12 bg-gradient-gold rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-gold-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{episode.guest}</div>
                      <div className="text-sm text-muted-foreground">{episode.guestTitle}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {episode.topics.map((topic, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <Button variant="hero" size="lg" className="w-full">
                    <Play className="h-5 w-5 mr-2" />
                    Play Episode
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Show Notes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Episodes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.filter(ep => !ep.featured).map((episode) => (
            <Card key={episode.id} className="border border-border hover:shadow-elegant transition-all duration-300 hover:border-gold/50">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Episode {episode.id}</Badge>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Headphones className="h-3 w-3" />
                    <span>{episode.listens}</span>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{episode.title}</CardTitle>
                <CardDescription className="text-sm">{episode.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{episode.guest}</div>
                    <div className="text-xs text-muted-foreground">{episode.guestTitle}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(episode.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{episode.duration}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {episode.topics.slice(0, 2).map((topic, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {episode.topics.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{episode.topics.length - 2}
                    </Badge>
                  )}
                </div>
                
                <Button variant="outline" className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Episodes
          </Button>
        </div>

        {/* Podcast Platforms */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Listen on Your Favorite Platform</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Spotify', 'Apple Podcasts', 'Google Podcasts', 'YouTube', 'SoundCloud'].map((platform) => (
              <Button key={platform} variant="outline" className="min-w-[120px]">
                {platform}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episodes;