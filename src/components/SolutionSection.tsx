import { Button } from "@/components/ui/button";
import { Rocket, Shield, Zap, Target, Building2 } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Rocket,
      title: "Team Multiplication AI",
      description: "Give your 3-person team the execution capacity of a 30-person company through intelligent automation and workflow amplification"
    },
    {
      icon: Shield,
      title: "Competitive Parity AI",
      description: "Match the operational sophistication of larger competitors without matching their team size or operational complexity"
    },
    {
      icon: Zap,
      title: "Efficiency Acceleration AI",
      description: "10x your team's output through smart automation, decision support, and process optimization that preserves your agility advantage"
    },
    {
      icon: Target,
      title: "Strategic Execution AI",
      description: "Handle multiple strategic initiatives simultaneously while your team focuses on the highest-impact activities that only humans can do"
    },
    {
      icon: Building2,
      title: "Scale Simulation AI",
      description: "Present institutional-grade capabilities to enterprise customers and investors while maintaining your lean, efficient team structure"
    }
  ];

  const scrollToForm = () => {
    const form = document.getElementById('conversion-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three People,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Thirty People's Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Team AI multiplication with massive efficiency focus
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transformation Promise */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Stop being disadvantaged by team size.
          </h3>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Start being advantaged by team efficiency with AI that makes three people perform like thirty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="team" 
              size="lg"
              onClick={scrollToForm}
              className="text-lg px-8 py-4 h-auto bg-white text-primary hover:bg-gray-100"
            >
              10x Our Team Impact
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10"
            >
              See How It Works
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10x</div>
              <div className="text-white/80">Team Efficiency Multiplier</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-white/80">Person Team Capacity</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80">Agility Preserved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;