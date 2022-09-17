import React from "react";
import { colourStyles } from "./baseTableStyles";
import Select from "react-select";

import {
  Column,
  Table,
  sortingFns,
  FilterFn,
  SortingFn,
} from "@tanstack/react-table";

import {
  RankingInfo,
  rankItem,
  compareItems,
} from "@tanstack/match-sorter-utils";

import { DebouncedInput } from "./baseTableFunctions";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

// Define a default UI for filtering
export function defaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  return <></>;
}

export function textColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      className="form-control"
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
export function selectColumnFilter({
  column: { setFilter, filterValue, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    if (!preFilteredRows) {
      return [];
    }
    preFilteredRows.forEach((row) => {
      if (row.values[id] !== null) {
        if (typeof row.values[id] === "object") {
          options.add(row.values[id]["name"]);
        } else {
          options.add(row.values[id]);
        }
      }
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <Select
      key={filterValue}
      title={filterValue}
      onChange={(e) => setFilter(e.value)}
      value={{ label: filterValue || "All" }}
      defaultValue={{ label: "All" }}
      styles={colourStyles}
      options={[{ id: -1, value: "", label: "All" }].concat(
        options.map((o, i) => {
          return { id: i, value: o, label: o };
        })
      )}
    />
  );
}

export function defaultColumn() {
  return React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: defaultColumnFilter,
    }),
    []
  );
}
export function filterTypes() {
  return React.useMemo(
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
}

export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  let dir = 0;

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank!,
      rowB.columnFiltersMeta[columnId]?.itemRank!
    );
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>;
  table: Table<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );

  return typeof firstValue === "number" ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${
            column.getFacetedMinMaxValues()?.[0]
              ? `(${column.getFacetedMinMaxValues()?.[0]})`
              : ""
          }`}
          className="w-24 border shadow rounded"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max ${
            column.getFacetedMinMaxValues()?.[1]
              ? `(${column.getFacetedMinMaxValues()?.[1]})`
              : ""
          }`}
          className="w-24 border shadow rounded"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : (
    <>
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
        className="w-36 border shadow rounded"
        list={column.id + "list"}
      />
      <div className="h-1" />
    </>
  );
}
