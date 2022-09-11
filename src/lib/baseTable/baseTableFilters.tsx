import React from "react";
import { colourStyles } from "./baseTableStyles";
import Select from "react-select";
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
