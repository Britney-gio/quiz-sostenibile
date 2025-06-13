import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <main className="home-background">
      <div className="home-box">
        <h1>Quiz Moda & Consapevolezza</h1>
        <h2> Lo stile è anche una scelta. Tu quanto sei consapevole?</h2>
        <p>
          Con questo quiz scopri quanto ne sai su materiali, filiere, slow
          fashion e abitudini sostenibili. Un quiz per chi ama la moda, ma con
          un occhio al futuro del pianeta.
        </p>
        <button onClick={startQuiz}>Iniziamo!</button>
        <p className="footer-note">
          Un progetto a cura di AgenziaX, comunicazione creativa per una moda
          più responsabile.
        </p>
      </div>
    </main>
  );
};

export default Home;
