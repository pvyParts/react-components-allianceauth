import { ColumnDef, SortingTableState, VisibilityTableState, PaginationInitialTableState } from "@tanstack/react-table";
declare type tableInitialState = SortingTableState & VisibilityTableState & PaginationInitialTableState;
export interface BaseTableProps extends Partial<HTMLElement> {
    isLoading: boolean;
    isFetching: boolean;
    debugTable: boolean;
    data: any;
    error: boolean;
    columns: ColumnDef<any, any>;
    asyncExpandFunction?: any;
    initialState: tableInitialState;
}
declare const BaseTable: ({ isLoading, isFetching, debugTable, data, error, columns, asyncExpandFunction, initialState, }: BaseTableProps) => JSX.Element;
export { BaseTable };
//# sourceMappingURL=baseTable.d.ts.map