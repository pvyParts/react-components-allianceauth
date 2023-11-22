import React, { useState } from "react";

import {
  Button,
  Tooltip,
  ButtonToolbar,
  OverlayTrigger,
  ButtonGroup,
  Glyphicon,
  MenuItem,
  SplitButton,
  Table,
  Popover,
} from "react-bootstrap";

import {
  Column,
  Table as ReactTable,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  getFacetedRowModel,
  getFacetedMinMaxValues,
  getFacetedUniqueValues,
  ColumnDef,
  SortingTableState,
  VisibilityTableState,
  PaginationInitialTableState,
} from "@tanstack/react-table";

import { ErrorLoader, PanelLoader } from "../loaders/loaders";

import tableStyles from "./BaseTable.module.css";
import Select from "react-select";
import { colourStyles } from "./baseTableStyles";

function MyTooltip(message: string) {
  return <Tooltip id="character_tooltip">{message}</Tooltip>;
}

function strToKey(keyString: string, ob: object) {
  return keyString.split(".").reduce(function (p: any, prop: any) {
    return p[prop];
  }, ob);
}

type tableInitialState = SortingTableState &
  VisibilityTableState &
  PaginationInitialTableState;

export interface BaseTableProps extends Partial<HTMLElement> {
  isLoading: boolean;
  isFetching: boolean;
  debugTable: boolean;
  striped: boolean;
  data: any;
  error: boolean;
  hover: boolean;
  columns: ColumnDef<any, any>;
  asyncExpandFunction?: any;
  initialState: tableInitialState;
  rowClasses: Function;
}

const BaseTable = ({
  isLoading,
  isFetching,
  debugTable,
  data,
  error,
  columns,
  asyncExpandFunction,
  striped,
  hover,
  initialState = {},
  rowClasses = (row) => {
    return "";
  },
}: BaseTableProps) => {
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

  if (isLoading)
    return (
      <>
        <hr />
        <PanelLoader title="Loading Data" message="Please Wait" />
      </>
    );

  if (error)
    return (
      <>
        <hr />
        <ErrorLoader
          title={"Error Loading from API"}
          message={"Try Again Later"}
        />
      </>
    );
  return (
    <_baseTable
      {...{
        table,
        data,
        columns,
        isFetching,
        debugTable,
        initialState,
        striped,
        hover,
        rowClasses,
      }}
    />
  );
};

function _baseTable({
  table,
  data,
  columns,
  isFetching,
  striped = false,
  hover = false,
  debugTable = false,
  initialState = {},
  rowClasses = (row: any) => {
    return "";
  },
}: {
  data: any[];
  columns: ColumnDef<any>[];
}) {
  return (
    <>
      <Table {...{ striped, hover }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <>
              <tr key={`name-${headerGroup.id}`}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getCanSort() ? (
                            <>
                              {{
                                asc: (
                                  <Glyphicon
                                    className="pull-right"
                                    glyph="sort-by-attributes"
                                  />
                                ),
                                desc: (
                                  <Glyphicon
                                    className="pull-right"
                                    glyph="sort-by-attributes-alt"
                                  />
                                ),
                              }[header.column.getIsSorted() as string] ?? (
                                <Glyphicon
                                  className="pull-right"
                                  glyph="sort"
                                />
                              )}
                            </>
                          ) : null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
              <tr key={`filter-${headerGroup.id}`}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} table={table} />
                        </div>
                      ) : (
                        ""
                      )}
                    </th>
                  );
                })}
              </tr>
            </>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className={rowClasses(row.original)}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} style={{ verticalAlign: "middle" }}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="pagination pull-right">
        <ButtonToolbar>
          <ButtonGroup>
            <Button
              bsStyle="success"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <Glyphicon glyph="step-backward" />
            </Button>{" "}
            <Button
              bsStyle="success"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <Glyphicon glyph="triangle-left" />
            </Button>{" "}
            <Button
              bsStyle="success"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <Glyphicon glyph="triangle-right" />
            </Button>{" "}
            <Button
              bsStyle="success"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <Glyphicon glyph="step-forward" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button active bsStyle="success">
              {"Page Size:"}
            </Button>{" "}
            <SplitButton
              id="pageSizeDropdown"
              bsStyle="success"
              title={table.getState().pagination.pageSize}
            >
              {[10, 50, 100, 1000000].map((_pageSize) => (
                <MenuItem
                  id={_pageSize}
                  key={_pageSize}
                  eventKey={_pageSize}
                  value={_pageSize}
                  onSelect={(eventKey: any, event: Object) => {
                    table.setPageSize(Number(eventKey));
                  }}
                >
                  Show {_pageSize}
                </MenuItem>
              ))}
            </SplitButton>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      <div className="pagination pull-left">
        <ButtonGroup>
          <Button active bsStyle="info">
            {
              <>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </>
            }
          </Button>{" "}
          {isFetching ? (
            <OverlayTrigger
              placement="bottom"
              trigger="focus"
              overlay={MyTooltip({ message: "Refreshing Data" })}
            >
              <Button bsStyle="info">
                <Glyphicon
                  className={tableStyles.glyphiconRefreshAnimate}
                  glyph="refresh"
                />
              </Button>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              placement="bottom"
              trigger="focus"
              overlay={MyTooltip("Data Loaded: " + new Date().toLocaleString())}
            >
              <Button bsStyle="info">
                <Glyphicon glyph="ok" />
              </Button>
            </OverlayTrigger>
          )}
        </ButtonGroup>
      </div>
      {debugTable && (
        <div className="col-xs-12">
          <div>{table.getRowModel().rows.length} Rows</div>
          <pre>{JSON.stringify(table.getState(), null, 2)}</pre>
        </div>
      )}
    </>
  );
}
function Filter({
  column,
  table,
}: {
  column: Column<any, any>;
  table: ReactTable<any>;
}) {
  const [input, setInput] = useState("");

  const firstValue: any = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);

  const selectOveride = { Menu: () => <></>, IndicatorsContainer: () => <></> };

  const columnFilterValue = column.getFilterValue();

  const popoverNumber = (
    <Popover id="popover-positioned-top">
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className="form-control"
      />
      <p className="text-center">to</p>
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="form-control"
      />
    </Popover>
  );

  if (typeof firstValue === "number") {
    let fromToNumber = columnFilterValue as [string, string];
    return (
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={popoverNumber}
      >
        <ButtonGroup style={{ display: "flex", width: "100%" }}>
          <Button
            className={tableStyles.filterBtn + " btn-block"}
            bsStyle="primary"
            bsSize="small"
          >
            <>
              {typeof fromToNumber?.[0] === "undefined" ||
              fromToNumber?.[0] === ""
                ? "-∞"
                : fromToNumber?.[0]}
              {" to "}
              {typeof fromToNumber?.[1] === "undefined" ||
              fromToNumber?.[1] === ""
                ? "∞"
                : fromToNumber?.[1]}
            </>
          </Button>
          <Button
            className={tableStyles.filterToggle}
            bsStyle="primary"
            bsSize="small"
          >
            <svg
              height="20"
              width="20"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
            </svg>
          </Button>
        </ButtonGroup>
      </OverlayTrigger>
    );
  } else if (typeof firstValue === "boolean") {
    return (
      <Select
        styles={colourStyles}
        isClearable={true}
        onChange={(value, action) => {
          setInput("");
          column.setFilterValue(value ? value.value : "");
        }}
        placeholder={`Filter...`}
        options={[
          { value: true, label: "Pass" },
          { value: false, label: "Fail" },
        ]}
      />
    );
  } else if (typeof firstValue === "object") {
    return (
      <Select
        styles={colourStyles}
        isClearable={true}
        onChange={(value, action) => {
          setInput("");
          column.setFilterValue(value ? value.value : "");
        }}
        inputValue={input} // allows you continue where you left off
        onInputChange={(value, action) => {
          if (action.action === "input-change") {
            setInput(value);
            column.setFilterValue(value);
          }
        }}
        placeholder={`Search...`}
        className=""
        options={[]}
        components={selectOveride}
      />
    );
  } else {
    const sortedUniqueValues = Array.from(
      column.getFacetedUniqueValues().keys()
    ).sort();

    const selectOptions = sortedUniqueValues
      .slice(0, 50)
      .reduce((previousValue: Array<any>, currentValue: any) => {
        previousValue.push({ value: currentValue, label: currentValue });
        return previousValue;
      }, []);

    return (
      <Select
        styles={colourStyles}
        isClearable={true}
        onChange={(value, action) => {
          setInput("");
          column.setFilterValue(value ? value.value : "");
        }}
        inputValue={input} // allows you continue where you left off
        onInputChange={(value, action) => {
          if (action.action === "input-change") {
            setInput(value);
            column.setFilterValue(value);
          }
        }}
        placeholder={`Search...`}
        className=""
        options={selectOptions}
        components={isHTML(firstValue) ? selectOveride : {}}
      />
    );
  }
}

// export all the base table modules

export { BaseTable }; // Export the table
