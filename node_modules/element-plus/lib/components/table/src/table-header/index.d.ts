import type { ComponentInternalInstance, Ref, PropType } from 'vue';
import type { Sort } from '../table/defaults';
import type { Store } from '../store';
export interface TableHeader extends ComponentInternalInstance {
    state: {
        onColumnsChange: any;
        onScrollableChange: any;
    };
    filterPanels: Ref<unknown>;
}
export interface TableHeaderProps<T> {
    fixed: string;
    store: Store<T>;
    border: boolean;
    defaultSort: Sort;
}
declare const _default: import("vue").DefineComponent<{
    fixed: {
        type: StringConstructor;
        default: string;
    };
    store: {
        required: true;
        type: PropType<any>;
    };
    border: BooleanConstructor;
    defaultSort: {
        type: PropType<Sort>;
        default: () => {
            prop: string;
            order: string;
        };
    };
}, {
    columns: any;
    filterPanels: Ref<{}>;
    hasGutter: import("vue").ComputedRef<number | false>;
    onColumnsChange: (layout: import("../table-layout").default<unknown>) => void;
    onScrollableChange: (layout: import("../table-layout").default<unknown>) => void;
    columnRows: import("vue").ComputedRef<import("../table-column/defaults").TableColumnCtx<unknown>[]>;
    getHeaderRowClass: (rowIndex: number) => string;
    getHeaderRowStyle: (rowIndex: number) => any;
    getHeaderCellClass: (rowIndex: number, columnIndex: number, row: unknown, column: import("../table-column/defaults").TableColumnCtx<unknown>) => string;
    getHeaderCellStyle: (rowIndex: number, columnIndex: number, row: unknown, column: import("../table-column/defaults").TableColumnCtx<unknown>) => any;
    handleHeaderClick: (event: Event, column: import("../table-column/defaults").TableColumnCtx<unknown>) => void;
    handleHeaderContextMenu: (event: Event, column: import("../table-column/defaults").TableColumnCtx<unknown>) => void;
    handleMouseDown: (event: MouseEvent, column: import("../table-column/defaults").TableColumnCtx<unknown>) => void;
    handleMouseMove: (event: MouseEvent, column: import("../table-column/defaults").TableColumnCtx<unknown>) => void;
    handleMouseOut: () => void;
    handleSortClick: (event: Event, column: import("../table-column/defaults").TableColumnCtx<unknown>, givenOrder: string | boolean) => void;
    handleFilterClick: (event: Event) => void;
    isGroup: import("vue").ComputedRef<boolean>;
    toggleAllSelection: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    fixed?: unknown;
    store?: unknown;
    border?: unknown;
    defaultSort?: unknown;
} & {
    fixed: string;
    border: boolean;
    store: unknown;
    defaultSort: Sort;
} & {}>, {
    fixed: string;
    border: boolean;
    defaultSort: Sort;
}>;
export default _default;
