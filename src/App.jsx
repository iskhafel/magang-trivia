import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WelcomeQuiz from "./pages/WelcomeQuiz";
import QuizPage from "./pages/QuizPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/welcome-quiz" element={<WelcomeQuiz />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
