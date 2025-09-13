import { Button } from "@/components/ui/button";
import { Users, BookOpen, BarChart3, Lightbulb, TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Unicorn of Three</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering tiny founding teams to compete at unicorn scale through AI-powered team multiplication.
            </p>
            <div className="text-sm text-gray-500">
              Powered by <span className="text-primary font-semibold">Utlyze</span>
            </div>
          </div>

          {/* Team Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-primary" />
              Team Resources
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Small Team Optimization Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Co-founder Relationship Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Efficiency Multiplication Frameworks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">David vs. Goliath Strategies</a></li>
            </ul>
          </div>

          {/* Founding Community */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-secondary" />
              Founding Community
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Join 200+ Founding Teams</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Weekly Team Strategies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Efficiency Hacks & Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Small Team Masterclasses</a></li>
            </ul>
          </div>

          {/* Impact Tracking */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-team-pink" />
              Impact Tracking
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Productivity Metrics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Competitive Advantage Measurement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team Efficiency Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Growth Impact Assessment</a></li>
            </ul>
          </div>
        </div>

        {/* Team Education Section */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 mr-2 text-yellow-400" />
              Team Education & Development
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Masterclasses in AI-enhanced team multiplication and founding team optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h5 className="font-semibold mb-2">Co-founder Alignment</h5>
              <p className="text-sm text-gray-400">Role optimization for maximum efficiency</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h5 className="font-semibold mb-2">Decision Acceleration</h5>
              <p className="text-sm text-gray-400">Strategic planning for rapid execution</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-team-pink/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-team-pink" />
              </div>
              <h5 className="font-semibold mb-2">Team Scaling</h5>
              <p className="text-sm text-gray-400">Preserve culture and efficiency advantages</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
              </div>
              <h5 className="font-semibold mb-2">Exit Planning</h5>
              <p className="text-sm text-gray-400">Value creation for founding team equity</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to 10x Your Team's Impact?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join 200+ founding teams punching above their weight with AI-powered team multiplication
            </p>
            <Button 
              variant="team"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-bold"
            >
              Start Your Team Transformation
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-gray-400">Teams Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">100x</div>
            <div className="text-gray-400">Efficiency Multiplier</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-team-pink mb-2">$500M+</div>
            <div className="text-gray-400">Value Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">97%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Unicorn of Three. All rights reserved. | 
            <span className="text-primary"> unicornofthree.ai</span> | 
            Empowering tiny teams to achieve massive impact.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Your team's success and competitive advantage are our primary objectives.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;