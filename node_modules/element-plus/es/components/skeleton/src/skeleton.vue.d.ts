declare const _default: import("vue").DefineComponent<{
    readonly animated: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly count: import("../../../utils/props").BuildPropReturn<NumberConstructor, 1, unknown, unknown, unknown>;
    readonly rows: import("../../../utils/props").BuildPropReturn<NumberConstructor, 3, unknown, unknown, unknown>;
    readonly loading: import("../../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly throttle: import("../../../utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
}, {
    uiLoading: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly animated?: unknown;
    readonly count?: unknown;
    readonly rows?: unknown;
    readonly loading?: unknown;
    readonly throttle?: unknown;
} & {
    loading: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    rows: number;
    animated: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    count: number;
} & {
    throttle?: number | undefined;
}>, {
    loading: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    rows: number;
    animated: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    count: number;
    throttle: number;
}>;
export default _default;
