import { Component, Index } from "solid-js";
import "./work-timeline.scss";
import Timeline from "./Timeline/Timeline";
import TimelineStep from "./Timeline/TimelineStep";

interface WorkProject {
  title: string;
  position: string;
  startedAt: string;
  endedAt?: string;
  description: string;
  skills: string[];
}

interface WorkCompany {
  id: string;
  name: string;
  from: string;
  to?: string;

  projects: WorkProject[];
}

const WorkTimeline: Component = () => {
  const engProjects: WorkProject[] = [
    {
      title: "Video platform web app for SmartTV",
      position: "Junior Solution Developer",
      skills: ["Javascript", "jQuery", "SCSS", "Twig"],
      startedAt: "2021-01-11",
      endedAt: "2022-11-07",
      description: "SmartTv Web app",
    },
    {
      title: "Audio platform web app for SmartTV",
      position: "Junior Solution Developer",
      skills: ["React", "Typescript", "Redux Toolkit", "RTK Query"],
      startedAt: "2022-05-01",
      endedAt: "2022-11-07",
      description: "SmartTv Web app - audio",
    },
    {
      title: "Mock video platform web app for Tizen SmartTV",
      position: "Junior Solution Developer Intern",
      skills: ["Javascript", "jQuery", "SCSS", "Twig"],
      startedAt: "2020-09-01",
      endedAt: "2020-12-15",
      description: "Mock SmartTv Web app",
    },
  ];

  const acnProjects: WorkProject[] = [
    {
      title: "Websites",
      position: "Custom Software Engineering Senior Analyst (Team Leader)",
      skills: ["Astro", "Javascript", "Svelte", "TailwindCSS"],
      startedAt: "2021-01-11",
      endedAt: "2022-11-14",
      description: "SmartTv Web app",
    },
    {
      title: "Administrative web app",
      position: "Custom Software Engineering Senior Analyst",
      skills: ["React", "Typescript", "SCSS", "Zustand", "mxGraph"],
      startedAt: "2022-11-14",
      endedAt: "2023-09-30",
      description: "SmartTv Web app",
    },
  ];

  const companies: WorkCompany[] = [
    {
      id: "acn",
      name: "Accenture",
      from: "2022-11-14",
      projects: acnProjects,
    },
    {
      id: "eng",
      name: "Engineering",
      from: "2020-09-01",
      projects: engProjects,
    },
  ];

  return (
    <div class="work-details-container">
      <Timeline id="work-timeline">
        <Index each={companies}>
          {(company) => (
            <TimelineStep id={company().id} title={company().name}>
              <Index each={company().projects}>{(project) => <div>Ciao sono un progetto {project().title}</div>}</Index>
            </TimelineStep>
          )}
        </Index>
      </Timeline>
    </div>
  );
};

export default WorkTimeline;
