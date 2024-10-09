import { useState, useEffect } from "react";
import axios from "axios";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    answeredQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [quizTimer, setQuizTimer] = useState(30);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then((response) => {
        const data = response.data;
        const formattedQuestions = data.results.map((question) => ({
          question: question.question,
          correctAnswer: question.correct_answer,
          choices: [
            ...question.incorrect_answers,
            question.correct_answer,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(formattedQuestions);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    if (quizTimer === 0) setShowResult(true);

    const intervalId = setInterval(() => {
      setQuizTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [quizTimer]);

  const onAnswerSelected = (answer, index) => {
    const isCorrect = answer === questions[activeQuestion].correctAnswer;
    setResult((prev) => ({
      answeredQuestions: prev.answeredQuestions + 1,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      wrongAnswers: prev.wrongAnswers + (!isCorrect ? 1 : 0),
    }));
    setSelectedAnswerIndex(index);

    setTimeout(() => {
      if (activeQuestion < questions.length - 1) {
        setActiveQuestion((prev) => prev + 1);
      } else {
        setShowResult(true);
      }
      setSelectedAnswerIndex(null);
    }, 500);
  };

  if (questions.length === 0) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-36 p-5 bg-white shadow-lg rounded-lg">
      {!showResult ? (
        <div>
          <div className="mb-4 flex justify-between">
            <div>
              <span className="text-xl font-bold">{activeQuestion + 1}</span>
              <span className="text-gray-500">/{questions.length}</span>
            </div>
            <span className="text-gray-600">
              Waktu yang Tersisa: {quizTimer}s
            </span>
          </div>
          <h2
            className="text-xl font-semibold mb-5"
            dangerouslySetInnerHTML={{
              __html: questions[activeQuestion].question,
            }}
          />
          <ul className="gap-4">
            {questions[activeQuestion].choices.map((answer, index) => (
              <li
                key={answer}
                onClick={() => onAnswerSelected(answer, index)}
                className={`p-4 border rounded-lg cursor-pointer hover:bg-blue-100 transition ${
                  selectedAnswerIndex === index
                    ? "bg-blue-200 border-blue-500"
                    : "bg-white"
                }`}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-5">Result</h3>
          <p className="text-lg">
            Total Soal:{" "}
            <span className="font-semibold">{questions.length}</span>
          </p>
          <p className="text-lg py-2">
            Jumlah yang dijawab:{" "}
            <span className="font-semibold">{result.answeredQuestions}</span>
          </p>
          <p className="text-lg">
            Jumlah benar:{" "}
            <span className="font-semibold">{result.correctAnswers}</span>
          </p>
          <p className="text-lg">
            Jumlah salah:{" "}
            <span className="font-semibold">{result.wrongAnswers}</span>
          </p>
        </div>
      )}
    </div>
  );
}
