import { Component, For } from "solid-js";
import SkillTags from "../Skills/SkillTags";
import Icon from "../Icon/Icon";

type ProjectCardProps = {
  title: string;
  description: string | string[];
  skills: string[];
  links: ProjectLink[];
};

type ProjectLink = {
  type: "github" | "website";
  url: string;
};

const ProjectCard: Component<ProjectCardProps> = (props) => {
  return (
    <div class="flex min-h-64 grow flex-col justify-between rounded-xl border-2 border-primary-500">
      <h3 class="px-4 py-2 text-lg font-semibold text-primary-500">{props.title}</h3>
      {Array.isArray(props.description) ? (
        <ul class="grow px-4 py-2 text-sm text-words-50 text-opacity-85">
          <For each={props.description}>{(text) => <li>{text}</li>}</For>
        </ul>
      ) : (
        <p class="grow px-4 py-2 text-sm text-words-50 text-opacity-85">{props.description}</p>
      )}

      <div class="flex flex-col items-center justify-between gap-4 px-4 py-2 sm:flex-row">
        <SkillTags skills={props.skills} />
        <div>
          <For each={props.links}>
            {(link) => (
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Go to ${link.type}`}>
                <Icon name={link.type === "github" ? "github-logo" : "linkedin-logo"} />
              </a>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
