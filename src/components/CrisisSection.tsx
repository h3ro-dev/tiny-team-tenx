import { Brain, Zap, Target, Globe, Handshake } from "lucide-react";

const CrisisSection = () => {
  const crisisPoints = [
    {
      icon: Brain,
      title: "Every team member needs to perform at the level of 10+ specialists",
      description: "Maintaining the quality and depth that only focused expertise can provide while covering multiple domains"
    },
    {
      icon: Zap,
      title: "Product development, customer acquisition, market expansion, and fundraising all need to happen simultaneously",
      description: "With only three brains and six hands managing parallel critical initiatives"
    },
    {
      icon: Globe,
      title: "International expansion and market penetration strategies that require local presence",
      description: "Need to be executed remotely with minimal resources while competing with local teams"
    },
    {
      icon: Target,
      title: "Customer support, sales processes, and relationship management",
      description: "Typically requiring dedicated teams need to be handled while building the core product"
    },
    {
      icon: Handshake,
      title: "Investor meetings, partnership negotiations, and strategic decisions",
      description: "Compete for the same limited bandwidth needed for execution and growth"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Impossible Math of{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Tiny Team Competition
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            The unique burden of competing at scale with minimal team size
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {crisisPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {point.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-16">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* The Reality Check */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Team Efficiency Reality Check
          </h3>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            Look at your last quarter's goals vs. achievements. How many strategic initiatives got delayed because you ran out of people? 
            <span className="font-bold text-red-600"> That backlog is your competitive disadvantage compounding daily.</span>
          </p>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">67%</div>
              <div className="text-sm text-gray-600">Strategic initiatives delayed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">90hrs</div>
              <div className="text-sm text-gray-600">Average founder work week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">$2M</div>
              <div className="text-sm text-gray-600">Lost opportunities per quarter</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrisisSection;