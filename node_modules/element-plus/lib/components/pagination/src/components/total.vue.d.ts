import type { ExtractPropTypes } from 'vue';
declare const paginationTotalProps: {
    readonly total: {
        readonly type: NumberConstructor;
        readonly default: 1000;
    };
};
export declare type PaginationTotalProps = ExtractPropTypes<typeof paginationTotalProps>;
declare const _default: import("vue").DefineComponent<{
    readonly total: {
        readonly type: NumberConstructor;
        readonly default: 1000;
    };
}, {
    t: (...args: any[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly total?: unknown;
} & {
    total: number;
} & {}>, {
    total: number;
}>;
export default _default;
