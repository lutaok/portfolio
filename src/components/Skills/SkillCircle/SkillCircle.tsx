import { Component } from "solid-js";

type SkillCircleProps = {
  name: string;
  alt: string;
  label?: string;
};

const SkillCircle: Component<SkillCircleProps> = (props) => {
  return (
    <div class="flex flex-col items-center gap-1 capitalize">
      <span class="flex aspect-square w-16 items-center justify-center overflow-hidden rounded-full border-2 border-primary-500 p-3 shadow-[0_0_10px] shadow-accent-200 outline outline-4 outline-secondary-500">
        <img class="" alt={props.alt} loading="lazy" src={`/assets/${props.name}.svg`} />
      </span>
      <span>{props.label}</span>
    </div>
  );
};

export default SkillCircle;
