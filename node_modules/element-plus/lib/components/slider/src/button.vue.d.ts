declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltipClass: {
        type: StringConstructor;
        default: string;
    };
}, {
    tooltip: import("vue").Ref<null>;
    tooltipVisible: import("vue").Ref<boolean>;
    showTooltip: any;
    wrapperStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    formatValue: import("vue").ComputedRef<string | number>;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    onButtonDown: (event: MouseEvent | TouchEvent) => void;
    onLeftKeyDown: () => void;
    onRightKeyDown: () => void;
    setPosition: (newPosition: number) => Promise<void>;
    hovering: import("vue").Ref<boolean>;
    dragging: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    vertical?: unknown;
    tooltipClass?: unknown;
} & {
    modelValue: number;
    vertical: boolean;
    tooltipClass: string;
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number;
    vertical: boolean;
    tooltipClass: string;
}>;
export default _default;
