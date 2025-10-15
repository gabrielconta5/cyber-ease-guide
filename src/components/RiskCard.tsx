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
    <Card className="p-6 hover:shadow-hover hover:-translate-y-1 transition-all duration-300 animate-fade-in border-border bg-card h-full flex flex-col">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="p-4 rounded-xl bg-gradient-primary mb-4 shadow-card">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto">
        <div className="bg-secondary/50 rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-3 text-sm">Como se proteger:</h4>
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-0.5 font-bold">✓</span>
                <span className="text-foreground text-sm leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};
