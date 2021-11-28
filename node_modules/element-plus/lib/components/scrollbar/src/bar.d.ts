import type { ExtractPropTypes } from 'vue';
export declare const barProps: {
    readonly vertical: BooleanConstructor;
    readonly size: StringConstructor;
    readonly move: NumberConstructor;
    readonly ratio: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly always: BooleanConstructor;
};
export declare type BarProps = ExtractPropTypes<typeof barProps>;
