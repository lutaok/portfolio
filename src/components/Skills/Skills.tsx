import { Component, For } from "solid-js";
import { SKILLS } from "~/constants/skills";
import SkillCircle from "./SkillCircle/SkillCircle";
import "./skills.scss";

interface SkillData {
  name: string;
  alt: string;
}

const Skills: Component = () => {
  const skillData: SkillData[] = SKILLS.map((skill) => ({
    name: skill.name,
    alt: `${skill.name} logo`,
  }));

  return (
    <div class="skills-container">
      <For each={skillData}>{(skill) => <SkillCircle name={skill.name} alt={skill.name} label={skill.name} />}</For>
    </div>
  );
};

export default Skills;
