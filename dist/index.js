import React, { useState } from 'react';
import { Button, Image, Table, Glyphicon, ButtonToolbar, ButtonGroup, SplitButton, MenuItem, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import { useReactTable, getCoreRowModel, getFilteredRowModel, getSortedRowModel, getPaginationRowModel, getFacetedRowModel, getFacetedUniqueValues, getFacetedMinMaxValues, flexRender } from '@tanstack/react-table';
import ReactSelect from 'react-select';

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
    return (React.createElement(Image, { height: props.height && props.height, width: props.width && props.width, style: props.style && props.style, src: `https://images.evetech.net/characters/${props.character_id}/portrait?size=${props.size}` }));
};
const CorporationLogo = (props) => {
    return (React.createElement(Image, { height: props.height && props.height, width: props.width && props.width, style: props.style && props.style, src: `https://images.evetech.net/corporations/${props.corporation_id}/logo?size=${props.size}` }));
};
const AllianceLogo = (props) => {
    return (React.createElement(Image, { height: props.height && props.height, width: props.width && props.width, style: props.style && props.style, src: `https://images.evetech.net/alliances/${props.alliance_id}/logo?size=${props.size}` }));
};
const TypeIcon = (props) => {
    return (React.createElement(Image, { height: props.height && props.height, width: props.width && props.width, style: props.style && props.style, src: `https://images.evetech.net/types/${props.type_id}/${props.size > 64 ? "render" : "icon"}?size=${props.size}` }));
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

var css_248z$1 = ".Loader_flex-container__3jpWH {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\n.Loader_spinner-size__xNpPl {\n  height: 30px;\n  width: 30px;\n  margin: 200px;\n}\n\n@keyframes Loader_shake__XtkXY {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n\n.Loader_error-anim__NZjVw {\n  animation: Loader_shake__XtkXY 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-iteration-count: infinite;\n}\n\n@keyframes Loader_updown__1Bxle {\n  10%,\n  90% {\n    transform: translate3d(0, -2px, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(0, 2px, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(0, -4px, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(0, 4px, 0);\n  }\n}\n\n.Loader_arrow-anim__c7GZ3 {\n  animation: Loader_updown__1Bxle 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-iteration-count: infinite;\n}\n\n.Loader_lds-dual-ring__lIXz- {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n}\n.Loader_lds-dual-ring__lIXz-:after {\n  content: \" \";\n  display: block;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid #fff;\n  border-color: #fff transparent #fff transparent;\n  animation: Loader_lds-dual-ring__lIXz- 1.2s linear infinite;\n}\n@keyframes Loader_lds-dual-ring__lIXz- {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvYWRlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0U7O0lBRUUsa0NBQWtDO0VBQ3BDOztFQUVBOztJQUVFLGlDQUFpQztFQUNuQzs7RUFFQTs7O0lBR0Usa0NBQWtDO0VBQ3BDOztFQUVBOztJQUVFLGlDQUFpQztFQUNuQztBQUNGOztBQUVBO0VBQ0UsOEVBQWdFO0VBQ2hFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFOztJQUVFLGtDQUFrQztFQUNwQzs7RUFFQTs7SUFFRSxpQ0FBaUM7RUFDbkM7O0VBRUE7OztJQUdFLGtDQUFrQztFQUNwQzs7RUFFQTs7SUFFRSxpQ0FBaUM7RUFDbkM7QUFDRjs7QUFFQTtFQUNFLDRFQUE4RDtFQUM5RCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLCtDQUErQztFQUMvQywyREFBNkM7QUFDL0M7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJMb2FkZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc3Bpbm5lci1zaXplIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luOiAyMDBweDtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDEwJSxcbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xuICB9XG5cbiAgMjAlLFxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcbiAgfVxuXG4gIDMwJSxcbiAgNTAlLFxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XG4gIH1cblxuICA0MCUsXG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xuICB9XG59XG5cbi5lcnJvci1hbmltIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjgycyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgdXBkb3duIHtcbiAgMTAlLFxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTJweCwgMCk7XG4gIH1cblxuICAyMCUsXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAycHgsIDApO1xuICB9XG5cbiAgMzAlLFxuICA1MCUsXG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKTtcbiAgfVxuXG4gIDQwJSxcbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDRweCwgMCk7XG4gIH1cbn1cblxuLmFycm93LWFuaW0ge1xuICBhbmltYXRpb246IHVwZG93biA1cyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5sZHMtZHVhbC1yaW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmxkcy1kdWFsLXJpbmc6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IGxkcy1kdWFsLXJpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */";
styleInject(css_248z$1);

const PanelLoader = (props = { title: "Loading..." }) => {
    return (React.createElement("div", { className: "flex-container" },
        React.createElement("div", { className: "text-center" },
            React.createElement("div", { className: "bottom-text" },
                React.createElement("div", { className: "lds-dual-ring" })),
            React.createElement("h3", null, props.title && props.title),
            React.createElement("p", null, props.message && props.message))));
};
const ErrorLoader = (props = { title: "Error Loading Component" }) => {
    return (React.createElement("div", { className: "flex-container" },
        React.createElement("div", { className: "text-center" },
            React.createElement("div", { className: "bottom-text" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "100", height: "100", fill: "currentColor", className: "bi bi-exclamation-triangle error-anim", viewBox: "0 0 16 16" },
                    React.createElement("path", { d: "M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" }),
                    React.createElement("path", { d: "M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" }))),
            React.createElement("h3", null, props.title && props.title),
            React.createElement("p", null, props.message && props.message),
            React.createElement("p", null))));
};

var css_248z = ".BaseTable_padded-label__1ogST {\n  margin: 5px;\n}\n\n@keyframes BaseTable_spin__bB8I- {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n.BaseTable_glyphicon-refresh-animate__c3PHa {\n  -animation: BaseTable_spin__bB8I- 2s infinite linear;\n  -ms-animation: BaseTable_spin__bB8I- 2s infinite linear;\n  -webkit-animation: BaseTable_spin__bB8I- 2s infinite linear;\n  -moz-animation: BaseTable_spin__bB8I- 2s infinite linear;\n}\n\n.BaseTable_btn-text-colour__kTuNT{\n  color: hsl(0, 0%, 80%) !important;\n}\n\n.BaseTable_filter-btn__-4-xz{\n  color: hsl(0, 0%, 50%) !important;\n  margin-top: 2px !important;\n  min-height: 38px !important;\n  background-color: white !important;\n  border-color: hsl(0, 0%, 80%) !important;\n  border-top-left-radius: 4px !important;\n  border-bottom-left-radius: 4px !important;\n  border-right: 0 !important;\n  border-width: 1px !important;\n  font-weight: bold !important;\n  display: flex !important;\n  font-size: 15px !important;\n  font-family: \"Lato\",\"Helvetica Neue\",Helvetica,Arial,sans-serif !important;\n}\n\n.BaseTable_filter-toggle__o-M28{\n  stroke: hsl(0, 0%, 80%) !important;\n  fill: hsl(0, 0%, 80%) !important;\n  stroke-width: 0;\n  padding-top: 8px !important;\n  margin-top: 2px !important;\n  min-height: 38px !important;\n  background-color: white !important;\n  border-color: hsl(0, 0%, 80%) !important;\n  border-top-right-radius: 4px !important;\n  border-bottom-right-radius: 4px !important;\n  border-left: 0 !important;\n  border-width: 1px !important;\n  display: flex !important;\n  font-size: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhc2VUYWJsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxvREFBbUM7RUFDbkMsdURBQXNDO0VBQ3RDLDJEQUEwQztFQUMxQyx3REFBdUM7QUFDekM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixrQ0FBa0M7RUFDbEMsd0NBQXdDO0VBQ3hDLHNDQUFzQztFQUN0Qyx5Q0FBeUM7RUFDekMsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQiwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixrQ0FBa0M7RUFDbEMsd0NBQXdDO0VBQ3hDLHVDQUF1QztFQUN2QywwQ0FBMEM7RUFDMUMseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6IkJhc2VUYWJsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGVkLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5cbi5nbHlwaGljb24tcmVmcmVzaC1hbmltYXRlIHtcbiAgLWFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XG4gIC1tcy1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XG4gIC1tb3otYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuLmJ0bi10ZXh0LWNvbG91cntcbiAgY29sb3I6IGhzbCgwLCAwJSwgODAlKSAhaW1wb3J0YW50O1xufVxuXG4uZmlsdGVyLWJ0bntcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAycHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IGhzbCgwLCAwJSwgODAlKSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMCAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5maWx0ZXItdG9nZ2xle1xuICBzdHJva2U6IGhzbCgwLCAwJSwgODAlKSAhaW1wb3J0YW50O1xuICBmaWxsOiBoc2woMCwgMCUsIDgwJSkgIWltcG9ydGFudDtcbiAgc3Ryb2tlLXdpZHRoOiAwO1xuICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogaHNsKDAsIDAlLCA4MCUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogMCAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufSJdfQ== */";
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
    return React.createElement(Tooltip, { id: "character_tooltip" }, message);
}
const BaseTable = ({ isLoading, isFetching, debugTable, data, error, columns, asyncExpandFunction, initialState = {}, }) => {
    if (isLoading)
        return React.createElement(PanelLoader, { title: "Loading Data", message: "Please Wait" });
    if (error)
        return (React.createElement(ErrorLoader, { title: "Error Loading from API", message: "Try Again Later" }));
    return (React.createElement(_baseTable, { ...{
            data,
            columns,
            isFetching,
            debugTable,
            initialState,
        } }));
};
function _baseTable({ data, columns, isFetching, debugTable = false, initialState = {}, }) {
    const table = useReactTable({
        data,
        columns,
        // Pipeline
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        //
        debugTable: debugTable,
        state: initialState,
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(Table, null,
            React.createElement("thead", null, table.getHeaderGroups().map((headerGroup) => (React.createElement(React.Fragment, null,
                React.createElement("tr", { key: `name-${headerGroup.id}` }, headerGroup.headers.map((header) => {
                    return (React.createElement("th", { key: header.id, colSpan: header.colSpan }, header.isPlaceholder ? null : (React.createElement("div", { ...{
                            className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                            onClick: header.column.getToggleSortingHandler(),
                        } },
                        flexRender(header.column.columnDef.header, header.getContext()),
                        header.column.getCanSort() ? (React.createElement(React.Fragment, null, {
                            asc: (React.createElement(Glyphicon, { className: "pull-right", glyph: "sort-by-attributes" })),
                            desc: (React.createElement(Glyphicon, { className: "pull-right", glyph: "sort-by-attributes-alt" })),
                        }[header.column.getIsSorted()] ?? (React.createElement(Glyphicon, { className: "pull-right", glyph: "sort" })))) : null))));
                })),
                React.createElement("tr", { key: `filter-${headerGroup.id}` }, headerGroup.headers.map((header) => {
                    return (React.createElement("th", { key: header.id, colSpan: header.colSpan }, header.column.getCanFilter() ? (React.createElement("div", null,
                        React.createElement(Filter, { column: header.column, table: table }))) : ("")));
                })))))),
            React.createElement("tbody", null, table.getRowModel().rows.map((row) => {
                return (React.createElement("tr", { key: row.id }, row.getVisibleCells().map((cell) => {
                    return (React.createElement("td", { key: cell.id }, flexRender(cell.column.columnDef.cell, cell.getContext())));
                })));
            }))),
        React.createElement("div", { className: "pagination pull-right" },
            React.createElement(ButtonToolbar, null,
                React.createElement(ButtonGroup, null,
                    React.createElement(Button, { bsStyle: "success", onClick: () => table.setPageIndex(0), disabled: !table.getCanPreviousPage() },
                        React.createElement(Glyphicon, { glyph: "step-backward" })),
                    " ",
                    React.createElement(Button, { bsStyle: "success", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage() },
                        React.createElement(Glyphicon, { glyph: "triangle-left" })),
                    " ",
                    React.createElement(Button, { bsStyle: "success", onClick: () => table.nextPage(), disabled: !table.getCanNextPage() },
                        React.createElement(Glyphicon, { glyph: "triangle-right" })),
                    " ",
                    React.createElement(Button, { bsStyle: "success", onClick: () => table.setPageIndex(table.getPageCount() - 1), disabled: !table.getCanNextPage() },
                        React.createElement(Glyphicon, { glyph: "step-forward" }))),
                React.createElement(ButtonGroup, null,
                    React.createElement(Button, { active: true, bsStyle: "success" }, "Page Size:"),
                    " ",
                    React.createElement(SplitButton, { id: "pageSizeDropdown", bsStyle: "success", title: table.getState().pagination.pageSize }, [10, 50, 100, 1000000].map((_pageSize) => (React.createElement(MenuItem, { id: _pageSize, key: _pageSize, eventKey: _pageSize, value: _pageSize, onSelect: (eventKey, event) => {
                            table.setPageSize(Number(eventKey));
                        } },
                        "Show ",
                        _pageSize))))))),
        React.createElement("div", { className: "pagination pull-left" },
            React.createElement(ButtonGroup, null,
                React.createElement(Button, { active: true, bsStyle: "info" }, React.createElement(React.Fragment, null,
                    table.getState().pagination.pageIndex + 1,
                    " of",
                    " ",
                    table.getPageCount())),
                " ",
                isFetching ? (React.createElement(OverlayTrigger, { placement: "bottom", trigger: "focus", overlay: MyTooltip({ message: "Refreshing Data" }) },
                    React.createElement(Button, { bsStyle: "info" },
                        React.createElement(Glyphicon, { className: "glyphicon-refresh-animate", glyph: "refresh" })))) : (React.createElement(OverlayTrigger, { placement: "bottom", trigger: "focus", overlay: MyTooltip("Data Loaded: " + new Date().toLocaleString()) },
                    React.createElement(Button, { bsStyle: "info" },
                        React.createElement(Glyphicon, { glyph: "ok" })))))),
        debugTable && (React.createElement("div", { className: "col-xs-12" },
            React.createElement("div", null,
                table.getRowModel().rows.length,
                " Rows"),
            React.createElement("pre", null, JSON.stringify(table.getState(), null, 2))))));
}
function Filter({ column, table, }) {
    const [input, setInput] = useState("");
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id);
    const sortedUniqueValues = React.useMemo(() => typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(), [column.getFacetedUniqueValues(), firstValue]);
    const selectOptions = sortedUniqueValues
        .slice(0, 50)
        .reduce((previousValue, currentValue) => {
        previousValue.push({ value: currentValue, label: currentValue });
        return previousValue;
    }, []);
    const columnFilterValue = column.getFilterValue();
    const popoverNumber = (React.createElement(Popover, { id: "popover-positioned-top" },
        React.createElement("input", { type: "number", value: columnFilterValue?.[0] ?? "", onChange: (e) => column.setFilterValue((old) => [
                e.target.value,
                old?.[1],
            ]), placeholder: `Min`, className: "form-control" }),
        React.createElement("p", { className: "text-center" }, "to"),
        React.createElement("input", { type: "number", value: columnFilterValue?.[1] ?? "", onChange: (e) => column.setFilterValue((old) => [
                old?.[0],
                e.target.value,
            ]), placeholder: `Max`, className: "form-control" })));
    return typeof firstValue === "number" ? (React.createElement(OverlayTrigger, { trigger: "click", placement: "bottom", overlay: popoverNumber },
        React.createElement(ButtonGroup, { style: { display: "flex" } },
            React.createElement(Button, { className: "filter-btn", bsStyle: "primary", bsSize: "small" }, `Range`),
            React.createElement(Button, { className: "filter-toggle", bsStyle: "primary", bsSize: "small" },
                React.createElement("svg", { height: "20", width: "20", viewBox: "0 0 20 20", "aria-hidden": "true", focusable: "false" },
                    React.createElement("path", { d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" })))))) : (React.createElement(ReactSelect, { styles: colourStyles, type: "text", isClearable: true, onChange: (value, action) => {
            setInput("");
            column.setFilterValue(value ? value.value : "");
        }, inputValue: input, onInputChange: (value, action) => {
            if (action.action === "input-change") {
                setInput(value);
                column.setFilterValue(value);
            }
        }, placeholder: `Search...`, className: "", options: selectOptions }));
}

export { AllianceLogo, BaseTable, CharacterPortrait, CorporationLogo, EveWhoButton, TypeIcon, ZKillButton };
//# sourceMappingURL=index.js.map
