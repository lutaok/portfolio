import { Component } from "solid-js";
import "./skill-circle.scss";

interface SkillCircleProps {
  name: string;
  alt: string;
  label?: string;
}

const SkillCircle: Component<SkillCircleProps> = (props) => {
  return (
    <div class="skill-wrapper">
      <span class="skill">
        <img alt={props.alt} loading="lazy" src={`/assets/${props.name}.svg`} />
      </span>
      <span>{props.label}</span>
    </div>
  );
};

export default SkillCircle;
