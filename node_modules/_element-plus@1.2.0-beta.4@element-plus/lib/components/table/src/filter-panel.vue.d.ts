import { Effect } from 'element-plus/es/components/popper';
import type { Placement } from 'element-plus/es/components/popper';
import type { WritableComputedRef, PropType } from 'vue';
import type { TableColumnCtx } from './table-column/defaults';
declare const _default: import("vue").DefineComponent<{
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    store: {
        type: PropType<any>;
    };
    column: {
        type: PropType<TableColumnCtx<unknown>>;
    };
    upDataColumn: {
        type: FunctionConstructor;
    };
}, {
    tooltipVisible: import("vue").Ref<boolean>;
    multiple: import("vue").ComputedRef<boolean>;
    filteredValue: WritableComputedRef<unknown[]>;
    filterValue: WritableComputedRef<string>;
    filters: import("vue").ComputedRef<import("./table-column/defaults").Filters | undefined>;
    handleConfirm: () => void;
    handleReset: () => void;
    handleSelect: (_filterValue?: string | undefined) => void;
    isActive: (filter: any) => boolean;
    t: (...args: any[]) => string;
    showFilterPanel: (e: MouseEvent) => void;
    hideFilterPanel: () => void;
    popperPaneRef: import("vue").ComputedRef<any>;
    tooltip: import("vue").Ref<null>;
    Effect: typeof Effect;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    placement?: unknown;
    store?: unknown;
    column?: unknown;
    upDataColumn?: unknown;
} & {
    placement: Placement;
} & {
    column?: TableColumnCtx<unknown> | undefined;
    store?: unknown;
    upDataColumn?: Function | undefined;
}>, {
    placement: Placement;
}>;
export default _default;
