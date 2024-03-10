import { Meta, Title } from "@solidjs/meta";
import { Component, JSX } from "solid-js";

type BaseLayoutProps = {
  title: string;
  description: string;
  children: JSX.Element;
};

const BaseLayout: Component<BaseLayoutProps> = (props) => {
  return (
    <main class="bg-gradient-to-b from-transparent to-bgColor">
      <Meta name="description" content={props.description} />
      <Title>{props.title}</Title>
      {props.children}
    </main>
  );
};

export default BaseLayout;
