// src/components/QuizGame.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const QuizGame = () => {
  const questions = [
    {
      question: "O que é energia renovável?",
      options: ["Energia que não polui", "Energia gerada de fontes que se regeneram", "Energia nuclear", "Energia proveniente de combustíveis fósseis"],
      correctAnswer: "Energia gerada de fontes que se regeneram"
    },
    {
      question: "Qual é a principal fonte de energia renovável?",
      options: ["Energia solar", "Carvão", "Gás natural", "Energia nuclear"],
      correctAnswer: "Energia solar"
    },
    {
      question: "O que significa descarbonização?",
      options: ["Redução de carbono na água", "Aumento de carbono na atmosfera", "Redução de emissões de carbono", "Geração de energia através de carbono"],
      correctAnswer: "Redução de emissões de carbono"
    },
    {
      question: "Qual é a vantagem da energia eólica?",
      options: ["É uma fonte poluente", "É uma fonte limpa e inesgotável", "É muito cara", "Gera muito lixo"],
      correctAnswer: "É uma fonte limpa e inesgotável"
    },
    {
      question: "O que são prosumidores?",
      options: ["Consumidores que produzem energia", "Indústrias de carvão", "Empresas de energia solar", "ONGs ambientalistas"],
      correctAnswer: "Consumidores que produzem energia"
    },
    {
      question: "O que facilita a digitalização no setor energético?",
      options: ["Maior poluição", "Gerenciamento remoto e eficiência", "Mais barreiras", "Menor eficiência"],
      correctAnswer: "Gerenciamento remoto e eficiência"
    },
    {
      question: "Qual é o objetivo da transição energética?",
      options: ["Criar um futuro verde e responsável", "Manter os combustíveis fósseis", "Reduzir a energia solar", "Aumentar o uso de carvão"],
      correctAnswer: "Criar um futuro verde e responsável"
    },
    {
      question: "Qual é o papel da inovação na energia renovável?",
      options: ["Aumentar a eficiência e sustentabilidade", "Aumentar a poluição", "Reduzir o uso de energia", "Eliminar todas as fontes renováveis"],
      correctAnswer: "Aumentar a eficiência e sustentabilidade"
    },
    {
      question: "Por que a energia renovável é importante?",
      options: ["Ajuda a combater as mudanças climáticas", "Aumenta a poluição", "É cara e não sustentável", "Não tem impacto no ambiente"],
      correctAnswer: "Ajuda a combater as mudanças climáticas"
    },
    {
      question: "O que é descentralização energética?",
      options: ["Centralizar a produção de energia", "Distribuição da geração de energia em várias fontes", "Aumentar o uso de carvão", "Depender apenas de um país para energia"],
      correctAnswer: "Distribuição da geração de energia em várias fontes"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleAnswerSubmit = () => {
    const question = questions[currentQuestion];
    
    if (selectedOption === question.correctAnswer) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([...incorrectAnswers, { ...question, userAnswer: selectedOption }]);
    }

    setSelectedOption(""); // Limpa a seleção
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <QuizContainer>
      {showScore ? (
        <ScoreSection>
          <h2>Resultado do Quiz</h2>
          <p>Acertos: {score}</p>
          <p>Erros: {questions.length - score}</p>
          <h3>Respostas Incorretas:</h3>
          <ul>
            {incorrectAnswers.map((item, index) => (
              <li key={index}>
                <strong>Pergunta:</strong> {item.question}<br />
                <strong>Sua Resposta:</strong> {item.userAnswer}<br />
                <strong>Resposta Correta:</strong> {item.correctAnswer}
              </li>
            ))}
          </ul>
        </ScoreSection>
      ) : (
        <QuestionSection>
          <h2>Quiz Game</h2>
          <p>{questions[currentQuestion].question}</p>
          <Options>
            {questions[currentQuestion].options.map((option, index) => (
              <OptionButton
                key={index}
                onClick={() => setSelectedOption(option)}
                selected={selectedOption === option}
              >
                {option}
              </OptionButton>
            ))}
          </Options>
          <Button onClick={handleAnswerSubmit} disabled={!selectedOption}>Responder</Button>
        </QuestionSection>
      )}
    </QuizContainer>
  );
};

export default QuizGame;

// Estilos com styled-components
const QuizContainer = styled.div`
  background-color: #111;
  color: #fff;
  border: 2px solid #00ff00;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const QuestionSection = styled.div`
  h2 {
    color: #00ff00;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
`;

const OptionButton = styled.button`
  padding: 10px;
  border: 1px solid #00ff00;
  background-color: ${(props) => (props.selected ? '#00cc00' : '#222')};
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00cc00;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #00ff00;
  cursor: pointer;

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #00cc00;
  }
`;

const ScoreSection = styled.div`
  font-size: 1.2rem;
  color: #00ff00;
  text-align: left;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 15px;
    line-height: 1.5;
  }
`;
