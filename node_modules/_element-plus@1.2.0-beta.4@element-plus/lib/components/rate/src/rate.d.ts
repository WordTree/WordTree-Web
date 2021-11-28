import type { Component, ExtractPropTypes } from 'vue';
export declare const rateProps: {
    readonly modelValue: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly lowThreshold: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 2, unknown, unknown, unknown>;
    readonly highThreshold: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 4, unknown, unknown, unknown>;
    readonly max: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
    readonly colors: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string[] | Record<number, string>>, () => ["#F7BA2A", "#F7BA2A", "#F7BA2A"], unknown, unknown, unknown>;
    readonly voidColor: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "#C6D1DE", unknown, unknown, unknown>;
    readonly disabledVoidColor: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "#EFF2F7", unknown, unknown, unknown>;
    readonly icons: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<(string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>)[] | Record<number, string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>[], unknown, unknown, unknown>;
    readonly voidIcon: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>, unknown, unknown, unknown>;
    readonly disabledvoidIcon: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>, unknown, unknown, unknown>;
    readonly disabled: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly allowHalf: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showText: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showScore: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly textColor: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "#1f2d3d", unknown, unknown, unknown>;
    readonly texts: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string[]>, () => ["Extremely bad", "Disappointed", "Fair", "Satisfied", "Surprise"], unknown, unknown, unknown>;
    readonly scoreTemplate: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "{value}", unknown, unknown, unknown>;
};
export declare type RateProps = ExtractPropTypes<typeof rateProps>;
export declare const rateEmits: {
    change: (value: number) => boolean;
    "update:modelValue": (value: number) => boolean;
};
export declare type RateEmits = typeof rateEmits;
