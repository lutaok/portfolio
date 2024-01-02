import { Component, Index } from "solid-js";

interface WorkCardProps {
  id: string;
  title: string;
  position: string;
  description: string;
  skills: string[];
}

const WorkCard: Component<WorkCardProps> = (props) => {
  return (
    <div class="work-card" id={props.id}>
      <h3>{props.title}</h3>
      <span>{props.position}</span>
      <p>{props.description}</p>

      <Index each={props.skills}>{(skill) => <span>{skill()}</span>}</Index>
    </div>
  );
};

export default WorkCard;
