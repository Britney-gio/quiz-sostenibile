import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const QuizIntro = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <PageLayout>
      <h1>Benvenuti al Quiz sulla Moda Sostenibile!</h1>
      <p>
        Ti verranno poste 5 domande. Ogni domanda ha 4 opzioni di risposta, ma
        solo una è corretta. Alla fine del quiz, scoprirai il tuo livello di
        consapevolezza!
      </p>
      <ul>
        <li>5 domande totali</li>
        <li>1 sola risposta corretta per ciascuna</li>
        <li>Nessun limite di tempo</li>
      </ul>
      <p>Buon divertimento e... sii sincerə!</p>

      <button onClick={handleStart}>Inizia il Quiz</button>
    </PageLayout>
  );
};

export default QuizIntro;
