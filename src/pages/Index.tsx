import { Shield, Lock, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import { RiskCard } from "@/components/RiskCard";
import { PasswordStrengthChecker } from "@/components/PasswordStrengthChecker";
import { PasswordGenerator } from "@/components/PasswordGenerator";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SecurityQuiz } from "@/components/SecurityQuiz";
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
    "Desconfie de promoções boas demais para ser verdade",
    "Não compartilhe informações pessoais em redes sociais públicas"
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <header className="relative py-24 px-4 pb-32">
        {/* Gradient background with animation */}
        <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl animate-gradient-shift bg-[length:200%_200%]"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block p-6 bg-gradient-primary rounded-3xl mb-6 shadow-glow animate-float">
            <Shield className="w-24 h-24 text-primary-foreground" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-[1.2] pb-4">
            Como se proteger na internet
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 max-w-3xl mx-auto animate-fade-in flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            Guia completo e interativo de cibersegurança
            <Sparkles className="w-6 h-6 text-accent" />
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 py-12 relative z-20">
        <Card className="p-8 bg-card/80 backdrop-blur-xl shadow-glow border-border/50 animate-fade-in relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <p className="text-lg text-center text-foreground leading-relaxed relative z-10">
            Proteger suas informações é mais fácil do que parece! Com pequenas ações diárias, 
            você pode evitar grandes problemas. Este guia foi criado para ajudar você a navegar 
            com segurança, mesmo sem ter conhecimentos técnicos avançados.
          </p>
        </Card>
      </section>

      {/* Main Risks */}
      <section className="max-w-6xl mx-auto px-4 py-12 relative">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
          Os 3 principais riscos online
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
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

      {/* Best Practices */}
      <section className="max-w-6xl mx-auto px-4 py-12 relative">
        <Card className="p-10 bg-gradient-accent text-primary-foreground shadow-glow border-0 relative overflow-hidden animate-gradient-shift bg-[length:200%_200%]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(310_85%_65%_/_0.3),_transparent_50%)]"></div>
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold">Boas Práticas Gerais</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 relative z-10">
            {bestPractices.map((practice, index) => (
              <li key={index} className="flex items-start gap-3 bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <span className="text-primary-foreground mt-1 text-xl">•</span>
                <span className="text-primary-foreground/95 leading-relaxed">{practice}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Security Quiz */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Teste Seus Conhecimentos
          </h2>
          <p className="text-muted-foreground text-lg">
            Responda 3 perguntas simples e veja quanto você aprendeu sobre segurança online
          </p>
        </div>
        <SecurityQuiz />
      </section>

      {/* Password Reminder */}
      <section className="max-w-6xl mx-auto px-4 py-8 pb-16">
        <Card className="p-6 bg-accent/20 border-accent/30 shadow-card backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent/20 rounded-lg">
              <Lock className="w-6 h-6 text-accent" />
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
