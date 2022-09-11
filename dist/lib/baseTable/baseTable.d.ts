/// <reference types="react" />
import "./BaseTable.css";
export declare function SubRows({ row, rowProps, visibleColumns, data, error, isLoading, }: {
    row: any;
    rowProps: any;
    visibleColumns: any;
    data: any;
    error: any;
    isLoading: any;
}): JSX.Element;
export interface BaseTableProps extends Partial<HTMLElement> {
    isLoading: boolean;
    isFetching: boolean;
    data: any;
    error: boolean;
    columns: any;
    asyncExpandFunction: any;
    getRowProps: any;
}
declare const BaseTable: (props: BaseTableProps, { getRowProps, }: {
    getRowProps?: (() => {}) | undefined;
}) => JSX.Element;
export { BaseTable };
export { selectColumnFilter, textColumnFilter } from "./baseTableFilters";
export { colourStyles } from "./baseTableStyles";
//# sourceMappingURL=baseTable.d.ts.map