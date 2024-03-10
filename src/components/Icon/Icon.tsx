import { Component } from "solid-js";
import { ICON_PATHS, IconKeys } from "./icon-paths";

type IconProps = {
  name: IconKeys;
  fill?: string;
  stroke?: string;
};

const Icon: Component<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 256 256"
      fill={props.fill ? props.fill : "currentColor"}
      stroke={props.stroke ? props.stroke : "currentColor"}
      // Disable lint since icon paths are static strings
      // eslint-disable-next-line solid/no-innerhtml
      innerHTML={ICON_PATHS[props.name]}
    />
  );
};

export default Icon;
