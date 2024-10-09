import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function WelcomeQuiz() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto mt-36 p-5 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-5">Welcome to the Quiz!</h1>
        <p className="text-lg mb-5">
          You will be asked 10 multiple choice questions. Try to answer them
          before the time runs out.
        </p>
        <button
          onClick={() => navigate("/quiz")}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Start Quiz
        </button>
      </div>
    </>
  );
}
