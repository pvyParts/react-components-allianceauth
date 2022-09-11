import React from "react";
import {} from "react-bootstrap";
import {
  useTable,
  useFilters,
  usePagination,
  useSortBy,
  useExpanded,
} from "react-table";
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
} from "react-bootstrap";
import { ErrorLoader, PanelLoader } from "../loaders/loaders";
import "./BaseTable.css";

import { defaultColumnFilter } from "./baseTableFilters";

export function SubRows({
  row,
  rowProps,
  visibleColumns,
  data,
  error,
  isLoading,
}) {
  if (isLoading) {
    return (
      <tr>
        <td />
        <td colSpan={visibleColumns.length - 1}>Loading...</td>
      </tr>
    );
  }
  if (error) {
    return (
      <tr>
        <td />
        <td colSpan={visibleColumns.length - 1}>Unable to Fetch from API!</td>
      </tr>
    );
  }

  if (data.length === 0) {
    return (
      <tr>
        <td />
        <td colSpan={visibleColumns.length - 1}>Empty!</td>
      </tr>
    );
  }

  // error handling here :)

  return (
    <>
      {data.map((x, i) => {
        return (
          <tr {...rowProps} key={`${rowProps.key}-expanded-${i}`}>
            {row.cells.map((cell) => {
              return (
                <td {...cell.getCellProps()}>
                  {cell.render(cell.column.SubCell ? "SubCell" : "Cell", {
                    value: cell.column.accessor && cell.column.accessor(x, i),
                    row: { ...row, original: x },
                  })}
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
}

function MyTooltip({ message }) {
  return <Tooltip id="character_tooltip">{message}</Tooltip>;
}

const defaultPropGetter = () => ({});

function strToKey(keyString, ob) {
  return keyString.split(".").reduce(function (p, prop) {
    return p[prop];
  }, ob);
}

export interface BaseTableProps extends Partial<HTMLElement> {
  isLoading: boolean;
  isFetching: boolean;
  data: any;
  error: boolean;
  columns: any;
  asyncExpandFunction?: any;
  getRowProps?: any;
  initialState?: any;
}
const BaseTable = (
  props: BaseTableProps,
  { getRowProps = defaultPropGetter }
) => {
  if (props.isLoading)
    return <PanelLoader title="Loading Data" message="Please Wait" />;

  if (props.error)
    return (
      <ErrorLoader
        title={"Error Loading from API"}
        message={"Try Again Later"}
      />
    );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: defaultColumnFilter,
    }),
    []
  );

  const filterTypes = React.useMemo(
    () => ({
      text: (rows, ids, filterValue) => {
        return rows.filter((row) => {
          return ids.some((id) => {
            if (!filterValue) {
              return true;
            } else {
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
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      defaultColumn,
      filterTypes,
      initialState: props.initialState,
      columns: props.columns,
      data: props.data,
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );
  return (
    <>
      <Table striped>
        <thead {...getTableProps()}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span className="pull-right">
                    {column.canSort ? (
                      column.isSorted ? (
                        column.isSortedDesc ? (
                          <Glyphicon glyph="sort-by-attributes-alt" />
                        ) : (
                          <Glyphicon glyph="sort-by-attributes" />
                        )
                      ) : (
                        <Glyphicon glyph="sort" />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            const rowProps = getRowProps(row);
            return (
              <>
                <tr {...row.getRowProps(rowProps)}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        style={{ verticalAlign: "middle" }}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
                {row.isExpanded &&
                  asyncExpandFunction({ row, rowProps, visibleColumns })}
              </>
            );
          })}
        </tbody>
      </Table>
      <div className="pagination pull-right">
        <ButtonToolbar>
          <ButtonGroup>
            <Button
              bsStyle="success"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <Glyphicon glyph="step-backward" />
            </Button>{" "}
            <Button
              bsStyle="success"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <Glyphicon glyph="triangle-left" />
            </Button>{" "}
            <Button
              bsStyle="success"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <Glyphicon glyph="triangle-right" />
            </Button>{" "}
            <Button
              bsStyle="success"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
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
              title={pageSize}
              onSelect={(e) => {
                setPageSize(Number(e));
              }}
            >
              {[10, 50, 100, 1000000].map((_pageSize) => (
                <MenuItem
                  id={_pageSize}
                  key={_pageSize}
                  eventKey={_pageSize}
                  value={_pageSize}
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
                {pageOptions.length > 0 ? (
                  <>
                    Page{" "}
                    <strong>
                      {pageIndex + 1} of {pageOptions.length}
                    </strong>
                  </>
                ) : (
                  <>
                    Page <strong>- of -</strong>
                  </>
                )}
              </>
            }
          </Button>{" "}
          {props.isFetching ? (
            <OverlayTrigger
              placement="bottom"
              overlay={MyTooltip({ message: "Refreshing Data" })}
            >
              <Button bsStyle="info">
                <Glyphicon
                  className="glyphicon-refresh-animate"
                  glyph="refresh"
                />
              </Button>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              placement="bottom"
              overlay={MyTooltip({
                message: "Data Loaded: " + new Date().toLocaleString(),
              })}
            >
              <Button bsStyle="info">
                <Glyphicon glyph="ok" />
              </Button>
            </OverlayTrigger>
          )}
        </ButtonGroup>
      </div>
    </>
  );
};

// export all the base table modules

export { BaseTable }; // Export the table
export { selectColumnFilter, textColumnFilter } from "./baseTableFilters"; // Export the filters
export { colourStyles } from "./baseTableStyles"; // export the styles
