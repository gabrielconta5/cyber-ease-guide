import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const calculateStrength = (pass: string): { score: number; label: string; color: string } => {
    let score = 0;
    
    if (pass.length >= 8) score += 25;
    if (pass.length >= 12) score += 10;
    if (/[a-z]/.test(pass)) score += 15;
    if (/[A-Z]/.test(pass)) score += 15;
    if (/[0-9]/.test(pass)) score += 15;
    if (/[^a-zA-Z0-9]/.test(pass)) score += 20;

    if (score < 40) return { score, label: "Muito Fraca", color: "bg-destructive" };
    if (score < 60) return { score, label: "Fraca", color: "bg-orange-500" };
    if (score < 80) return { score, label: "Média", color: "bg-yellow-500" };
    if (score < 95) return { score, label: "Forte", color: "bg-green-500" };
    return { score: 100, label: "Muito Forte", color: "bg-primary" };
  };

  const strength = password ? calculateStrength(password) : { score: 0, label: "", color: "" };

  const requirements = [
    { met: password.length >= 8, text: "Mínimo 8 caracteres" },
    { met: /[a-z]/.test(password), text: "Letra minúscula" },
    { met: /[A-Z]/.test(password), text: "Letra maiúscula" },
    { met: /[0-9]/.test(password), text: "Número" },
    { met: /[^a-zA-Z0-9]/.test(password), text: "Caractere especial (!@#$%)" },
  ];

  return (
    <Card className="p-6 bg-card shadow-card border-border">
      <h3 className="text-xl font-semibold text-foreground mb-4">
        Teste a Força da Sua Senha
      </h3>
      <div className="space-y-4">
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Digite uma senha para testar..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pr-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>

        {password && (
          <div className="space-y-2 animate-fade-in">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Força da senha:</span>
              <span className={`text-sm font-semibold ${
                strength.score < 40 ? 'text-destructive' :
                strength.score < 60 ? 'text-orange-500' :
                strength.score < 80 ? 'text-yellow-500' :
                strength.score < 95 ? 'text-green-500' :
                'text-primary'
              }`}>
                {strength.label}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${strength.color}`}
                style={{ width: `${strength.score}%` }}
              />
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-foreground">Requisitos:</p>
              <ul className="space-y-1">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <span className={req.met ? "text-primary" : "text-muted-foreground"}>
                      {req.met ? "✓" : "○"}
                    </span>
                    <span className={req.met ? "text-foreground" : "text-muted-foreground"}>
                      {req.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
