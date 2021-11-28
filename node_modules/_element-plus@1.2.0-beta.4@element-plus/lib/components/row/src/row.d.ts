import type { ExtractPropTypes } from 'vue';
export declare const rowProps: {
    readonly tag: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly gutter: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly justify: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "start", unknown, "space-around" | "space-between" | "center" | "end" | "start", unknown>;
    readonly align: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "top", unknown, "top" | "bottom" | "middle", unknown>;
};
export declare type RowProps = ExtractPropTypes<typeof rowProps>;
declare const _default: import("vue").DefineComponent<{
    readonly tag: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly gutter: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly justify: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "start", unknown, "space-around" | "space-between" | "center" | "end" | "start", unknown>;
    readonly align: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "top", unknown, "top" | "bottom" | "middle", unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly tag?: unknown;
    readonly gutter?: unknown;
    readonly justify?: unknown;
    readonly align?: unknown;
} & {
    align: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "top" | "bottom" | "middle", unknown>;
    justify: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "space-around" | "space-between" | "center" | "end" | "start", unknown>;
    tag: string;
    gutter: number;
} & {}>, {
    align: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "top" | "bottom" | "middle", unknown>;
    justify: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "space-around" | "space-between" | "center" | "end" | "start", unknown>;
    tag: string;
    gutter: number;
}>;
export default _default;
