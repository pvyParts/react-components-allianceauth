import React from "react";
import { Button } from "react-bootstrap";

interface ZKillButtonProps extends Partial<HTMLElement> {
  character_name?: string;
}

function ZKillButton(props: ZKillButtonProps): JSX.Element {
  return (
    <Button
      target="_blank"
      rel="noopener noreferrer"
      disabled={props.character_name ? false : true}
      alt="zKillboard"
      href={`https://zkillboard.com/search/${props.character_name}/`}
    >
      <span
        class="fa-stack fas"
        style={{ lineHeight: "1em", height: "1em", width: "1em" }}
      >
        <i class="fas fa-sort-down"></i>
        <i class="fas fa-minus fa-stack-1x" style={{ top: "-3px" }}></i>
      </span>
    </Button>
  );
}

export default ZKillButton;
