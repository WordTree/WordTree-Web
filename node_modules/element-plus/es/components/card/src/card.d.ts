import type { ExtractPropTypes } from 'vue';
import type { StyleValue } from 'element-plus/es/utils/types';
export declare const cardProps: {
    readonly header: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly bodyStyle: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<StyleValue>, "", unknown, unknown, unknown>;
    readonly shadow: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
};
export declare type CardProps = ExtractPropTypes<typeof cardProps>;
