import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Be a Guest or Get Mentorship
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your trading story with our audience or get mentored by our featured guests
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+260 XXX XXX XXX" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">I'm interested in</Label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                  <option value="">Select an option</option>
                  <option value="guest">Being a podcast guest</option>
                  <option value="mentorship">1-on-1 Mentorship</option>
                  <option value="group-mentorship">Group Mentorship</option>
                  <option value="academy">Podcast Academy</option>
                  <option value="partnership">Partnership/Collaboration</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your trading story, experience, or mentorship goals..." 
                  rows={4}
                />
              </div>
              
              <Button variant="hero" className="w-full" size="lg">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="border border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Get Instant Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">+260 XXX XXX XXX</div>
                      <Button variant="outline" size="sm" className="mt-2">
                        Message Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="border border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gold" />
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-sm text-muted-foreground">+260 XXX XXX XXX</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gold" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">info@toptraderzambia.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gold" />
                    <div>
                      <div className="font-medium text-foreground">Office</div>
                      <div className="text-sm text-muted-foreground">
                        Cairo Road, Lusaka<br />
                        Zambia
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gold" />
                    <div>
                      <div className="font-medium text-foreground">Business Hours</div>
                      <div className="text-sm text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Join our community of successful traders and get daily market insights
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;