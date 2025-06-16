import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";
import QuizIntro from "./pages/QuizIntro";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="quiz-sostenibile">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/quizIntro" element={<QuizIntro />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
