(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-bootstrap')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-bootstrap'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.rclb = {}, global.React, global.reactBootstrap));
})(this, (function (exports, React, reactBootstrap) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    function ZKillButton(props) {
        return (React__default["default"].createElement(reactBootstrap.Button, { target: "_blank", rel: "noopener noreferrer", alt: "zKillboard", href: `https://zkillboard.com/search/${props.character_name}/` },
            React__default["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "13.5", width: "15", viewBox: "0 0 32 21" },
                React__default["default"].createElement("polygon", { points: "1,7 31,7 16,21", style: {
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: 2,
                    } }),
                React__default["default"].createElement("polygon", { points: "1,2 31,2", style: {
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: 2,
                    } }))));
    }

    function EveWhoButton(props) {
        return (React__default["default"].createElement(reactBootstrap.Button, { target: "_blank", rel: "noopener noreferrer", alt: "Eve Who", href: `https://evewho.com/character/${props.character_id}/` },
            React__default["default"].createElement("i", { className: "fas fa-user" })));
    }

    exports.EveWhoButton = EveWhoButton;
    exports.ZKillButton = ZKillButton;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=rclb.js.map
