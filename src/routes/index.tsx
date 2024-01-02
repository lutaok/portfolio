import BaseLayout from "~/layouts/BaseLayout";
import Hero from "~/components/Hero/Hero";
import WorkTimeline from "~/components/WorkTimeline/WorkTimeline";
import HobbyCard from "~/components/HobbyCard/HobbyCard";
import "./index.scss";

export default function Home() {
  return (
    <BaseLayout description="lutaok.dev homepage" title="Lutaok Portfolio">
      <div class="links">
        <h1>Portfolio</h1>
        <a href="#intro">Intro</a>
        <a href="#work">Work</a>
        <a href="#hobbies">Hobbies</a>
      </div>

      <section id="intro" class="page-section container hero-container">
        <Hero />
      </section>
      <section id="work" class="page-section container work-container">
        <h2>Work</h2>
        <div class="container work">
          <WorkTimeline />
        </div>
      </section>
      <section id="hobbies" class="page-section hobbies-container">
        <h2>Hobbies</h2>
        <div class="container hobbies">
          <HobbyCard
            title="Speaker"
            description="Speaker in conferences"
            linkLabel="See my conferences"
            linkTo="/conferences"
          />
          <HobbyCard
            title="OSS Contributor"
            description="Contributing to large repos"
            linkLabel="See my contributions"
            linkTo="/contributions"
          />
          <HobbyCard title="Gamer" description="Gamer to the core" linkLabel="See my favorite games" linkTo="/games" />
        </div>
      </section>
    </BaseLayout>
  );
}
