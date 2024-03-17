import { Component } from "solid-js";

const Header: Component = () => {
  return (
    <header class="w-full rounded-2xl border-b-2 border-b-primary-500 bg-bgColor-950 px-16 py-4">
      <nav>
        <ul class="flex justify-end gap-10">
          <li>
            {/* Buttons were used since fragment identifiers on anchor tags weren't working on multiple clicks on the same link */}
            <button
              onClick={() => {
                const target = document.getElementById("work-experiences");
                history.replaceState(null, "", window.location.pathname + "#work-experiences");
                target?.scrollIntoView();
              }}
            >
              Work Experiences
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const target = document.getElementById("side-projects");
                history.replaceState(null, "", window.location.pathname + "#side-projects");
                target?.scrollIntoView();
              }}
            >
              Side Projects
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
