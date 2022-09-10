import React from "react";
import { Button } from "react-bootstrap";

interface EveWhoButtonProps extends Partial<HTMLElement>{
  "character_id"?: number;
}


function EveWhoButton (props: EveWhoButtonProps ) {
  return (
    <Button
      target="_blank"
      rel="noopener noreferrer"
      alt="Eve Who"
      href={`https://evewho.com/character/${props.character_id}/`}
    >
      <i className="fas fa-user"></i>
    </Button>
  );
};

export default EveWhoButton