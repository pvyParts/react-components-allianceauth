import React from 'react';
import { Button } from 'react-bootstrap';

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

export { EveWhoButton, ZKillButton };
//# sourceMappingURL=index.js.map
