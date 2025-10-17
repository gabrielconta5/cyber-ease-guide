import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Trophy } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    question: "Qual é a melhor prática ao criar uma senha?",
    options: [
      "Usar seu nome e data de nascimento",
      "Misturar letras, números e símbolos",
      "Usar a mesma senha em todos os sites"
    ],
    correctAnswer: 1
  },
  {
    question: "O que você deve fazer ao receber um e-mail suspeito?",
    options: [
      "Clicar em todos os links para verificar",
      "Responder com suas informações pessoais",
      "Não clicar em links e deletar o e-mail"
    ],
    correctAnswer: 2
  },
  {
    question: "É seguro usar Wi-Fi público para acessar seu banco?",
    options: [
      "Sim, sempre é seguro",
      "Não, evite fazer transações bancárias em Wi-Fi público",
      "Só se a rede tiver senha"
    ],
    correctAnswer: 1
  }
];

export const SecurityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([false, false, false]);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions([false, false, false]);
  };

  if (showResult) {
    return (
      <Card className="p-8 bg-card/80 backdrop-blur-xl shadow-glow border-border/50 animate-fade-in relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="text-center relative z-10">
          <div className="inline-block p-6 bg-gradient-primary rounded-full mb-6 shadow-glow">
            <Trophy className="w-16 h-16 text-primary-foreground" />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-foreground">Quiz Concluído!</h3>
          <p className="text-2xl mb-6 text-foreground">
            Você acertou <span className="text-primary font-bold text-4xl">{score}</span> de {questions.length} perguntas
          </p>
          <p className="text-muted-foreground mb-8 text-lg">
            {score === 3 ? "Parabéns! Você está bem informado sobre segurança online! 🎉" :
             score === 2 ? "Muito bom! Continue aprendendo sobre segurança! 👍" :
             "Que tal revisar o conteúdo acima? A prática leva à perfeição! 📚"}
          </p>
          <Button onClick={resetQuiz} size="lg" className="shadow-lg">
            Fazer o Quiz Novamente
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-card/80 backdrop-blur-xl shadow-glow border-border/50 animate-fade-in relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5"></div>
      <div className="relative z-10">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-muted-foreground">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-foreground">
              Pontuação: {score}
            </span>
          </div>
          <div className="w-full bg-secondary/30 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-6 text-foreground">
          {questions[currentQuestion].question}
        </h3>

        <div className="space-y-3 mb-6">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                selectedAnswer === index
                  ? "border-primary bg-primary/10 shadow-lg scale-[1.02]"
                  : "border-border bg-card/50 hover:border-primary/50 hover:bg-card/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswer === index ? "border-primary bg-primary" : "border-muted-foreground"
                }`}>
                  {selectedAnswer === index && <div className="w-3 h-3 bg-primary-foreground rounded-full" />}
                </div>
                <span className="text-foreground">{option}</span>
              </div>
            </button>
          ))}
        </div>

        <Button 
          onClick={handleNext} 
          disabled={selectedAnswer === null}
          size="lg"
          className="w-full shadow-lg"
        >
          {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
        </Button>
      </div>
    </Card>
  );
};
