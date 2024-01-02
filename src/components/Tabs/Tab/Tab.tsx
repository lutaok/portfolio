import { Component, JSX } from "solid-js";

export interface TabProps {
  id: string;
  title: string;
  children: JSX.Element;
}

const Tab: Component<TabProps> = (props) => {
  return props as unknown as JSX.Element;
};

export default Tab;
