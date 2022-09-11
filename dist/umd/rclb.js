(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-bootstrap'), require('react-table'), require('react-select')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-bootstrap', 'react-table', 'react-select'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.rclb = {}, global.React, global.reactBootstrap, global.reactTable, global.Select));
})(this, (function (exports, React, reactBootstrap, reactTable, Select) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);

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

    var css_248z$1 = ".Loader_flex-container__1Xl3U {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\n.Loader_spinner-size__vW5Ew {\n  height: 30px;\n  width: 30px;\n  margin: 200px;\n}\n\n@keyframes Loader_shake__14AEh {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n\n.Loader_error-anim__2JL9a {\n  animation: Loader_shake__14AEh 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-iteration-count: infinite;\n}\n\n@keyframes Loader_updown__3sxIj {\n  10%,\n  90% {\n    transform: translate3d(0, -2px, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(0, 2px, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(0, -4px, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(0, 4px, 0);\n  }\n}\n\n.Loader_arrow-anim__NKGze {\n  animation: Loader_updown__3sxIj 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-iteration-count: infinite;\n}\n\n.Loader_lds-dual-ring__3Y0gx {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n}\n.Loader_lds-dual-ring__3Y0gx:after {\n  content: \" \";\n  display: block;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid #fff;\n  border-color: #fff transparent #fff transparent;\n  animation: Loader_lds-dual-ring__3Y0gx 1.2s linear infinite;\n}\n@keyframes Loader_lds-dual-ring__3Y0gx {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvYWRlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0U7O0lBRUUsa0NBQWtDO0VBQ3BDOztFQUVBOztJQUVFLGlDQUFpQztFQUNuQzs7RUFFQTs7O0lBR0Usa0NBQWtDO0VBQ3BDOztFQUVBOztJQUVFLGlDQUFpQztFQUNuQztBQUNGOztBQUVBO0VBQ0UsOEVBQWdFO0VBQ2hFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFOztJQUVFLGtDQUFrQztFQUNwQzs7RUFFQTs7SUFFRSxpQ0FBaUM7RUFDbkM7O0VBRUE7OztJQUdFLGtDQUFrQztFQUNwQzs7RUFFQTs7SUFFRSxpQ0FBaUM7RUFDbkM7QUFDRjs7QUFFQTtFQUNFLDRFQUE4RDtFQUM5RCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLCtDQUErQztFQUMvQywyREFBNkM7QUFDL0M7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJMb2FkZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc3Bpbm5lci1zaXplIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luOiAyMDBweDtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDEwJSxcbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xuICB9XG5cbiAgMjAlLFxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcbiAgfVxuXG4gIDMwJSxcbiAgNTAlLFxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XG4gIH1cblxuICA0MCUsXG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xuICB9XG59XG5cbi5lcnJvci1hbmltIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjgycyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgdXBkb3duIHtcbiAgMTAlLFxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTJweCwgMCk7XG4gIH1cblxuICAyMCUsXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAycHgsIDApO1xuICB9XG5cbiAgMzAlLFxuICA1MCUsXG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKTtcbiAgfVxuXG4gIDQwJSxcbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDRweCwgMCk7XG4gIH1cbn1cblxuLmFycm93LWFuaW0ge1xuICBhbmltYXRpb246IHVwZG93biA1cyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5sZHMtZHVhbC1yaW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmxkcy1kdWFsLXJpbmc6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IGxkcy1kdWFsLXJpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */";
    styleInject(css_248z$1);

    const PanelLoader = (props = { title: "Loading..." }) => {
        return (React__default["default"].createElement("div", { className: "flex-container" },
            React__default["default"].createElement("div", { className: "text-center" },
                React__default["default"].createElement("div", { className: "bottom-text" },
                    React__default["default"].createElement("div", { className: "lds-dual-ring" })),
                React__default["default"].createElement("h3", null, props.title && props.title),
                React__default["default"].createElement("p", null, props.message && props.message))));
    };
    const ErrorLoader = (props = { title: "Error Loading Component" }) => {
        return (React__default["default"].createElement("div", { className: "flex-container" },
            React__default["default"].createElement("div", { className: "text-center" },
                React__default["default"].createElement("div", { className: "bottom-text" },
                    React__default["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "100", height: "100", fill: "currentColor", className: "bi bi-exclamation-triangle error-anim", viewBox: "0 0 16 16" },
                        React__default["default"].createElement("path", { d: "M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" }),
                        React__default["default"].createElement("path", { d: "M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" }))),
                React__default["default"].createElement("h3", null, props.title && props.title),
                React__default["default"].createElement("p", null, props.message && props.message),
                React__default["default"].createElement("p", null))));
    };

    var css_248z = ".BaseTable_padded-label__2Ka57 {\n  margin: 5px;\n}\n\n@keyframes BaseTable_spin__QRYbE {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n.BaseTable_glyphicon-refresh-animate__3CbCl {\n  -animation: BaseTable_spin__QRYbE 2s infinite linear;\n  -ms-animation: BaseTable_spin__QRYbE 2s infinite linear;\n  -webkit-animation: BaseTable_spin__QRYbE 2s infinite linear;\n  -moz-animation: BaseTable_spin__QRYbE 2s infinite linear;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhc2VUYWJsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxvREFBbUM7RUFDbkMsdURBQXNDO0VBQ3RDLDJEQUEwQztFQUMxQyx3REFBdUM7QUFDekMiLCJmaWxlIjoiQmFzZVRhYmxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkZWQtbGFiZWwge1xuICBtYXJnaW46IDVweDtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cblxuLmdseXBoaWNvbi1yZWZyZXNoLWFuaW1hdGUge1xuICAtYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgLW1zLWFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgLW1vei1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xufVxuIl19 */";
    styleInject(css_248z);

    const colourStyles = {
        option: (styles) => {
            return {
                ...styles,
                color: "black",
            };
        },
    };

    // Define a default UI for filtering
    function defaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter }, }) {
        return React__default["default"].createElement(React__default["default"].Fragment, null);
    }
    function textColumnFilter({ column: { filterValue, preFilteredRows, setFilter }, }) {
        const count = preFilteredRows.length;
        return (React__default["default"].createElement("input", { className: "form-control", value: filterValue || "", onChange: (e) => {
                setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }, placeholder: `Search ${count} records...` }));
    }
    // This is a custom filter UI for selecting
    // a unique option from a list
    function selectColumnFilter({ column: { setFilter, filterValue, preFilteredRows, id }, }) {
        // Calculate the options for filtering
        // using the preFilteredRows
        const options = React__default["default"].useMemo(() => {
            const options = new Set();
            if (!preFilteredRows) {
                return [];
            }
            preFilteredRows.forEach((row) => {
                if (row.values[id] !== null) {
                    if (typeof row.values[id] === "object") {
                        options.add(row.values[id]["name"]);
                    }
                    else {
                        options.add(row.values[id]);
                    }
                }
            });
            return [...options.values()];
        }, [id, preFilteredRows]);
        // Render a multi-select box
        return (React__default["default"].createElement(Select__default["default"], { key: filterValue, title: filterValue, onChange: (e) => setFilter(e.value), value: { label: filterValue || "All" }, defaultValue: { label: "All" }, styles: colourStyles, options: [{ id: -1, value: "", label: "All" }].concat(options.map((o, i) => {
                return { id: i, value: o, label: o };
            })) }));
    }

    function MyTooltip({ message }) {
        return React__default["default"].createElement(reactBootstrap.Tooltip, { id: "character_tooltip" }, message);
    }
    const defaultPropGetter = () => ({});
    function strToKey(keyString, ob) {
        return keyString.split(".").reduce(function (p, prop) {
            return p[prop];
        }, ob);
    }
    const BaseTable = (props, { getRowProps = defaultPropGetter, }) => {
        const defaultColumn = React__default["default"].useMemo(() => ({
            // Let's set up our default Filter UI
            Filter: defaultColumnFilter,
        }), []);
        const filterTypes = React__default["default"].useMemo(() => ({
            text: (rows, ids, filterValue) => {
                return rows.filter((row) => {
                    return ids.some((id) => {
                        if (!filterValue) {
                            return true;
                        }
                        else {
                            let rowValue = row.values[id];
                            if (typeof rowValue === "object") {
                                rowValue = rowValue.name;
                            }
                            if (row.hasOwnProperty("originalSubRows")) {
                                rowValue += row.originalSubRows.reduce((p, r) => {
                                    return (p += " " + strToKey(id, r));
                                }, "");
                            }
                            return rowValue
                                ? rowValue.toLowerCase().includes(filterValue.toLowerCase())
                                : false;
                        }
                    });
                });
            },
        }), []);
        const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, visibleColumns, state: { pageIndex, pageSize }, } = reactTable.useTable({
            columns: props.columns,
            data: props.data,
            defaultColumn,
            filterTypes,
            initialState: {
                pageSize: 10,
                sortBy: [],
            },
        }, reactTable.useFilters, reactTable.useSortBy, reactTable.useExpanded, reactTable.usePagination);
        if (props.isLoading)
            return React__default["default"].createElement(PanelLoader, { title: "Loading Data", message: "Please Wait" });
        return (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(reactBootstrap.Table, { striped: true },
                React__default["default"].createElement("thead", { ...getTableProps() },
                    headerGroups.map((headerGroup) => (React__default["default"].createElement("tr", { ...headerGroup.getHeaderGroupProps() }, headerGroup.headers.map((column) => (React__default["default"].createElement("th", { ...column.getHeaderProps(column.getSortByToggleProps()) },
                        column.render("Header"),
                        React__default["default"].createElement("span", { className: "pull-right" }, column.canSort ? (column.isSorted ? (column.isSortedDesc ? (React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "sort-by-attributes-alt" })) : (React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "sort-by-attributes" }))) : (React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "sort" }))) : ("")))))))),
                    headerGroups.map((headerGroup) => (React__default["default"].createElement("tr", { ...headerGroup.getHeaderGroupProps() }, headerGroup.headers.map((column) => (React__default["default"].createElement("th", { ...column.getHeaderProps() },
                        React__default["default"].createElement("div", null, column.canFilter ? column.render("Filter") : null)))))))),
                React__default["default"].createElement("tbody", { ...getTableBodyProps() },
                    "if (props.error) ",
                    React__default["default"].createElement(ErrorLoader, { title: "Error Loading from API", message: "Try Again Later" }),
                    "; } else ",
                    page.map((row, i) => {
                        prepareRow(row);
                        const rowProps = getRowProps(row);
                        return (React__default["default"].createElement(React__default["default"].Fragment, null,
                            React__default["default"].createElement("tr", { ...row.getRowProps(rowProps) }, row.cells.map((cell) => {
                                return (React__default["default"].createElement("td", { style: { verticalAlign: "middle" }, ...cell.getCellProps() }, cell.render("Cell")));
                            })),
                            row.isExpanded &&
                                asyncExpandFunction({ row, rowProps, visibleColumns })));
                    }))),
            React__default["default"].createElement("div", { className: "pagination pull-right" },
                React__default["default"].createElement(reactBootstrap.ButtonToolbar, null,
                    React__default["default"].createElement(reactBootstrap.ButtonGroup, null,
                        React__default["default"].createElement(reactBootstrap.Button, { bsStyle: "success", onClick: () => gotoPage(0), disabled: !canPreviousPage },
                            React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "step-backward" })),
                        " ",
                        React__default["default"].createElement(reactBootstrap.Button, { bsStyle: "success", onClick: () => previousPage(), disabled: !canPreviousPage },
                            React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "triangle-left" })),
                        " ",
                        React__default["default"].createElement(reactBootstrap.Button, { bsStyle: "success", onClick: () => nextPage(), disabled: !canNextPage },
                            React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "triangle-right" })),
                        " ",
                        React__default["default"].createElement(reactBootstrap.Button, { bsStyle: "success", onClick: () => gotoPage(pageCount - 1), disabled: !canNextPage },
                            React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "step-forward" }))),
                    React__default["default"].createElement(reactBootstrap.ButtonGroup, null,
                        React__default["default"].createElement(reactBootstrap.Button, { active: true, bsStyle: "success" }, "Page Size:"),
                        " ",
                        React__default["default"].createElement(reactBootstrap.SplitButton, { id: "pageSizeDropdown", bsStyle: "success", title: pageSize, onSelect: (e) => {
                                setPageSize(Number(e));
                            } }, [10, 50, 100, 1000000].map((_pageSize) => (React__default["default"].createElement(reactBootstrap.MenuItem, { id: _pageSize, key: _pageSize, eventKey: _pageSize, value: _pageSize },
                            "Show ",
                            _pageSize))))))),
            React__default["default"].createElement("div", { className: "pagination pull-left" },
                React__default["default"].createElement(reactBootstrap.ButtonGroup, null,
                    React__default["default"].createElement(reactBootstrap.Button, { active: true, bsStyle: "info" }, React__default["default"].createElement(React__default["default"].Fragment, null, pageOptions.length > 0 ? (React__default["default"].createElement(React__default["default"].Fragment, null,
                        "Page",
                        " ",
                        React__default["default"].createElement("strong", null,
                            pageIndex + 1,
                            " of ",
                            pageOptions.length))) : (React__default["default"].createElement(React__default["default"].Fragment, null,
                        "Page ",
                        React__default["default"].createElement("strong", null, "- of -"))))),
                    " ",
                    props.isFetching ? (React__default["default"].createElement(reactBootstrap.OverlayTrigger, { placement: "bottom", overlay: MyTooltip({ message: "Refreshing Data" }) },
                        React__default["default"].createElement(reactBootstrap.Button, { bsStyle: "info" },
                            React__default["default"].createElement(reactBootstrap.Glyphicon, { className: "glyphicon-refresh-animate", glyph: "refresh" })))) : (React__default["default"].createElement(reactBootstrap.OverlayTrigger, { placement: "bottom", overlay: MyTooltip({
                            message: "Data Loaded: " + new Date().toLocaleString(),
                        }) },
                        React__default["default"].createElement(reactBootstrap.Button, { bsStyle: "info" },
                            React__default["default"].createElement(reactBootstrap.Glyphicon, { glyph: "ok" }))))))));
    };

    exports.AllianceLogo = AllianceLogo;
    exports.BaseTable = BaseTable;
    exports.CharacterPortrait = CharacterPortrait;
    exports.CorporationLogo = CorporationLogo;
    exports.EveWhoButton = EveWhoButton;
    exports.TypeIcon = TypeIcon;
    exports.ZKillButton = ZKillButton;
    exports.selectColumnFilter = selectColumnFilter;
    exports.textColumnFilter = textColumnFilter;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=rclb.js.map
