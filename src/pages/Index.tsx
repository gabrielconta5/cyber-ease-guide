import { Shield, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { RiskCard } from "@/components/RiskCard";
import { Card } from "@/components/ui/card";

const Index = () => {
  const risks = [
    {
      icon: Lock,
      title: "Roubo de Dados Pessoais",
      description: "Seus dados pessoais, como senhas e informações bancárias, podem ser roubados por criminosos.",
      tips: [
        "Use senhas fortes e diferentes para cada conta (misture letras, números e símbolos)",
        "Nunca compartilhe senhas por e-mail, WhatsApp ou redes sociais",
        "Ative a autenticação em duas etapas sempre que possível (receber código por SMS)"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Malware e Vírus",
      description: "Programas maliciosos podem infectar seus dispositivos e roubar informações ou danificar o sistema.",
      tips: [
        "Instale apenas aplicativos de lojas oficiais (Google Play, App Store)",
        "Mantenha seu antivírus sempre atualizado",
        "Não clique em links ou baixe arquivos de e-mails ou mensagens suspeitas"
      ]
    },
    {
      icon: Shield,
      title: "Golpes Virtuais (Phishing)",
      description: "Criminosos fingem ser empresas ou pessoas confiáveis para enganar você e roubar seus dados.",
      tips: [
        "Desconfie de mensagens urgentes pedindo dados pessoais ou dinheiro",
        "Verifique sempre o endereço do site antes de inserir informações (procure o cadeado na barra)",
        "Empresas sérias nunca pedem senha ou dados bancários por e-mail ou mensagem"
      ]
    }
  ];

  const bestPractices = [
    "Mantenha seu sistema operacional e aplicativos sempre atualizados",
    "Faça backup regular dos seus arquivos importantes",
    "Use redes Wi-Fi seguras - evite fazer transações bancárias em Wi-Fi público",
    "Revise as permissões dos aplicativos instalados no seu celular",
    "Desconfie de promoções boas demais para ser verdade"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <header className="bg-gradient-primary text-primary-foreground py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
            <Shield className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Como se proteger na internet
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Guia rápido de cibersegurança
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <Card className="p-8 bg-card shadow-card border-border">
          <p className="text-lg text-center text-foreground leading-relaxed">
            Proteger suas informações é mais fácil do que parece! Com pequenas ações diárias, 
            você pode evitar grandes problemas. Este guia foi criado para ajudar você a navegar 
            com segurança, mesmo sem ter conhecimentos técnicos avançados.
          </p>
        </Card>
      </section>

      {/* Main Risks */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Os 3 principais riscos online
        </h2>
        <div className="grid md:grid-cols-1 gap-6">
          {risks.map((risk, index) => (
            <RiskCard
              key={index}
              icon={risk.icon}
              title={risk.title}
              description={risk.description}
              tips={risk.tips}
            />
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <Card className="p-8 bg-gradient-primary text-primary-foreground shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Boas Práticas Gerais</h2>
          </div>
          <ul className="space-y-3">
            {bestPractices.map((practice, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-foreground/90 mt-1">•</span>
                <span className="text-primary-foreground/95">{practice}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Password Reminder */}
      <section className="max-w-6xl mx-auto px-4 py-8 pb-16">
        <Card className="p-6 bg-secondary border-primary/20 shadow-card">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Lembrete Importante</h3>
              <p className="text-foreground">
                Troque suas senhas regularmente (a cada 3-6 meses) e nunca use a mesma senha 
                em sites diferentes. Se possível, use um gerenciador de senhas confiável para 
                ajudar a criar e guardar senhas fortes.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-muted-foreground">
          <p>Sua segurança online começa com pequenas ações. Proteja-se hoje! 🛡️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
