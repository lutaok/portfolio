import BaseLayout from "~/layouts/BaseLayout";
import Hero from "~/components/Hero/Hero";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import WorkExperience from "~/components/WorkExperience/WorkExperience";

export default function Home() {
  return (
    <BaseLayout description="lutaok.dev homepage" title="Lutaok Portfolio">
      <Hero />

      <section class="flex flex-col gap-4 rounded-2xl border-b-2 border-t-2 border-primary-500 px-10 py-6 lg:px-40">
        <h2 class="text-center text-2xl font-bold">Work Experiences</h2>

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

      <section class="flex flex-col gap-10 px-10 py-6 lg:px-40">
        <h2 class="text-center text-2xl font-bold">Side Projects</h2>

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
