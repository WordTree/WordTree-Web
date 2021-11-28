import type { ExtractPropTypes } from 'vue';
export declare const subMenuProps: {
    readonly index: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, unknown, true, unknown, unknown>;
    readonly showTimeout: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly hideTimeout: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly popperClass: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly popperAppendToBody: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
};
export declare type SubMenuProps = ExtractPropTypes<typeof subMenuProps>;
declare const _default: import("vue").DefineComponent<{
    readonly index: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, unknown, true, unknown, unknown>;
    readonly showTimeout: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly hideTimeout: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly popperClass: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly popperAppendToBody: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly index?: unknown;
    readonly showTimeout?: unknown;
    readonly hideTimeout?: unknown;
    readonly popperClass?: unknown;
    readonly disabled?: unknown;
    readonly popperAppendToBody?: unknown;
} & {
    disabled: boolean;
    index: string;
    showTimeout: number;
    hideTimeout: number;
} & {
    popperClass?: string | undefined;
    popperAppendToBody?: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
}>, {
    disabled: boolean;
    popperAppendToBody: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showTimeout: number;
    hideTimeout: number;
}>;
export default _default;
