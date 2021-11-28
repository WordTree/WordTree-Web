import type { ExtractPropTypes, PropType, Component } from 'vue';
export declare const pageHeaderProps: {
    readonly icon: {
        readonly type: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        readonly default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    readonly title: StringConstructor;
    readonly content: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export declare type PageHeaderProps = ExtractPropTypes<typeof pageHeaderProps>;
export declare const pageHeaderEmits: {
    back: () => boolean;
};
export declare type PageHeaderEmits = typeof pageHeaderEmits;
