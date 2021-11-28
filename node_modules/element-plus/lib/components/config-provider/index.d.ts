export declare const ElConfigProvider: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    button: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<import("..").ButtonConfigContext>, import("../../utils/types").Mutable<{
        readonly autoInsertSpace: true;
    }>, false, never, never>;
    locale: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<import("../../locale").Language>, never, false, never, never>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    button?: unknown;
    locale?: unknown;
} & {
    button: import("..").ButtonConfigContext;
} & {
    locale?: import("../../locale").Language | undefined;
}>, {
    button: import("..").ButtonConfigContext;
    locale: import("../../locale").Language;
}>> & Record<string, any>;
export default ElConfigProvider;
