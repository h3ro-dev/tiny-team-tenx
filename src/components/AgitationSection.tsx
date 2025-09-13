import { AlertTriangle, Users, TrendingUp, Building, Clock } from "lucide-react";

const AgitationSection = () => {
  const painPoints = [
    {
      icon: Users,
      title: "Your competitor just hired 50 engineers while you're trying to build the same product with your technical co-founder working 90-hour weeks",
      impact: "Development Speed: 50:1 disadvantage"
    },
    {
      icon: Building,
      title: "They have dedicated teams for marketing, sales, customer success, and operations. You're all three wearing every hat simultaneously",
      impact: "Specialization Gap: Impossible to match"
    },
    {
      icon: TrendingUp,
      title: "Investors compare your traction to companies with 10x your team size and 100x your budget, expecting identical growth metrics",
      impact: "Funding Challenge: Unrealistic expectations"
    },
    {
      icon: AlertTriangle,
      title: "Enterprise customers want to see organizational depth and redundancy, but you're three people trying to demonstrate institutional capability",
      impact: "Sales Barrier: Trust deficit"
    },
    {
      icon: Clock,
      title: "Market opportunities require simultaneous execution across multiple fronts, but you can only focus on one area at a time",
      impact: "Opportunity Cost: Compounding daily"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Unicorn of Three{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              David vs. Goliath Challenge
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Teams of 3 people are expected to compete with teams of 300. The efficiency requirement isn't 10x or 50x - 
            it's <span className="font-bold text-primary">100x just to stay competitive</span> in today's market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-800 mb-3 leading-relaxed">
                    {point.title}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    {point.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The Reality Check
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            You chose a small team for agility, creativity, and equity sharing. You didn't choose it to be 
            systematically disadvantaged by resource-heavy competitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-gray-600">Your Team Size</div>
            </div>
            <div className="text-2xl text-gray-400">vs</div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <div className="text-2xl font-bold text-red-500">300</div>
              <div className="text-sm text-gray-600">Competitor Team Size</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;