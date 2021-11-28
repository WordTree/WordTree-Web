export declare const ElRow: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly tag: import("../../utils/props").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly gutter: import("../../utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly justify: import("../../utils/props").BuildPropReturn<StringConstructor, "start", unknown, "space-around" | "space-between" | "center" | "end" | "start", unknown>;
    readonly align: import("../../utils/props").BuildPropReturn<StringConstructor, "top", unknown, "top" | "bottom" | "middle", unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly tag?: unknown;
    readonly gutter?: unknown;
    readonly justify?: unknown;
    readonly align?: unknown;
} & {
    align: import("../../utils/props").BuildPropType<StringConstructor, "top" | "bottom" | "middle", unknown>;
    justify: import("../../utils/props").BuildPropType<StringConstructor, "space-around" | "space-between" | "center" | "end" | "start", unknown>;
    tag: string;
    gutter: number;
} & {}>, {
    align: import("../../utils/props").BuildPropType<StringConstructor, "top" | "bottom" | "middle", unknown>;
    justify: import("../../utils/props").BuildPropType<StringConstructor, "space-around" | "space-between" | "center" | "end" | "start", unknown>;
    tag: string;
    gutter: number;
}>> & Record<string, any>;
export default ElRow;
export * from './src/row';
