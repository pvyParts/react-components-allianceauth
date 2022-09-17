import { FilterFn, SortingFn } from '@tanstack/react-table';
import { RankingInfo } from '@tanstack/match-sorter-utils';
declare module '@tanstack/table-core' {
    interface FilterFns {
        fuzzy: FilterFn<unknown>;
    }
    interface FilterMeta {
        itemRank: RankingInfo;
    }
}
export declare function defaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter }, }: {
    column: {
        filterValue: any;
        preFilteredRows: any;
        setFilter: any;
    };
}): JSX.Element;
export declare function textColumnFilter({ column: { filterValue, preFilteredRows, setFilter }, }: {
    column: {
        filterValue: any;
        preFilteredRows: any;
        setFilter: any;
    };
}): JSX.Element;
export declare function selectColumnFilter({ column: { setFilter, filterValue, preFilteredRows, id }, }: {
    column: {
        setFilter: any;
        filterValue: any;
        preFilteredRows: any;
        id: any;
    };
}): JSX.Element;
export declare function defaultColumn(): {
    Filter: typeof defaultColumnFilter;
};
export declare function filterTypes(): {
    text: (rows: any, ids: any, filterValue: any) => any;
};
export declare const fuzzyFilter: FilterFn<any>;
export declare const fuzzySort: SortingFn<any>;
//# sourceMappingURL=baseTableFilters.d.ts.map