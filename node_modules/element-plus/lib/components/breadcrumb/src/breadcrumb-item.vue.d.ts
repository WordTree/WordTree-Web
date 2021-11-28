declare const _default: import("vue").DefineComponent<{
    readonly to: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, "", unknown, unknown, unknown>;
    readonly replace: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
}, {
    link: import("vue").Ref<HTMLSpanElement | undefined>;
    separator: string | undefined;
    separatorIcon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown> | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly to?: unknown;
    readonly replace?: unknown;
} & {
    replace: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    to: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown>;
} & {}>, {
    replace: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    to: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown>;
}>;
export default _default;
