/// <reference types="react" />
declare type Sizes = 32 | 64 | 128 | 256 | 512;
export interface CharacterPortraitProps extends Partial<HTMLElement> {
    "character_id"?: number;
    "size": Sizes;
}
export declare const CharacterPortrait: (props: CharacterPortraitProps) => JSX.Element;
export interface CorporationLogoProps extends Partial<HTMLElement> {
    "corporation_id"?: number;
    "size": Sizes;
}
export declare const CorporationLogo: (props: CorporationLogoProps) => JSX.Element;
export interface AllianceLogoProps extends Partial<HTMLElement> {
    "alliance_id"?: number;
    "size": Sizes;
}
export declare const AllianceLogo: (props: AllianceLogoProps) => JSX.Element;
export interface TypeIconProps extends Partial<HTMLElement> {
    "type_id"?: number;
    "size": Sizes;
}
export declare const TypeIcon: (props: TypeIconProps) => JSX.Element;
export {};
//# sourceMappingURL=eveImages.d.ts.map