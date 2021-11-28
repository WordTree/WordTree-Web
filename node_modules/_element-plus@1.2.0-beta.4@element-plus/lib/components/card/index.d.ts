export declare const ElCard: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly header: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly bodyStyle: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<import("../../utils/types").StyleValue>, "", unknown, unknown, unknown>;
    readonly shadow: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly header?: unknown;
    readonly bodyStyle?: unknown;
    readonly shadow?: unknown;
} & {
    header: string;
    bodyStyle: import("../../utils/types").StyleValue;
    shadow: string;
} & {}>, {
    header: string;
    bodyStyle: import("../../utils/types").StyleValue;
    shadow: string;
}>> & Record<string, any>;
export default ElCard;
export * from './src/card';
