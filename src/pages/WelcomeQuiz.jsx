import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

export default function WelcomeQuiz() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto mt-36 p-5 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-5">Welcome to the Trivia!</h1>
        <p className="text-lg mb-5">
          You will be asked 10 multiple choice questions. Try to answer them
          before the time runs out.
        </p>
        <Button className="mx-auto" onClick={() => navigate("/quiz")}>
          Start Quiz
        </Button>
      </div>
    </>
  );
}
