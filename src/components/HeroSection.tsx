import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-team.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById('conversion-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animate-gradient-shift">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Team collaboration patterns overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-white animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 rounded-full border-2 border-white animate-pulse delay-300"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 rounded-full border-2 border-white animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full border-2 border-white animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Three People.{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Unicorn Ambitions.
              </span>{" "}
              Your 300-Person Competitors Are Laughing.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              You're trying to build unicorn-scale impact with a team of three. They have armies of specialists. 
              You need to be <span className="font-bold text-yellow-300">100x more efficient</span> to compete.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
              <p className="text-white/80 italic text-lg">
                "When did building a breakthrough company become needing an army instead of just needing to be exceptionally smart and efficient?"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToForm}
                className="text-lg px-8 py-4 h-auto"
              >
                10x Our Team Impact
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Learn How It Works
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Three founders collaborating intensely while massive competitor teams work in the background"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-xl">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-xl">
              <div className="text-2xl font-bold text-secondary">100x</div>
              <div className="text-sm text-gray-600">Efficiency Needed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;