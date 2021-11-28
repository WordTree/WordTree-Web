import type { TableColumnCtx } from '../table-column/defaults';
import type { TableFooter } from '.';
declare function useStyle<T>(props: TableFooter<T>): {
    hasGutter: import("vue").ComputedRef<boolean>;
    getRowClasses: (column: TableColumnCtx<T>, cellIndex: number) => string[];
    columns: any;
};
export default useStyle;
