import { Star, Users, TrendingUp, Award } from "lucide-react";

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen & Co-founders",
      company: "Enterprise SaaS",
      teamSize: "3 people",
      result: "67% market share",
      quote: "Our 3-person team outperformed 15-person competitor and captured 67% market share using AI team multiplication",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Marcus Kim & Technical Partner", 
      company: "AI Platform",
      teamSize: "2 technical co-founders",
      result: "$25M Series A",
      quote: "Raised $25M Series A with 2 technical co-founders by demonstrating unicorn-scale execution capacity through AI amplification",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Jennifer Martinez & Founding Team",
      company: "B2B Platform", 
      teamSize: "3 founders",
      result: "Fortune 100 contract",
      quote: "Beat 200-person incumbent to win Fortune 100 contract through AI-enhanced team performance and operational sophistication",
      image: "/api/placeholder/64/64"
    }
  ];

  const caseStudies = [
    {
      icon: TrendingUp,
      title: "FinTech Founding Team",
      teamSize: "3 people",
      result: "$10M ARR",
      description: "Generated $10M ARR by executing like 50-person fintech company through AI operational multiplication"
    },
    {
      icon: Award,
      title: "HealthTech Trio",
      teamSize: "3 founders",
      result: "FDA approval + enterprise partnerships",
      description: "Achieved FDA approval and enterprise partnerships typically requiring 100+ person teams through AI-enhanced regulatory and business development"
    },
    {
      icon: Users,
      title: "Climate Tech Team",
      teamSize: "3 founders",
      result: "15 countries, $50M valuation",
      description: "Scaled to 15 countries and $50M valuation with 3 founders through AI-powered international expansion and market penetration"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tiny Teams Building{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Massive Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Team success stories with small founding team photos and disproportionate impact metrics
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1][0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.teamSize}</div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="bg-primary/10 rounded-lg p-3 text-center">
                <div className="font-bold text-primary text-lg">{testimonial.result}</div>
                <div className="text-sm text-gray-600">Key Achievement</div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Team Transformation Case Studies
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <study.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="font-bold text-gray-900 mb-2">{study.title}</h4>
                <div className="text-sm text-primary font-medium mb-2">{study.teamSize}</div>
                <div className="text-lg font-bold text-secondary mb-3">{study.result}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600">Founding teams served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100x</div>
              <div className="text-gray-600">Average efficiency gain</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-team-pink mb-2">$500M+</div>
              <div className="text-gray-600">Total value created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">97%</div>
              <div className="text-gray-600">Team satisfaction rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;