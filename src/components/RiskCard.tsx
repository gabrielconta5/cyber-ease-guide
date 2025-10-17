import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface RiskCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tips: string[];
}

export const RiskCard = ({ icon: Icon, title, description, tips }: RiskCardProps) => {
  return (
    <Card className="group p-6 hover:shadow-glow hover:-translate-y-2 transition-all duration-500 animate-fade-in border-border/50 bg-card/80 backdrop-blur-xl flex flex-col relative overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      
      <div className="flex flex-col items-center text-center mb-6 relative z-10">
        <div className="p-4 rounded-2xl bg-gradient-primary mb-4 shadow-glow group-hover:animate-glow-pulse transition-all duration-300">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed min-h-[3rem]">{description}</p>
      </div>
      <div className="mt-auto relative z-10">
        <div className="bg-muted/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
          <h4 className="font-semibold text-foreground mb-3 text-sm">Como se proteger:</h4>
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-0.5 font-bold">✓</span>
                <span className="text-foreground/90 text-sm leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};
