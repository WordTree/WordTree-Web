import type { StyleValue, ExtractPropTypes } from 'vue';
export declare const scrollbarProps: {
    readonly height: import("element-plus/es/utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly maxHeight: import("element-plus/es/utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly native: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly wrapStyle: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<StyleValue>, "", unknown, unknown, unknown>;
    readonly wrapClass: import("element-plus/es/utils/props").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
    readonly viewClass: import("element-plus/es/utils/props").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
    readonly viewStyle: import("element-plus/es/utils/props").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
    readonly noresize: BooleanConstructor;
    readonly tag: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly always: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly minSize: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 20, unknown, unknown, unknown>;
};
export declare type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>;
export declare const scrollbarEmits: {
    scroll: ({ scrollTop, scrollLeft, }: {
        scrollTop: number;
        scrollLeft: number;
    }) => boolean;
};
export declare type ScrollbarEmits = typeof scrollbarEmits;
