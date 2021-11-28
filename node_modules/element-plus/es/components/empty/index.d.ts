export declare const ElEmpty: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly image: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly imageSize: NumberConstructor;
    readonly description: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}, {
    emptyDescription: import("vue").ComputedRef<string>;
    imageStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly image?: unknown;
    readonly imageSize?: unknown;
    readonly description?: unknown;
} & {
    image: string;
    description: string;
} & {
    imageSize?: number | undefined;
}>, {
    image: string;
    description: string;
}>> & Record<string, any>;
export default ElEmpty;
export * from './src/empty';
