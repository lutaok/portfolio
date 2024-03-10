import { Component } from "solid-js";

type SkillTagProps = {
  title: string;
};

const SkillTag: Component<SkillTagProps> = (props) => {
  return (
    <div class="inline-flex cursor-default items-center justify-center rounded-full bg-secondary-700 px-4 py-1 text-sm hover:bg-secondary-600">
      {props.title}
    </div>
  );
};

export default SkillTag;
