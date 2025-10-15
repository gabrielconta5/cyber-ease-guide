import { Shield, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { RiskCard } from "@/components/RiskCard";
import { PasswordStrengthChecker } from "@/components/PasswordStrengthChecker";
import { PasswordGenerator } from "@/components/PasswordGenerator";
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
      <header className="bg-gradient-primary text-primary-foreground py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xMDUuODk1LTIgMi0yczIgLjg5NSAyIDItLjg5NSAyLTIgMi0yLS44OTUtMi0yem0wIDI4YzAtMS4xMDUuODk1LTIgMi0yczIgLjg5NSAyIDItLjg5NSAyLTIgMi0yLS44OTUtMi0yek0xNiA0NGMwLTEuMTA1Ljg5NS0yIDItMnMyIC44OTUgMiAyLS44OTUgMi0yIDItMi0uODk1LTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block p-5 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm animate-fade-in">
            <Shield className="w-20 h-20" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Como se proteger na internet
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Guia completo e interativo de cibersegurança
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 py-12 -mt-8 relative z-20">
        <Card className="p-8 bg-card shadow-hover border-border animate-fade-in">
          <p className="text-lg text-center text-foreground leading-relaxed">
            Proteger suas informações é mais fácil do que parece! Com pequenas ações diárias, 
            você pode evitar grandes problemas. Este guia foi criado para ajudar você a navegar 
            com segurança, mesmo sem ter conhecimentos técnicos avançados.
          </p>
        </Card>
      </section>

      {/* Interactive Password Tools */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Ferramentas de Senha
          </h2>
          <p className="text-muted-foreground">
            Teste e crie senhas fortes com nossas ferramentas interativas
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <PasswordStrengthChecker />
          <PasswordGenerator />
        </div>
      </section>

      {/* Main Risks */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
          Os 3 principais riscos online
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Conheça as ameaças mais comuns e aprenda a se proteger de cada uma delas
        </p>
        <div className="grid md:grid-cols-3 gap-6">
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
        <Card className="p-8 bg-gradient-primary text-primary-foreground shadow-hover border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold">Boas Práticas Gerais</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-3">
            {bestPractices.map((practice, index) => (
              <li key={index} className="flex items-start gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <span className="text-primary-foreground mt-1 text-xl">•</span>
                <span className="text-primary-foreground/95">{practice}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Password Reminder */}
      <section className="max-w-6xl mx-auto px-4 py-8 pb-16">
        <Card className="p-6 bg-secondary/50 border-primary/20 shadow-card backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2 text-xl">Lembrete Importante</h3>
              <p className="text-foreground leading-relaxed">
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
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-foreground font-medium text-lg">
            Sua segurança online começa com pequenas ações. Proteja-se hoje! 🛡️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
