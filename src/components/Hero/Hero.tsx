import { Component } from "solid-js";
import Skills from "../Skills/Skills";
import Icon from "../Icon/Icon";

const Hero: Component = () => {
  let imgRef: HTMLImageElement | undefined;

  return (
    <section class="flex flex-col items-center justify-between gap-8 px-10 py-6 lg:flex-row lg:px-40">
      <div class="flex grow flex-col gap-8 text-center">
        <h1
          id="about"
          class="bg-gradient-to-r from-primary to-accent to-75% bg-clip-text text-5xl text-black text-opacity-0"
        >
          Hello, I'm Lutaok
        </h1>
        <p>Experienced front-end developer specializing in crafting fast and efficient user interfaces.</p>
        <Skills />
        <div class="flex flex-col justify-center gap-2">
          <span>Find me on:</span>
          <div class="flex justify-center gap-10">
            <a
              href="https://github.com/lutaok"
              aria-label="Go to my Github profile"
              target="_blank"
              rel="noopener noreferrer"
              class="flex aspect-square max-w-12 items-center justify-center overflow-hidden rounded-full"
            >
              <Icon name="github-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucadigianventura/"
              aria-label="Go to my LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              class="flex aspect-square max-w-12 items-center justify-center overflow-hidden rounded-full"
            >
              <Icon name="linkedin-logo" />
            </a>
            <a
              href="mailto:luca.digian@hotmail.com"
              aria-label="Send mail to my address"
              target="_blank"
              rel="noopener noreferrer"
              class="flex aspect-square max-w-12 items-center justify-center overflow-hidden rounded-full"
            >
              <Icon name="mail" />
            </a>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <span class="inline-block max-w-96">
          <img ref={imgRef} src="/images/bg-square-luca.png" alt="Lutaok" />
        </span>
      </div>
    </section>
  );
};

export default Hero;
