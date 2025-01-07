import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange(tabId); // Panggil fungsi kembalian dengan tab yang dipilih
  };

  return (
    <div className="border-b border-gray-200">
      <nav className="flex" aria-label="Tabs">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href="#"
            onClick={() => handleTabClick(tab.id)}
            className={`px-6 py-3 bg-white border-b-2 ${
              activeTab === tab.id
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500'
            } text-sm font-medium hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300`}
          >
            {tab.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;