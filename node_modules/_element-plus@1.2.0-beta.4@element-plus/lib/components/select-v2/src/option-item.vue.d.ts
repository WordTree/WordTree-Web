declare const _default: import("vue").DefineComponent<{
    data: ArrayConstructor;
    disabled: BooleanConstructor;
    hovering: BooleanConstructor;
    item: ObjectConstructor;
    index: NumberConstructor;
    style: ObjectConstructor;
    selected: BooleanConstructor;
    created: BooleanConstructor;
}, {
    hoverItem: () => void;
    selectOptionClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "hover")[], "select" | "hover", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    disabled?: unknown;
    hovering?: unknown;
    item?: unknown;
    index?: unknown;
    style?: unknown;
    selected?: unknown;
    created?: unknown;
} & {
    disabled: boolean;
    created: boolean;
    hovering: boolean;
    selected: boolean;
} & {
    index?: number | undefined;
    data?: unknown[] | undefined;
    style?: Record<string, any> | undefined;
    item?: Record<string, any> | undefined;
}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onHover?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    created: boolean;
    hovering: boolean;
    selected: boolean;
}>;
export default _default;
