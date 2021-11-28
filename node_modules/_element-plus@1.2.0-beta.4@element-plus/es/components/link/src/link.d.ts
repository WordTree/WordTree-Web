import type { Component, ExtractPropTypes } from 'vue';
export declare const linkProps: {
    readonly type: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "default", unknown, "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
    readonly underline: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly disabled: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly href: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly icon: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
};
export declare type LinkProps = ExtractPropTypes<typeof linkProps>;
export declare const linkEmits: {
    click: (evt: MouseEvent) => boolean;
};
export declare type LinkEmits = typeof linkEmits;
