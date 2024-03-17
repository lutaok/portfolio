import { Component } from "solid-js";

type SkillCircleProps = {
  name: string;
  alt: string;
  label?: string;
};

const SkillCircle: Component<SkillCircleProps> = (props) => {
  return (
    <div class="flex flex-col items-center gap-1 capitalize">
      <span class="flex aspect-square w-16 items-center justify-center overflow-hidden rounded-full border-2 border-secondary-500 p-3">
        <img class="" alt={props.alt} loading="lazy" src={`/assets/${props.name}.svg`} />
      </span>
      <span>{props.label}</span>
    </div>
  );
};

export default SkillCircle;
