import { 
  Rocket, 
  Brain, 
  Search, 
  Users, 
  TrendingUp, 
  Slack, 
  Github,
  Calendar,
  BarChart3,
  Zap
} from "lucide-react";

const TeamShowcaseSection = () => {
  const multiplications = [
    {
      icon: Rocket,
      title: "Execution Multiplication",
      description: "Parallel project management, simultaneous initiative execution, resource optimization across team members"
    },
    {
      icon: Brain,
      title: "Expertise Amplification", 
      description: "AI specialists in every domain your team needs, from technical to business to regulatory expertise"
    },
    {
      icon: Search,
      title: "Competitive Intelligence",
      description: "Market analysis, competitor monitoring, strategic positioning that typically requires dedicated research teams"
    },
    {
      icon: Users,
      title: "Operational Scaling",
      description: "Customer success, sales operations, marketing automation that usually demands specialized departments"
    },
    {
      icon: TrendingUp,
      title: "Strategic Support",
      description: "Board preparation, investor relations, partnership negotiations that typically require dedicated business development teams"
    }
  ];

  const integrations = [
    { name: "Slack", icon: Slack, category: "Team Collaboration" },
    { name: "GitHub", icon: Github, category: "Development Acceleration" },
    { name: "Calendar", icon: Calendar, category: "Communication Efficiency" },
    { name: "Analytics", icon: BarChart3, category: "Analytics Intelligence" },
    { name: "Automation", icon: Zap, category: "Growth Multiplication" }
  ];

  const efficiencyFeatures = [
    "Communication efficiency and decision-making acceleration for small team coordination",
    "Knowledge sharing and skill development that maximizes each team member's contribution potential", 
    "Competitive positioning and market differentiation that leverages team agility advantages",
    "Resource allocation optimization that maximizes ROI on limited team capacity"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your AI Team{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Multiplication System
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive team amplification with massive efficiency gains
          </p>
        </div>

        {/* Core Multiplications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {multiplications.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border-t-4 border-primary"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Efficiency Optimization */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Team Efficiency & Competitive Advantage Optimization
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {efficiencyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Ecosystem */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Team Advantage Ecosystem
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Small team and efficiency-focused platform integrations
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <integration.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{integration.name}</h4>
              <p className="text-sm text-gray-600">{integration.category}</p>
            </div>
          ))}
        </div>

        {/* Additional Integrations */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            Plus 50+ More Integrations
          </h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="bg-white px-3 py-1 rounded-full">Microsoft Teams</span>
            <span className="bg-white px-3 py-1 rounded-full">Discord</span>
            <span className="bg-white px-3 py-1 rounded-full">Notion</span>
            <span className="bg-white px-3 py-1 rounded-full">Linear</span>
            <span className="bg-white px-3 py-1 rounded-full">Monday.com</span>
            <span className="bg-white px-3 py-1 rounded-full">Asana</span>
            <span className="bg-white px-3 py-1 rounded-full">ClickUp</span>
            <span className="bg-white px-3 py-1 rounded-full">Basecamp</span>
            <span className="bg-white px-3 py-1 rounded-full">Airtable</span>
            <span className="bg-white px-3 py-1 rounded-full">Zoom</span>
            <span className="bg-white px-3 py-1 rounded-full">Calendly</span>
            <span className="bg-white px-3 py-1 rounded-full">Loom</span>
            <span className="bg-white px-3 py-1 rounded-full">GitLab</span>
            <span className="bg-white px-3 py-1 rounded-full">Vercel</span>
            <span className="bg-white px-3 py-1 rounded-full">Railway</span>
            <span className="bg-white px-3 py-1 rounded-full">Supabase</span>
            <span className="bg-white px-3 py-1 rounded-full">HubSpot</span>
            <span className="bg-white px-3 py-1 rounded-full">Mailchimp</span>
            <span className="bg-white px-3 py-1 rounded-full">Buffer</span>
            <span className="bg-white px-3 py-1 rounded-full">Canva</span>
            <span className="bg-white px-3 py-1 rounded-full">Zapier</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamShowcaseSection;