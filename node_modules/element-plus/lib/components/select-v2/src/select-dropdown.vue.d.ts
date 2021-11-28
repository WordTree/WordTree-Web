import type { Option } from './select.types';
declare const _default: import("vue").DefineComponent<{
    data: ArrayConstructor;
    hoveringIndex: NumberConstructor;
    width: NumberConstructor;
}, {
    select: any;
    listProps: import("vue").ComputedRef<{
        itemSize: any;
        estimatedSize?: undefined;
    } | {
        estimatedSize: any;
        itemSize: (idx: number) => number;
    }>;
    listRef: import("vue").Ref<null>;
    isSized: import("vue").ComputedRef<boolean>;
    isItemDisabled: (modelValue: any[] | any, selected: boolean) => any;
    isItemHovering: (target: number) => boolean;
    isItemSelected: (modelValue: any[] | any, target: Option) => boolean;
    scrollToItem: (index: number) => void;
    resetScrollTop: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    hoveringIndex?: unknown;
    width?: unknown;
} & {} & {
    data?: unknown[] | undefined;
    width?: number | undefined;
    hoveringIndex?: number | undefined;
}>, {}>;
export default _default;
