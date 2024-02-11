import { JSXElement, createSignal } from "solid-js";
import EnvelopeTab from "../../../models/EnvelopeTab";

export default function Tabs() {
  const [activeTab, setActiveTab] = createSignal(1);

  const tabs: EnvelopeTab = new EnvelopeTab();
  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div role="tablist" class="tabs tabs-bordered">
      {tabs.tabs.map((tab) => (
        <a
          role="tab"
          class={`tab ${activeTab() === tab.id ? "tab-active" : ""}`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </a>
      ))}

      {tabs.tabs.map((tab) => (
        <div style={{ display: activeTab() === tab.id ? "block" : "none" }}>
          {tab.content}
        </div>
      ))}
    </div>
  );
}
