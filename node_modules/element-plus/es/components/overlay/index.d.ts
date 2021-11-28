export declare const ElOverlay: import("vue").DefineComponent<{
    readonly mask: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly customMaskEvent: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly overlayClass: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown, unknown, unknown>;
    readonly zIndex: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<import("csstype").ZIndexProperty>, unknown, unknown, unknown, unknown>;
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
    mask: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    customMaskEvent: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
} & {
    zIndex?: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<import("csstype").ZIndexProperty>, unknown, unknown> | undefined;
    overlayClass?: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown> | undefined;
}> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    mask: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    zIndex: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<import("csstype").ZIndexProperty>, unknown, unknown>;
    customMaskEvent: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    overlayClass: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown>;
}>;
export default ElOverlay;
export * from './src/overlay';
