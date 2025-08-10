import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Mwanza",
      role: "Full-time Trader",
      location: "Lusaka",
      image: "/placeholder.svg",
      rating: 5,
      text: "TopTrader Zambia changed my life completely. I went from losing money to making consistent profits. The signals are incredibly accurate and the mentorship is world-class.",
      profit: "+K89,500 in 6 months"
    },
    {
      name: "Grace Tembo",
      role: "Part-time Trader",
      location: "Kitwe",
      image: "/placeholder.svg",
      rating: 5,
      text: "As a beginner, I was skeptical about forex trading. But the academy taught me everything I needed to know. Now I make more from trading than my day job!",
      profit: "+K45,200 in 4 months"
    },
    {
      name: "Peter Banda",
      role: "Business Owner",
      location: "Ndola",
      image: "/placeholder.svg",
      rating: 5,
      text: "The VIP membership is worth every kwacha. Having direct access to expert traders and premium signals has multiplied my investment portfolio significantly.",
      profit: "+K156,800 in 8 months"
    },
    {
      name: "Mary Phiri",
      role: "Teacher",
      location: "Livingstone",
      image: "/placeholder.svg",
      rating: 5,
      text: "I started with just K2,000 and followed their risk management strategies. Now I have a steady secondary income that supports my family.",
      profit: "+K32,100 in 5 months"
    },
    {
      name: "Daniel Sakala",
      role: "University Student",
      location: "Lusaka",
      image: "/placeholder.svg",
      rating: 5,
      text: "The 1-on-1 mentorship is amazing. My mentor helped me develop a personalized strategy that fits my schedule and risk tolerance. Highly recommended!",
      profit: "+K18,900 in 3 months"
    },
    {
      name: "Ruth Mulenga",
      role: "Nurse",
      location: "Kabwe",
      image: "/placeholder.svg",
      rating: 5,
      text: "The community support is incredible. Everyone helps each other succeed. The signals are so reliable that I now trade with confidence during my breaks at work.",
      profit: "+K67,300 in 7 months"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Success Stories from Zambian Traders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our members are achieving financial freedom through forex trading
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border hover:shadow-elegant transition-all duration-300 hover:border-gold/50">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-gold mb-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Profit Badge */}
                <div className="bg-gradient-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {testimonial.profit}
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-gold">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success">85%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold">K2.5M+</div>
            <div className="text-muted-foreground">Total Profits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;