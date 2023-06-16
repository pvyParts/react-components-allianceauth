import React from "react";
type Sizes = 32 | 64 | 128 | 256 | 512;
export interface CharacterPortraitProps extends Partial<HTMLElement> {
    character_id?: number;
    size: Sizes;
    height?: number;
    width?: number;
}
export declare const CharacterPortrait: (props: CharacterPortraitProps) => React.JSX.Element;
export interface CorporationLogoProps extends Partial<HTMLElement> {
    corporation_id?: number;
    size: Sizes;
    height?: number;
    width?: number;
}
export declare const CorporationLogo: (props: CorporationLogoProps) => React.JSX.Element;
export interface AllianceLogoProps extends Partial<HTMLElement> {
    alliance_id?: number;
    size: Sizes;
    height?: number;
    width?: number;
}
export declare const AllianceLogo: (props: AllianceLogoProps) => React.JSX.Element;
export interface TypeIconProps extends Partial<HTMLElement> {
    type_id?: number;
    size: Sizes;
    height?: number;
    width?: number;
}
export declare const TypeIcon: (props: TypeIconProps) => React.JSX.Element;
export interface PortraitProps extends Partial<HTMLElement> {
    character: {
        character_id: number;
        corporation_id: number;
        alliance_id?: number;
        faction_id?: number;
    };
    size: number;
    rounded_images?: boolean;
}
export declare const CharacterAllegiancePortrait: (props: PortraitProps) => React.JSX.Element;
export default CharacterPortrait;
//# sourceMappingURL=eveImages.d.ts.map