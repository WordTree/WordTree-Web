declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    span: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    labelAlign: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    labelClassName: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label?: unknown;
    span?: unknown;
    width?: unknown;
    minWidth?: unknown;
    align?: unknown;
    labelAlign?: unknown;
    className?: unknown;
    labelClassName?: unknown;
} & {
    label: string;
    span: number;
    width: string | number;
    align: string;
    minWidth: string | number;
    labelAlign: string;
    className: string;
    labelClassName: string;
} & {}>, {
    label: string;
    span: number;
    width: string | number;
    align: string;
    minWidth: string | number;
    labelAlign: string;
    className: string;
    labelClassName: string;
}>;
export default _default;
