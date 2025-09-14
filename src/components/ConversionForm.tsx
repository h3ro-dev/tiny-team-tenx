import { useState } from "react";
import { submitLead } from "@/lib/lead";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Zap, Shield, Clock } from "lucide-react";

const ConversionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    teamRoles: [] as string[],
    industry: "",
    competitionChallenge: "",
    efficiencyGoals: "",
    biggestChallenges: [] as string[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLead(formData as any);
    
    // Here you would normally integrate with Supabase
    console.log("Form data:", formData);
    
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24 hours to schedule your team multiplication consultation.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      teamSize: "",
      teamRoles: [],
      industry: "",
      competitionChallenge: "",
      efficiencyGoals: "",
      biggestChallenges: []
    });
  };

  const handleRoleChange = (role: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        teamRoles: [...prev.teamRoles, role]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        teamRoles: prev.teamRoles.filter(r => r !== role)
      }));
    }
  };

  const handleChallengeChange = (challenge: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        biggestChallenges: [...prev.biggestChallenges, challenge]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        biggestChallenges: prev.biggestChallenges.filter(c => c !== challenge)
      }));
    }
  };

  return (
    <section id="conversion-form" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Multiply Your Team's{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Impact 10x
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Team multiplication consultation with someone who understands the challenge of competing at scale with a tiny team
            </p>

            {/* Urgency Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-red-50 text-red-700 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 mr-2" />
                Only 4 team multiplication consultations available this week
              </div>
              <div className="flex items-center bg-orange-50 text-orange-700 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 mr-2" />
                Market timing advantages for small teams are temporary
              </div>
            </div>
          </div>

          {/* Risk Reversal */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8 border border-green-200">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Risk-Free Guarantee</h3>
            </div>
            <p className="text-center text-gray-700">
              Complimentary team multiplication consultation with 10x efficiency guarantee. 
              If we can't show how your 3-person team can outperform 30-person competitors, the consultation is completely free.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Team Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="teamSize">Team Size</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, teamSize: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 people</SelectItem>
                    <SelectItem value="3">3 people</SelectItem>
                    <SelectItem value="4">4 people</SelectItem>
                    <SelectItem value="5">5 people</SelectItem>
                    <SelectItem value="more">Considering adding more</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Team Roles */}
            <div className="mt-6">
              <Label>Team Roles (check all that apply)</Label>
              <div className="grid md:grid-cols-3 gap-4 mt-2">
                {[
                  "Technical/Engineering",
                  "Business/Sales", 
                  "Marketing/Growth",
                  "Design/Product",
                  "Operations",
                  "Other"
                ].map((role) => (
                  <div key={role} className="flex items-center space-x-2">
                    <Checkbox
                      id={role}
                      checked={formData.teamRoles.includes(role)}
                      onCheckedChange={(checked) => handleRoleChange(role, checked as boolean)}
                    />
                    <Label htmlFor={role} className="text-sm">{role}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry and Competition */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <Label htmlFor="industry">Industry/Market</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saas">SaaS/Software</SelectItem>
                    <SelectItem value="ecommerce">E-commerce/Marketplace</SelectItem>
                    <SelectItem value="fintech">FinTech</SelectItem>
                    <SelectItem value="healthtech">HealthTech</SelectItem>
                    <SelectItem value="ai">AI/ML</SelectItem>
                    <SelectItem value="climate">Climate Tech</SelectItem>
                    <SelectItem value="edtech">EdTech</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="competition">Competition Challenge</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, competitionChallenge: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select challenge" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10-50">Competing against 10-50 person teams</SelectItem>
                    <SelectItem value="100+">Competing against 100+ person companies</SelectItem>
                    <SelectItem value="unicorns">Competing against well-funded unicorns</SelectItem>
                    <SelectItem value="enterprise">Enterprise clients expect larger teams</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Efficiency Goals */}
            <div className="mt-6">
              <Label htmlFor="goals">Team Efficiency Goals</Label>
              <Textarea
                id="goals"
                placeholder="What would 10x team efficiency look like for your founding team and company growth?"
                value={formData.efficiencyGoals}
                onChange={(e) => setFormData(prev => ({ ...prev, efficiencyGoals: e.target.value }))}
                className="mt-1 min-h-[100px]"
              />
            </div>

            {/* Biggest Challenges */}
            <div className="mt-6">
              <Label>Biggest Team Challenges (check all that apply)</Label>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                {[
                  "Too many priorities for team size",
                  "Competing against larger teams",
                  "Scaling without losing agility", 
                  "Investor/customer perception of team size",
                  "Work-life balance with small team"
                ].map((challenge) => (
                  <div key={challenge} className="flex items-center space-x-2">
                    <Checkbox
                      id={challenge}
                      checked={formData.biggestChallenges.includes(challenge)}
                      onCheckedChange={(checked) => handleChallengeChange(challenge, checked as boolean)}
                    />
                    <Label htmlFor={challenge} className="text-sm">{challenge}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                type="submit" 
                variant="team"
                size="lg"
                className="text-lg px-12 py-4 h-auto font-bold"
              >
                10x Our Team Impact
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                Your team dynamics, company strategy, and competitive information remain completely confidential among founding team members
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConversionForm;