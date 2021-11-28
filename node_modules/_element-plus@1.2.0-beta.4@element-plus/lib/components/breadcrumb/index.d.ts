export declare const ElBreadcrumb: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly separator: import("../../utils/props").BuildPropReturn<StringConstructor, "/", unknown, unknown, unknown>;
    readonly separatorIcon: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
}, {
    breadcrumb: import("vue").Ref<HTMLDivElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly separator?: unknown;
    readonly separatorIcon?: unknown;
} & {
    separator: string;
    separatorIcon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
} & {}>, {
    separator: string;
    separatorIcon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
}>> & {
    BreadcrumbItem: import("vue").DefineComponent<{
        readonly to: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, "", unknown, unknown, unknown>;
        readonly replace: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    }, {
        link: import("vue").Ref<HTMLSpanElement | undefined>;
        separator: string | undefined;
        separatorIcon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown> | undefined;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly to?: unknown;
        readonly replace?: unknown;
    } & {
        replace: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
        to: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown>;
    } & {}>, {
        replace: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
        to: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown>;
    }>;
};
export declare const ElBreadcrumbItem: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly to: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, "", unknown, unknown, unknown>;
    readonly replace: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
}, {
    link: import("vue").Ref<HTMLSpanElement | undefined>;
    separator: string | undefined;
    separatorIcon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown> | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly to?: unknown;
    readonly replace?: unknown;
} & {
    replace: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    to: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown>;
} & {}>, {
    replace: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    to: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown>;
}>>;
export default ElBreadcrumb;
export * from './src/breadcrumb';
export * from './src/breadcrumb-item';
