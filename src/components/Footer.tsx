import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-gold" />
              <h3 className="text-xl font-bold">
                TopTrader <span className="text-gold">Zambia</span>
              </h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Empowering Zambian traders with professional forex education, 
              signals, and mentorship for consistent profitability.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#services" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                Trading Services
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                About Us
              </a>
              <a href="#testimonials" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                Success Stories
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2 text-sm">
              <div className="text-primary-foreground/80">Trading Signals</div>
              <div className="text-primary-foreground/80">1-on-1 Mentorship</div>
              <div className="text-primary-foreground/80">Trading Academy</div>
              <div className="text-primary-foreground/80">VIP Membership</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">+260 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">info@toptraderzambia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">Cairo Road, Lusaka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 TopTrader Zambia. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Risk Disclaimer
              </a>
            </div>
          </div>
          
          {/* Risk Warning */}
          <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
            <p className="text-xs text-primary-foreground/70 leading-relaxed">
              <strong>Risk Warning:</strong> Trading foreign exchange (forex) carries a high level of risk and may not be suitable for all investors. 
              The high degree of leverage can work against you as well as for you. Before deciding to trade forex, 
              you should carefully consider your investment objectives, level of experience, and risk appetite. 
              Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;