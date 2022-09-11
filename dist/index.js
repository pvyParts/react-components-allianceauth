import React from 'react';
import { Button, Image } from 'react-bootstrap';

function ZKillButton(props) {
    return (React.createElement(Button, { target: "_blank", rel: "noopener noreferrer", alt: "zKillboard", href: `https://zkillboard.com/search/${props.character_name}/` },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "13.5", width: "15", viewBox: "0 0 32 21" },
            React.createElement("polygon", { points: "1,7 31,7 16,21", style: {
                    fill: "currentColor",
                    stroke: "currentColor",
                    strokeWidth: 2,
                } }),
            React.createElement("polygon", { points: "1,2 31,2", style: {
                    fill: "currentColor",
                    stroke: "currentColor",
                    strokeWidth: 2,
                } }))));
}

function EveWhoButton(props) {
    return (React.createElement(Button, { target: "_blank", rel: "noopener noreferrer", alt: "Eve Who", href: `https://evewho.com/character/${props.character_id}/` },
        React.createElement("i", { className: "fas fa-user" })));
}

const CharacterPortrait = (props) => {
    return (React.createElement(Image, { src: `https://images.evetech.net/characters/${props.character_id}/portrait?size=${props.size}` }));
};
const CorporationLogo = (props) => {
    return (React.createElement(Image, { src: `https://images.evetech.net/corporations/${props.corporation_id}/logo?size=${props.size}` }));
};
const AllianceLogo = (props) => {
    return (React.createElement(Image, { src: `https://images.evetech.net/alliances/${props.alliance_id}/logo?size=${props.size}` }));
};
const TypeIcon = (props) => {
    return (React.createElement(Image, { src: `https://images.evetech.net/types/${props.type_id}/${props.size > 64 ? "render" : "icon"}?size=${props.size}` }));
};

export { AllianceLogo, CharacterPortrait, CorporationLogo, EveWhoButton, TypeIcon, ZKillButton };
//# sourceMappingURL=index.js.map
