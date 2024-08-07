import { Meta, Title } from "@solidjs/meta";
import { Component, JSX } from "solid-js";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import Icon from "~/components/Icon/Icon";

type BaseLayoutProps = {
  title: string;
  description: string;
  children: JSX.Element;
};

const BaseLayout: Component<BaseLayoutProps> = (props) => {
  let mainRef: HTMLElement | undefined;

  return (
    <main ref={mainRef} class="h-[100dvh] scroll-p-20 overflow-y-scroll overscroll-none scroll-smooth">
      <Meta name="description" content={props.description} />
      <Title>{props.title}</Title>
      <Header />
      {props.children}
      <Footer />
      <button
        aria-label="Click to scroll to top of the page"
        class="fixed bottom-2 right-2 overscroll-none rounded-full border-2 border-white bg-secondary-700 p-0.5"
        onClick={() => {
          mainRef?.scrollTo(0, 0);
        }}
      >
        <Icon name="arrow-up" size="24" />
      </button>
    </main>
  );
};

export default BaseLayout;
