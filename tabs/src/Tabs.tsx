import React from "react";
import "./App.css";

interface TabItem {
  label: string;
  content: string;
}

interface TabsProps {
  tabsContent: TabItem[];
  onChange: (selectedTab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabsContent, onChange }) => {
  const [activeTab, setActiveTab] = React.useState<string>(
    tabsContent[0]?.label || ""
  );

  const handleTabClick = (label: string) => {
    setActiveTab(label);
    onChange(label);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem) => (
          <div
            key={tabItem.label}
            className={`tab ${activeTab === tabItem.label ? "active" : ""}`}
            onClick={() => handleTabClick(tabItem.label)}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent.find((tabItem) => tabItem.label === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
