import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Tab 1", content: "This is the content of Tab 1" },
    { title: "Tab 2", content: "This is the content of Tab 2" },
    { title: "Tab 3", content: "This is the content of Tab 3" },
    { title: "Tab 4", content: "This is the content of Tab 4" },
  ];

  return (
    <>
      <div className="container">
        <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
        </div>
        <div className="content">{tabs[activeTab].content}</div>
      </div>
    </>
  );
}

export default App;