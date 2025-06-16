import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/quizIntro");
  };

  return (
    <PageLayout>
      <h1>Quiz Moda & Consapevolezza</h1>
      <h2> Lo stile è anche una scelta. Tu quanto sei consapevole?</h2>
      Scoprilo con un quiz leggero ma pieno di spunti,
      <br />e alla fine saprai se:
      <ul>
        <li>sei all’inizio del tuo percorso 🌱</li>
        <li>hai già le idee chiare 📱</li>
        <li>sei pronto per la copertina di Vogue Etico 🌿</li>
      </ul>
      <button onClick={handleStartClick}>Iniziamo!</button>
      <p className="footer-note">
        Un progetto a cura di AgenziaX, comunicazione creativa per una moda più
        responsabile.
      </p>
    </PageLayout>
  );
};

export default Home;
