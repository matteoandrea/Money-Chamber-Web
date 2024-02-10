'use client'

import { useState } from 'react'
import Tabs from "@/app/components/tabs";

export default function EnvelopeTab() {
    const [activeTab, setActiveTab] = useState(1);

    const tabs: Tabs = new Tabs();
    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
    };

    return (
        <div role="tablist" className="tabs tabs-bordered">
            {tabs.tabs.map((tab) => (
                <a
                    role="tab"
                    className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(tab.id)}
                >
                    {tab.label}
                </a>
            ))}

            {tabs.tabs.map((tab) => (
                <div style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
                    {tab.content}
                </div>
            ))}
        </div>
    );
}