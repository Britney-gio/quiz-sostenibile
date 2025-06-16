import { useLocation, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import "../styles/main.scss";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score ?? 0;

  const getLevel = (score: number) => {
    switch (true) {
      case score <= 2:
        return {
          label: "Livello: Base 🟡",
          message:
            "Hai mosso i primi passi verso una maggiore consapevolezza: ogni scelta conta.",
          emoji: "🌱",
          colorClass: "result-base",
        };
      case score <= 4:
        return {
          label: "Livello: Intermedio 🟠",
          message:
            "Hai già una buona conoscenza dei temi green. Continua così: ogni abito sostenibile fa la differenza.",
          emoji: "🌿",
          colorClass: "result-intermedio",
        };
      case score === 5:
        return {
          label: "Livello: Esperto/a 🔵",
          message:
            "Complimenti! Hai dimostrato una preparazione solida e consapevole sulla moda sostenibile.",
          emoji: "🧠",
          colorClass: "result-esperto",
        };
      default:
        return {
          label: "Livello sconosciuto ❓",
          message:
            "Qualcosa non ha funzionato: riprova il quiz per scoprire meglio il tuo livello.",
          emoji: "❓",
          colorClass: "",
        };
    }
  };

  const { label, message, emoji, colorClass } = getLevel(score);

  const handleRestart = () => {
    navigate("/quiz");
  };

  return (
    <PageLayout>
      <h1>Quiz completato!</h1>
      <p>Hai risposto correttamente a {score} su 5 domande.</p>

      <div className={`result-box ${colorClass}`}>
        <span className="emoji">{emoji}</span>
        <h2>{label}</h2>
        <p>{message}</p>
      </div>

      <button onClick={handleRestart}>Ricomincia il quiz</button>
    </PageLayout>
  );
};

export default Result;
