import { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <footer class="flex w-full justify-end rounded-t-2xl border-t-2 border-primary-500 bg-bgColor-950 px-16 py-4">
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
