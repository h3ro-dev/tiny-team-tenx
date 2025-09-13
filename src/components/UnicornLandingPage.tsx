import HeroSection from './HeroSection';
import AgitationSection from './AgitationSection';
import CrisisSection from './CrisisSection';
import SolutionSection from './SolutionSection';
import SocialProofSection from './SocialProofSection';
import TeamShowcaseSection from './TeamShowcaseSection';
import ConversionForm from './ConversionForm';
import Footer from './Footer';

const UnicornLandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AgitationSection />
      <CrisisSection />
      <SolutionSection />
      <SocialProofSection />
      <TeamShowcaseSection />
      <ConversionForm />
      <Footer />
    </div>
  );
};

export default UnicornLandingPage;