import React from "react";
import Tabs from "./tabs";

const App: React.FC = () => {
  const tabsContent = [
    { label: "Home", content: "Welcome to the Home tab!" },
    { label: "About", content: "This is the About tab." },
    { label: "Contact", content: "Reach us through the Contact tab." },
  ];

  const handleTabChange = (selectedTab: string) => {
    console.log(`Active Tab: ${selectedTab}`);
  };

  return (
    <div className="app">
      <h1>My Tabs App</h1>
      <Tabs tabsContent={tabsContent} onChange={handleTabChange} />
    </div>
  );
};

export default App;
