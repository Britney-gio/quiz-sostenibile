import React from "react";
import "../styles/main.scss";
import { useNavigate } from "react-router-dom";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="home-background">
      <div className="home-box">
        {children}
        <button className="home-btn" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </div>
  );
};

export default PageLayout;
