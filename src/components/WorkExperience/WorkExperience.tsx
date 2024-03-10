import { Component, For } from "solid-js";
import SkillTags from "../Skills/SkillTags";

type WorkExperienceProps = {
  company: string;
  jobTitle: string;
  startFromMonth: string;
  endMonth?: string;
  description: string;
  skills: string[] | SkillsPerProject[];
  isFirst?: boolean;
};

type SkillsPerProject = {
  label: string;
  skills: string[];
};

const WorkExperience: Component<WorkExperienceProps> = (props) => {
  const hasSingleProject = (skills: string[] | SkillsPerProject[]): skills is string[] => {
    return Array.isArray(props.skills) && props.skills.every((skill) => typeof skill === "string");
  };

  return (
    <div class="flex gap-4">
      <div class="flex flex-col items-center gap-0.5 pt-0.5">
        <span class="aspect-square max-h-4 w-4 rounded-full bg-primary-500" />
        {!props.isFirst && <span class="w-0 grow border border-primary-500" />}
      </div>
      <div>
        <h3 class="text-xl font-bold">{props.company}</h3>
        <span class="text-sm text-white text-opacity-75">
          {props.startFromMonth} - {props.endMonth ?? "Present"}
        </span>
        <h4 class="text-lg italic">{props.jobTitle}</h4>
        <p class="mb-4 mt-2 text-sm leading-6">{props.description}</p>

        {hasSingleProject(props.skills) ? (
          <SkillTags skills={props.skills} />
        ) : (
          <div class="flex flex-col gap-4 lg:flex-row lg:gap-12">
            <For each={props.skills}>
              {(project) => (
                <>
                  <div class="flex grow flex-col gap-2">
                    <span class="text-sm italic">{project.label}</span>
                    <SkillTags skills={project.skills} />
                  </div>
                </>
              )}
            </For>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
