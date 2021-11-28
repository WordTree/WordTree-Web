export declare const ElBacktop: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly visibilityHeight: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
    readonly target: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly right: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly bottom: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
}, {
    visible: import("vue").Ref<boolean>;
    styleBottom: import("vue").ComputedRef<string>;
    styleRight: import("vue").ComputedRef<string>;
    handleClick: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly visibilityHeight?: unknown;
    readonly target?: unknown;
    readonly right?: unknown;
    readonly bottom?: unknown;
} & {
    right: number;
    bottom: number;
    target: string;
    visibilityHeight: number;
} & {}> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    right: number;
    bottom: number;
    target: string;
    visibilityHeight: number;
}>> & Record<string, any>;
export default ElBacktop;
export * from './src/backtop';
