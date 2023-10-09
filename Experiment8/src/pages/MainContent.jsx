import React, { useState } from "react";
import "./LandingPage.css";
import DefaultContent from "../Components/DefaultContent";
import LPContent from "../Components/LandingPageComps/LPContent";
import Counter from "../Components/Counter";
const MainContent = ({ activeTab, sections }) => {
  const idx = activeTab.indexOf(true);
  switch (idx) {
    case 0:
      return <LPContent />;
    case 2:
      return <Counter />;

    default:
      return <DefaultContent contentHeader={sections[idx]} />;
  }
};

export default MainContent;
