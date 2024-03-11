import { Component } from "solid-js";

const Header: Component = () => {
  return (
    <header class="w-full border-b-2 border-b-primary-500 bg-bgColor-950 px-12 py-4">
      <nav>
        <ul class="flex justify-end gap-10">
          <li>
            <a href="#work-experiences">Work Experiences</a>
          </li>
          <li>
            <a href="#side-projects">Side Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
