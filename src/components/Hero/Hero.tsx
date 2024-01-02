import { Component } from "solid-js";
import Skills from "../Skills/Skills";
import "./hero.scss";

const Hero: Component = () => {
  return (
    <div class="hero">
      <div class="hero-text">
        <h2>Hello, I'm Lutaok</h2>
        <p>Passionate front end developer who likes to build efficient and pleasant user interfaces</p>
        <Skills />
      </div>
      <div class="hero-image">
        <span>
          <img src="/images/lutaok.jpg" alt="Lutaok" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
