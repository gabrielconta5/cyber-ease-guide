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
    <Card className="p-6 hover:shadow-hover transition-all duration-300 animate-fade-in border-border bg-card">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-lg bg-gradient-primary">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="ml-16">
        <h4 className="font-medium text-foreground mb-3">Como se proteger:</h4>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-foreground">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
