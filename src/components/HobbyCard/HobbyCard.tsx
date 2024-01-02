import { Component } from "solid-js";

interface HobbyCardProps {
  title: string;
  description: string;
  linkTo: string;
  linkLabel: string;
}

const HobbyCard: Component<HobbyCardProps> = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <a href={props.linkTo}>{props.linkLabel}</a>
    </div>
  );
};

export default HobbyCard;
