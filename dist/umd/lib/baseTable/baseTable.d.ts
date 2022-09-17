import { ColumnDef } from "@tanstack/react-table";
import "./BaseTable.css";
export interface BaseTableProps extends Partial<HTMLElement> {
    isLoading: boolean;
    isFetching: boolean;
    debugTable: boolean;
    data: any;
    error: boolean;
    columns: ColumnDef<any, any>;
    asyncExpandFunction?: any;
}
declare const BaseTable: ({ isLoading, isFetching, debugTable, data, error, columns, asyncExpandFunction, }: BaseTableProps) => JSX.Element;
export { BaseTable };
//# sourceMappingURL=baseTable.d.ts.map