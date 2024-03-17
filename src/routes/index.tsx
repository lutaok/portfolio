import { createEffect, onCleanup } from "solid-js";
import BaseLayout from "~/layouts/BaseLayout";
import Hero from "~/components/Hero/Hero";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import WorkExperience from "~/components/WorkExperience/WorkExperience";

export default function Home() {
  const sections: HTMLElement[] = [];

  createEffect(() => {
    // Insert hashes when each section intersects with the viewport for its 70%
    const main = document.querySelector("main");
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const url = new URL(window.location.href);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.querySelector("h1, h2");
            if (title) {
              url.hash = title?.id;
              history.replaceState(null, "", url);
              window.location.hash = url.hash;
            }
          }
        });
      },
      {
        root: main,
        rootMargin: "-10px 0% -10px 0%",
        threshold: 0.7,
      },
    );

    sections.forEach((sections) => {
      intersectionObserver.observe(sections);
    });

    onCleanup(() => {
      intersectionObserver.disconnect();
    });
  });

  createEffect(() => {
    const removeHash = (e: Event) => {
      // When scrolling reaches top of the page
      const target = e.target as HTMLElement | null;
      if (target?.scrollTop === 0) {
        const url = new URL(window.location.href);
        url.hash = "";
        history.replaceState(null, "", url);
      }
    };

    window.addEventListener("scroll", removeHash, {
      capture: true,
    });

    onCleanup(() => {
      window.removeEventListener("scroll", removeHash, {
        capture: true,
      });
    });
  });

  return (
    <BaseLayout description="lutaok.dev homepage" title="Lutaok Portfolio">
      <section class="flex flex-col items-center justify-between gap-8 px-10 py-6 lg:flex-row lg:px-40">
        <Hero />
      </section>

      <section
        ref={(el) => sections.push(el)}
        class="flex flex-col gap-4 rounded-2xl border-b-2 border-t-2 border-primary-500 px-10 py-6 lg:px-40"
      >
        <h2 id="work-experiences" class="text-center text-2xl font-bold">
          Work Experiences
        </h2>

        <WorkExperience
          company="Accenture"
          startFromMonth="Oct 2023"
          jobTitle="Front End Engineer - Team Leader"
          description="Develop, build and ship high-quality and accessible websites to a client. Coordinate and lead a team of
            four by providing guidance, mentorship, and support. Managed tight deadlines by prioritizing features and
            splitting tasks among the team. Own core features of several different projects."
          skills={["Astro", "Svelte", "Typescript", "TailwindCSS"]}
        />
        <WorkExperience
          company="Accenture"
          startFromMonth="Nov 2022"
          endMonth="Oct 2023"
          jobTitle="Front End Engineer"
          description="Developed and shipped a complex and high-performant web app with WYSIWYG features to a client.
            Collaborated closely with UX Designers and Backend Developers to ensure pixel perfect interfaces and
            seamless integrations. Provided mentoring to more junior members on the team"
          skills={["React", "Typescript", "Zustand", "SCSS", "mxGraph"]}
        />
        <WorkExperience
          company="Engineering"
          startFromMonth="Aug 2020"
          endMonth="Nov 2022"
          jobTitle="Front End Engineer"
          description="Developed and shipped SmartTV web apps used by millions of people. Ensured cross-browser compatibility and
          improved performance by paying close attention to Chrome DevTools metrics. Monitored runtime errors and
          performance through Kibana."
          skills={[
            {
              label: "Project #1",
              skills: ["Javascript", "jQuery", "SCSS", "Twig", "Kibana"],
            },
            {
              label: "Project #2",
              skills: ["React", "Typescript", "SCSS", "Redux Toolkit", "Redux Toolkit Query", "Kibana"],
            },
          ]}
          isFirst
        />
      </section>

      <section ref={(el) => sections.push(el)} class="flex flex-col gap-10 px-10 py-6 lg:px-40">
        <h2 id="side-projects" class="text-center text-2xl font-bold">
          Side Projects
        </h2>

        <div class="flex flex-wrap justify-around gap-8">
          <ProjectCard
            title="Solid Modal"
            description={[
              "Developed an accessible, reusable Modal component for SolidJS ecosystem",
              "Tested using Vitest and Solid Testing Library",
              "Shipped on npm as a downloadable library",
            ]}
            skills={["SolidJS", "Typescript", "Vitest", "Solid Testing Library"]}
            links={[
              {
                type: "github",
                url: "https://github.com/lutaok/solid-modal",
              },
            ]}
          />

          <ProjectCard
            title="Advent Of Code - Go"
            description={[
              "Participated in Advent of Code daily challenges using Go",
              "Competed into private leaderboards for fun",
              "Achieved 19 stars in the first 10 days",
              "Donated a small amount to support the project",
            ]}
            skills={["Go"]}
            links={[
              {
                type: "github",
                url: "https://github.com/lutaok/advent-of-code-go",
              },
            ]}
          />
        </div>
      </section>

      {/* TODO: Add hobby section */}
    </BaseLayout>
  );
}
