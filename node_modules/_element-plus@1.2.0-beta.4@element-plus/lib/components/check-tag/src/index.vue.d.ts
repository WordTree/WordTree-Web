import type { ExtractPropTypes } from 'vue';
export declare const checkTagProps: {
    readonly checked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type CheckTagProps = ExtractPropTypes<typeof checkTagProps>;
declare const _default: import("vue").DefineComponent<{
    readonly checked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, {
    onChange: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:checked")[], "change" | "update:checked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly checked?: unknown;
} & {
    checked: boolean;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:checked"?: ((...args: any[]) => any) | undefined;
}, {
    checked: boolean;
}>;
export default _default;
