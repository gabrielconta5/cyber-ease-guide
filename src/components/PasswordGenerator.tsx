import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCw, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    
    const allChars = uppercase + lowercase + numbers + symbols;
    let newPassword = "";
    
    // Garantir pelo menos um de cada tipo
    newPassword += uppercase[Math.floor(Math.random() * uppercase.length)];
    newPassword += lowercase[Math.floor(Math.random() * lowercase.length)];
    newPassword += numbers[Math.floor(Math.random() * numbers.length)];
    newPassword += symbols[Math.floor(Math.random() * symbols.length)];
    
    // Completar com caracteres aleatórios
    for (let i = 4; i < 16; i++) {
      newPassword += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Embaralhar
    newPassword = newPassword.split('').sort(() => Math.random() - 0.5).join('');
    
    setPassword(newPassword);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (password) {
      try {
        await navigator.clipboard.writeText(password);
        setCopied(true);
        toast.success("Senha copiada para a área de transferência!");
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        toast.error("Erro ao copiar senha");
      }
    }
  };

  return (
    <Card className="p-6 bg-card shadow-card border-border">
      <h3 className="text-xl font-semibold text-foreground mb-4">
        Gerador de Senhas Fortes
      </h3>
      <div className="space-y-4">
        <div className="flex gap-2">
          <Input
            type="text"
            value={password}
            readOnly
            placeholder="Clique em 'Gerar' para criar uma senha"
            className="font-mono"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={copyToClipboard}
            disabled={!password}
            className="shrink-0"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        <Button
          onClick={generatePassword}
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Gerar Senha Aleatória
        </Button>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="text-sm text-foreground mb-2">
            <strong>Dica:</strong> Esta ferramenta gera senhas com 16 caracteres contendo:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Letras maiúsculas e minúsculas</li>
            <li>• Números</li>
            <li>• Caracteres especiais</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3">
            Use um gerenciador de senhas para guardar suas senhas com segurança!
          </p>
        </div>
      </div>
    </Card>
  );
};
