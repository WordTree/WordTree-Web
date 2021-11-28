declare const _default: import("vue").DefineComponent<{
    readonly vertical: BooleanConstructor;
    readonly size: StringConstructor;
    readonly move: NumberConstructor;
    readonly ratio: import("../../../utils/props").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly always: BooleanConstructor;
}, {
    instance: import("vue").Ref<HTMLDivElement | undefined>;
    thumb: import("vue").Ref<HTMLDivElement | undefined>;
    bar: import("vue").ComputedRef<{
        offset: string;
        scroll: string;
        scrollSize: string;
        size: string;
        key: string;
        axis: string;
        client: string;
        direction: string;
    } | {
        offset: string;
        scroll: string;
        scrollSize: string;
        size: string;
        key: string;
        axis: string;
        client: string;
        direction: string;
    }>;
    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    visible: import("vue").Ref<boolean>;
    clickTrackHandler: (e: MouseEvent) => void;
    clickThumbHandler: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly vertical?: unknown;
    readonly size?: unknown;
    readonly move?: unknown;
    readonly ratio?: unknown;
    readonly always?: unknown;
} & {
    always: boolean;
    vertical: boolean;
    ratio: number;
} & {
    size?: string | undefined;
    move?: number | undefined;
}>, {
    always: boolean;
    vertical: boolean;
}>;
export default _default;
