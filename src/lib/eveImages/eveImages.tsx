import React from "react";
import { Image } from "react-bootstrap";

type Sizes = 32 | 64 | 128 | 256 | 512;

export interface CharacterPortraitProps extends Partial<HTMLElement> {
  character_id?: number;
  size: Sizes;
}

export const CharacterPortrait = (props: CharacterPortraitProps) => {
  return (
    <Image
      src={`https://images.evetech.net/characters/${props.character_id}/portrait?size=${props.size}`}
    />
  );
};

export interface CorporationLogoProps extends Partial<HTMLElement> {
  corporation_id?: number;
  size: Sizes;
}

export const CorporationLogo = (props: CorporationLogoProps) => {
  return (
    <Image
      src={`https://images.evetech.net/corporations/${props.corporation_id}/logo?size=${props.size}`}
    />
  );
};

export interface AllianceLogoProps extends Partial<HTMLElement> {
  alliance_id?: number;
  size: Sizes;
}

export const AllianceLogo = (props: AllianceLogoProps) => {
  return (
    <Image
      src={`https://images.evetech.net/alliances/${props.alliance_id}/logo?size=${props.size}`}
    />
  );
};

export interface TypeIconProps extends Partial<HTMLElement> {
  type_id?: number;
  size: Sizes;
}

export const TypeIcon = (props: TypeIconProps) => {
  return (
    <Image
      src={`https://images.evetech.net/types/${props.type_id}/${
        props.size > 64 ? "render" : "icon"
      }?size=${props.size}`}
    />
  );
};
