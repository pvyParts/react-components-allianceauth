(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-bootstrap'), require('@tanstack/react-table'), require('react-select')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-bootstrap', '@tanstack/react-table', 'react-select'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.rclb = {}, global.React, global.reactBootstrap, global.reactTable, global.ReactSelect));
})(this, (function (exports, React, reactBootstrap, reactTable, ReactSelect) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactSelect__default = /*#__PURE__*/_interopDefaultLegacy(ReactSelect);

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

    const CharacterPortrait = (props) => {
        return (React__default["default"].createElement(reactBootstrap.Image, { height: props.height && props.height, width: props.width && props.width, style: props.style && props.style, src: `https://images.evetech.net/characters/${props.character_id}/portrait?size=${props.size}` }));
    };
    const CorporationLogo = (props) => {
        return (React__default["default"].createElement(reactBootstrap.Image, { height: props.height && props.height, width: props.width && props.width, style: props.style && props.style, src: `https://images.evetech.net/corporations/${props.corporation_id}/logo?size=${props.size}` }));
    };
    const AllianceLogo = (props) => {
        return (React__default["default"].createElement(reactBootstrap.Image, { height: props.height && props.height, width: props.width && props.width, style: props.style && props.style, src: `https://images.evetech.net/alliances/${props.alliance_id}/logo?size=${props.size}` }));
    };
    const TypeIcon = (props) => {
        return (React__default["default"].createElement(reactBootstrap.Image, { height: props.height && props.height, width: props.width && props.width, style: props.style && props.style, src: `https://images.evetech.net/types/${props.type_id}/${props.size > 64 ? "render" : "icon"}?size=${props.size}` }));
    };

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z$1 = ".Loader-module_flexContainer__GlMdi {\n  margin-top: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\n@keyframes Loader-module_shake__1mapc {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n\n.Loader-module_errorAnim__h3bUy {\n  animation: Loader-module_shake__1mapc 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-iteration-count: infinite;\n}\n\n.Loader-module_ldsDualRing__EJnqD {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n}\n.Loader-module_ldsDualRing__EJnqD:after {\n  content: \" \";\n  display: block;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid #fff;\n  border-color: #fff transparent #fff transparent;\n  animation: Loader-module_lds-dual-ring__4SWmn 1.2s linear infinite;\n}\n@keyframes Loader-module_lds-dual-ring__4SWmn {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvYWRlci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7O0lBRUUsa0NBQWtDO0VBQ3BDOztFQUVBOztJQUVFLGlDQUFpQztFQUNuQzs7RUFFQTs7O0lBR0Usa0NBQWtDO0VBQ3BDOztFQUVBOztJQUVFLGlDQUFpQztFQUNuQztBQUNGOztBQUVBO0VBQ0UscUZBQWdFO0VBQ2hFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsK0NBQStDO0VBQy9DLGtFQUE2QztBQUMvQztBQUNBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6IkxvYWRlci5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhDb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMTAlLFxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gIH1cblxuICAyMCUsXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICB9XG5cbiAgMzAlLFxuICA1MCUsXG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcbiAgfVxuXG4gIDQwJSxcbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XG4gIH1cbn1cblxuLmVycm9yQW5pbSB7XG4gIGFuaW1hdGlvbjogc2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4ubGRzRHVhbFJpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubGRzRHVhbFJpbmc6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IGxkcy1kdWFsLXJpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */";
    var styles = {"flexContainer":"Loader-module_flexContainer__GlMdi","errorAnim":"Loader-module_errorAnim__h3bUy","shake":"Loader-module_shake__1mapc","ldsDualRing":"Loader-module_ldsDualRing__EJnqD","lds-dual-ring":"Loader-module_lds-dual-ring__4SWmn"};
    styleInject(css_248z$1);

    const PanelLoader = (props = { title: "Loading..." }) => {
        return (React__default["default"].createElement("div", { className: styles.flexContainer },
            React__default["default"].createElement("div", { className: "text-center" },
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement("div", { className: styles.ldsDualRing })),
                React__default["default"].createElement("h3", null, props.title && props.title),
                React__default["default"].createElement("p", null, props.message && props.message))));
    };
    const ErrorLoader = (props = { title: "Error Loading Component" }) => {
        return (React__default["default"].createElement("div", { className: styles.flexContainer },
            React__default["default"].createElement("div", { className: "text-center" },
                React__default["default"].createElement("div", { className: styles.errorAnim },
                    React__default["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "100", height: "100", fill: "currentColor", className: "bi bi-exclamation-triangle", viewBox: "0 0 16 16" },
                        React__default["default"].createElement("path", { d: "M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" }),
                        React__default["default"].createElement("path", { d: "M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" }))),
                React__default["default"].createElement("h3", null, props.title && props.title),
                React__default["default"].createElement("p", null, props.message && props.message),
                React__default["default"].createElement("p", null))));
    };

    var css_248z = "@keyframes BaseTable-module_spin__lpdYb {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n.BaseTable-module_glyphiconRefreshAnimate__HIIZm {\n  -animation: BaseTable-module_spin__lpdYb 2s infinite linear;\n  -ms-animation: BaseTable-module_spin__lpdYb 2s infinite linear;\n  -webkit-animation: BaseTable-module_spin__lpdYb 2s infinite linear;\n  -moz-animation: BaseTable-module_spin__lpdYb 2s infinite linear;\n}\n\n.BaseTable-module_filterBtn__ODmli{\n  color: hsl(0, 0%, 50%) !important;\n  margin-top: 2px !important;\n  min-height: 38px !important;\n  background-color: white !important;\n  border-color: hsl(0, 0%, 80%) !important;\n  border-top-left-radius: 4px !important;\n  border-bottom-left-radius: 4px !important;\n  border-right: 0 !important;\n  border-width: 1px !important;\n  font-weight: bold !important;\n  display: flex !important;\n  font-size: 15px !important;\n  font-family: \"Lato\",\"Helvetica Neue\",Helvetica,Arial,sans-serif !important;\n}\n\n.BaseTable-module_filterToggle__tmPmV{\n  stroke: hsl(0, 0%, 80%) !important;\n  fill: hsl(0, 0%, 80%) !important;\n  stroke-width: 0;\n  padding-top: 8px !important;\n  margin-top: 2px !important;\n  min-height: 38px !important;\n  background-color: white !important;\n  border-color: hsl(0, 0%, 80%) !important;\n  border-top-right-radius: 4px !important;\n  border-bottom-right-radius: 4px !important;\n  border-left: 0 !important;\n  border-width: 1px !important;\n  display: flex !important;\n  font-size: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhc2VUYWJsZS5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UsMkRBQW1DO0VBQ25DLDhEQUFzQztFQUN0QyxrRUFBMEM7RUFDMUMsK0RBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0Isa0NBQWtDO0VBQ2xDLHdDQUF3QztFQUN4QyxzQ0FBc0M7RUFDdEMseUNBQXlDO0VBQ3pDLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsMEVBQTBFO0FBQzVFOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0Isa0NBQWtDO0VBQ2xDLHdDQUF3QztFQUN4Qyx1Q0FBdUM7RUFDdkMsMENBQTBDO0VBQzFDLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJCYXNlVGFibGUubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5cbi5nbHlwaGljb25SZWZyZXNoQW5pbWF0ZSB7XG4gIC1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xuICAtbXMtYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xuICAtbW96LWFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5maWx0ZXJCdG57XG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMnB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiBoc2woMCwgMCUsIDgwJSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4uZmlsdGVyVG9nZ2xle1xuICBzdHJva2U6IGhzbCgwLCAwJSwgODAlKSAhaW1wb3J0YW50O1xuICBmaWxsOiBoc2woMCwgMCUsIDgwJSkgIWltcG9ydGFudDtcbiAgc3Ryb2tlLXdpZHRoOiAwO1xuICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogaHNsKDAsIDAlLCA4MCUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogMCAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    var tableStyles = {"glyphiconRefreshAnimate":"BaseTable-module_glyphiconRefreshAnimate__HIIZm","spin":"BaseTable-module_spin__lpdYb","filterBtn":"BaseTable-module_filterBtn__ODmli","filterToggle":"BaseTable-module_filterToggle__tmPmV"};
    styleInject(css_248z);

    const colourStyles = {
        option: (styles) => {
            return {
                ...styles,
                color: "black",
            };
        },
    };

    function MyTooltip(message) {
        return React__default["default"].createElement(reactBootstrap.Tooltip, { id: "character_tooltip" }, message);
    }
    const BaseTable = ({ isLoading, isFetching, debugTable, data, error, columns, asyncExpandFunction, initialState = {}, }) => {
        if (isLoading)
            return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("hr", null),
                React__default["default"].createElement(PanelLoader, { title: "Loading Data", message: "Please Wait" })));
        if (error)
            return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("hr", null),
                React__default["default"].createElement(ErrorLoader, { title: "Error Loading from API", message: "Try Again Later" })));
        return (React__default["default"].createElement(_baseTable, { ...{
                data,
                columns,
                isFetching,
                debugTable,
                initialState,
            } }));
    };
    function _baseTable({ data, columns, isFetching, debugTable = false, initialState = {}, }) {
        const table = reactTable.useReactTable({
            data,
            columns,
            // Pipeline
            getCoreRowModel: reactTable.getCoreRowModel(),
            getFilteredRowModel: reactTable.getFilteredRowModel(),
            getSortedRowModel: reactTable.getSortedRowModel(),
            getPaginationRowModel: reactTable.getPaginationRowModel(),
            getFacetedRowModel: reactTable.getFacetedRowModel(),
            getFacetedUniqueValues: reactTable.getFacetedUniqueValues(),
            getFacetedMinMaxValues: reactTable.getFacetedMinMaxValues(),
            //
            debugTable: debugTable,
            state: initialState,
        });
        return (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(reactBootstrap.Table, null,
                React__default["default"].createElement("thead", null, table.getHeaderGroups().map((headerGroup) => (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement("tr", { key: `name-${headerGroup.id}` }, headerGroup.headers.map((header) => {
                        return (React__default["default"].createElement("th", { key: header.id, colSpan: header.colSpan }, header.isPlaceholder ? null : (React__default["default"].createElement("div", { ...{
                                className: header.column.getCanSort()
                                    ? "cursor-pointer select-none"
                                    : "",
                                onClick: header.column.getToggleSortingHandler(),
                            } },
                            reactTable.flexRender(header.column.columnDef.header, header.getContext()),
                            header.column.getCanSort() ? (React__default["default"].createElement(React__default["default"].Fragment, null, {
                                asc: (React__default["default"].createElement(reactBootstrap.Glyphicon, { className: "pull-right", glyph: "sort-by-attributes" })),
                                desc: (React__default["default"].createElement(reactBootstrap.Glyphicon, { className: "pull-right", glyph: "sort-by-attributes-alt" })),
                            }[header.column.getIsSorted()] ?? (React__default["default"].createElement(reactBootstrap.Glyphicon, { className: "pull-right", glyph: "sort" })))) : null))));
                    })),
                    React__default["default"].createElement("tr", { key: `filter-${headerGroup.id}` }, headerGroup.headers.map((header) => {
                        return (React__default["default"].createElement("th", { key: header.id, colSpan: header.colSpan }, header.column.getCanFilter() ? (React__default["default"].createElement("div", null,
                            React__default["default"].createElement(Filter, { column: header.column, table: table }))) : ("")));
                    })))))),
                React__default["default"].createElement("tbody", null, table.getRowModel().rows.map((row) => {
                    return (React__default["default"].createElement("tr", { key: row.id }, row.getVisibleCells().map((cell) => {
                        return (React__default["default"].createElement("td", { key: cell.id }, reactTable.flexRender(cell.column.columnDef.cell, cell.getContext())));
                    })));
                }))),
            React__default["default"].createElement("div", { className: "pagination pull-right" },
                React__default["default"].createElement(reactBootstrap.ButtonToolbar, null,
                    React__default["default"].createElement(reactBootstrap.ButtonGroup, null,
                        React__default["default"].createElement(reactBootstrap.Button, { bsStyle: "success", onClick: () => table.setPageIndex(0), disabled: !table.getCanPreviousPage() },
                            React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "step-backward" })),
                        " ",
                        React__default["default"].createElement(reactBootstrap.Button, { bsStyle: "success", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage() },
                            React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "triangle-left" })),
                        " ",
                        React__default["default"].createElement(reactBootstrap.Button, { bsStyle: "success", onClick: () => table.nextPage(), disabled: !table.getCanNextPage() },
                            React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "triangle-right" })),
                        " ",
                        React__default["default"].createElement(reactBootstrap.Button, { bsStyle: "success", onClick: () => table.setPageIndex(table.getPageCount() - 1), disabled: !table.getCanNextPage() },
                            React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "step-forward" }))),
                    React__default["default"].createElement(reactBootstrap.ButtonGroup, null,
                        React__default["default"].createElement(reactBootstrap.Button, { active: true, bsStyle: "success" }, "Page Size:"),
                        " ",
                        React__default["default"].createElement(reactBootstrap.SplitButton, { id: "pageSizeDropdown", bsStyle: "success", title: table.getState().pagination.pageSize }, [10, 50, 100, 1000000].map((_pageSize) => (React__default["default"].createElement(reactBootstrap.MenuItem, { id: _pageSize, key: _pageSize, eventKey: _pageSize, value: _pageSize, onSelect: (eventKey, event) => {
                                table.setPageSize(Number(eventKey));
                            } },
                            "Show ",
                            _pageSize))))))),
            React__default["default"].createElement("div", { className: "pagination pull-left" },
                React__default["default"].createElement(reactBootstrap.ButtonGroup, null,
                    React__default["default"].createElement(reactBootstrap.Button, { active: true, bsStyle: "info" }, React__default["default"].createElement(React__default["default"].Fragment, null,
                        table.getState().pagination.pageIndex + 1,
                        " of",
                        " ",
                        table.getPageCount())),
                    " ",
                    isFetching ? (React__default["default"].createElement(reactBootstrap.OverlayTrigger, { placement: "bottom", trigger: "focus", overlay: MyTooltip({ message: "Refreshing Data" }) },
                        React__default["default"].createElement(reactBootstrap.Button, { bsStyle: "info" },
                            React__default["default"].createElement(reactBootstrap.Glyphicon, { className: tableStyles.glyphiconRefreshAnimate, glyph: "refresh" })))) : (React__default["default"].createElement(reactBootstrap.OverlayTrigger, { placement: "bottom", trigger: "focus", overlay: MyTooltip("Data Loaded: " + new Date().toLocaleString()) },
                        React__default["default"].createElement(reactBootstrap.Button, { bsStyle: "info" },
                            React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "ok" })))))),
            debugTable && (React__default["default"].createElement("div", { className: "col-xs-12" },
                React__default["default"].createElement("div", null,
                    table.getRowModel().rows.length,
                    " Rows"),
                React__default["default"].createElement("pre", null, JSON.stringify(table.getState(), null, 2))))));
    }
    function Filter({ column, table, }) {
        const [input, setInput] = React.useState("");
        const firstValue = table
            .getPreFilteredRowModel()
            .flatRows[0]?.getValue(column.id);
        const sortedUniqueValues = React__default["default"].useMemo(() => typeof firstValue === "number"
            ? []
            : Array.from(column.getFacetedUniqueValues().keys()).sort(), [column.getFacetedUniqueValues(), firstValue]);
        const selectOptions = sortedUniqueValues
            .slice(0, 50)
            .reduce((previousValue, currentValue) => {
            previousValue.push({ value: currentValue, label: currentValue });
            return previousValue;
        }, []);
        const columnFilterValue = column.getFilterValue();
        const popoverNumber = (React__default["default"].createElement(reactBootstrap.Popover, { id: "popover-positioned-top" },
            React__default["default"].createElement("input", { type: "number", value: columnFilterValue?.[0] ?? "", onChange: (e) => column.setFilterValue((old) => [
                    e.target.value,
                    old?.[1],
                ]), placeholder: `Min`, className: "form-control" }),
            React__default["default"].createElement("p", { className: "text-center" }, "to"),
            React__default["default"].createElement("input", { type: "number", value: columnFilterValue?.[1] ?? "", onChange: (e) => column.setFilterValue((old) => [
                    old?.[0],
                    e.target.value,
                ]), placeholder: `Max`, className: "form-control" })));
        return typeof firstValue === "number" ? (React__default["default"].createElement(reactBootstrap.OverlayTrigger, { trigger: "click", placement: "bottom", overlay: popoverNumber },
            React__default["default"].createElement(reactBootstrap.ButtonGroup, { style: { display: "flex" } },
                React__default["default"].createElement(reactBootstrap.Button, { className: tableStyles.filterBtn, bsStyle: "primary", bsSize: "small" }, `Range`),
                React__default["default"].createElement(reactBootstrap.Button, { className: tableStyles.filterToggle, bsStyle: "primary", bsSize: "small" },
                    React__default["default"].createElement("svg", { height: "20", width: "20", viewBox: "0 0 20 20", "aria-hidden": "true", focusable: "false" },
                        React__default["default"].createElement("path", { d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" })))))) : (React__default["default"].createElement(ReactSelect__default["default"], { styles: colourStyles, type: "text", isClearable: true, onChange: (value, action) => {
                setInput("");
                column.setFilterValue(value ? value.value : "");
            }, inputValue: input, onInputChange: (value, action) => {
                if (action.action === "input-change") {
                    setInput(value);
                    column.setFilterValue(value);
                }
            }, placeholder: `Search...`, className: "", options: selectOptions }));
    }

    exports.AllianceLogo = AllianceLogo;
    exports.BaseTable = BaseTable;
    exports.CharacterPortrait = CharacterPortrait;
    exports.CorporationLogo = CorporationLogo;
    exports.EveWhoButton = EveWhoButton;
    exports.TypeIcon = TypeIcon;
    exports.ZKillButton = ZKillButton;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=rclb.js.map
