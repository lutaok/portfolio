import { Component, For } from "solid-js";
import { HERO_SKILLS } from "~/constants/skills";
import SkillCircle from "./SkillCircle/SkillCircle";

type SkillData = {
  name: string;
  alt: string;
};

const Skills: Component = () => {
  const skillData: SkillData[] = HERO_SKILLS.map((skill) => ({
    name: skill.name,
    alt: `${skill.name} logo`,
  }));

  return (
    <ul class="flex flex-wrap items-center justify-center gap-4 px-4">
      <For each={skillData}>
        {(skill) => (
          <li>
            <SkillCircle name={skill.name} alt={skill.name} label={skill.name} />
          </li>
        )}
      </For>
    </ul>
  );
};

export default Skills;
