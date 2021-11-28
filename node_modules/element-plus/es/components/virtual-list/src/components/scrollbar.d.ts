declare const ScrollBar: import("vue").DefineComponent<{
    readonly layout: import("../../../../utils/props").BuildPropReturn<StringConstructor, "vertical", false, "horizontal" | "vertical", never>;
    readonly total: import("../../../../utils/props").BuildPropReturn<NumberConstructor, never, true, never, never>;
    readonly ratio: import("../../../../utils/props").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly clientSize: import("../../../../utils/props").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly scrollFrom: import("../../../../utils/props").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly visible: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "start-move" | "stop-move")[], "scroll" | "start-move" | "stop-move", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly layout?: unknown;
    readonly total?: unknown;
    readonly ratio?: unknown;
    readonly clientSize?: unknown;
    readonly scrollFrom?: unknown;
    readonly visible?: unknown;
} & {
    total: number;
    visible: boolean;
    layout: import("../../../../utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", never>;
    ratio: number;
    clientSize: number;
    scrollFrom: number;
} & {}> & {
    onScroll?: ((...args: any[]) => any) | undefined;
    "onStart-move"?: ((...args: any[]) => any) | undefined;
    "onStop-move"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    layout: import("../../../../utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", never>;
}>;
export default ScrollBar;
