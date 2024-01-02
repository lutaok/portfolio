import { Component, For, JSX, children, createEffect, createSignal } from "solid-js";
import { TabProps } from "./Tab/Tab";
import "./tabs.scss";

interface TabButtonProps {
  id: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: Component<TabButtonProps> = (props) => {
  return (
    <button id={props.id} data-active={props.active} onClick={() => props.onClick()}>
      {props.label}
    </button>
  );
};

interface TabsProps {
  children: JSX.Element;
}

const Tabs: Component<TabsProps> = (props) => {
  const tabs = children(() => props.children);
  const tabsProperties = () => tabs.toArray() as unknown as TabProps[];

  const [activeTabId, setActiveTabId] = createSignal<string>(tabsProperties()[0].id);
  const activeTabContent = () => tabsProperties().find((tab) => tab.id === activeTabId())?.children;

  const onTabClick = (tab: TabProps) => {
    setActiveTabId(tab.id);
  };

  createEffect(() => {
    // When passed down tabs change then reset the active selection
    if (!activeTabContent() && tabsProperties()[0]) {
      setActiveTabId(tabsProperties()[0].id);
    }
  });

  return (
    <div class="tabs">
      <div class="tabs-container">
        <For each={tabsProperties()}>
          {(tab) => (
            <TabButton
              label={tab.title}
              id={tab.id}
              onClick={() => onTabClick(tab)}
              active={activeTabId() === tab.id}
            />
          )}
        </For>
      </div>

      <div class="tab-content">{activeTabContent()}</div>
    </div>
  );
};

export default Tabs;
