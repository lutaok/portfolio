import { Component } from "solid-js";
import Icon from "../Icon/Icon";

const Footer: Component = () => {
  return (
    <footer class="flex w-full items-center justify-end gap-4 rounded-t-2xl border-t-2 border-primary-500 bg-bgColor-950 px-16 py-4">
      <div>
        <a
          href={"https://github.com/lutaok/portfolio"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Go to portfolio github repository`}
        >
          <Icon name={"github-logo"} />
        </a>
      </div>
      <div>
        Built with{" "}
        <a
          href="https://github.com/solidjs/solid-start"
          rel="noopener noreferrer"
          target="_blank"
          class="text-primary-500 underline hover:text-primary-300"
        >
          SolidStart
        </a>{" "}
        and much ❤️
      </div>
    </footer>
  );
};

export default Footer;
