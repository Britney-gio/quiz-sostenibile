import React from "react";
import "../styles/main.scss";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="home-background">
      <div className="home-box">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;