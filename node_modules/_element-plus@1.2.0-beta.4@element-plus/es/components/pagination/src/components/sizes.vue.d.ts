import type { Nullable } from 'element-plus/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    readonly pageSize: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly pageSizes: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<number[]>, () => [10, 20, 30, 40, 50, 100], unknown, unknown, unknown>;
    readonly popperClass: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
}, {
    innerPagesizes: import("vue").ComputedRef<number[]>;
    innerPageSize: import("vue").Ref<Nullable<number>>;
    t: (...args: any[]) => string;
    handleChange: (val: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "page-size-change"[], "page-size-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly pageSize?: unknown;
    readonly pageSizes?: unknown;
    readonly popperClass?: unknown;
    readonly disabled?: unknown;
} & {
    disabled: boolean;
    popperClass: string;
    pageSizes: number[];
    pageSize: number;
} & {}> & {
    "onPage-size-change"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    popperClass: string;
    pageSizes: number[];
}>;
export default _default;
