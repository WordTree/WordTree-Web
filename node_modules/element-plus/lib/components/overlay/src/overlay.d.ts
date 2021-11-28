import type { ExtractPropTypes } from 'vue';
import type { ZIndexProperty } from 'csstype';
export declare const overlayProps: {
    readonly mask: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly customMaskEvent: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly overlayClass: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<ZIndexProperty>, unknown, unknown, unknown, unknown>;
};
export declare type OverlayProps = ExtractPropTypes<typeof overlayProps>;
export declare const overlayEmits: {
    click: (evt: MouseEvent) => boolean;
};
export declare type OverlayEmits = typeof overlayEmits;
declare const _default: import("vue").DefineComponent<{
    readonly mask: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly customMaskEvent: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly overlayClass: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<ZIndexProperty>, unknown, unknown, unknown, unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly mask?: unknown;
    readonly customMaskEvent?: unknown;
    readonly overlayClass?: unknown;
    readonly zIndex?: unknown;
} & {
    mask: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    customMaskEvent: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
} & {
    zIndex?: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<ZIndexProperty>, unknown, unknown> | undefined;
    overlayClass?: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown> | undefined;
}> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    mask: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    zIndex: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<ZIndexProperty>, unknown, unknown>;
    customMaskEvent: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    overlayClass: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown>;
}>;
export default _default;
