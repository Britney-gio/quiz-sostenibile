import React from "react";
import "../styles/Home.scss";

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