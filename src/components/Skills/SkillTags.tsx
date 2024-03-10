import { Component, For } from "solid-js";
import SkillTag from "./SkillTag/SkillTag";

type SkillTagsProps = {
  skills: string[];
};

const SkillTags: Component<SkillTagsProps> = (props) => {
  return (
    <ul class="flex flex-wrap gap-2">
      <For each={props.skills}>
        {(skill) => (
          <li>
            <SkillTag title={skill} />
          </li>
        )}
      </For>
    </ul>
  );
};

export default SkillTags;
