declare const _default: import("vue").DefineComponent<{
    readonly node: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<import("./types").TreeNode>, () => import("../../../utils/types").Mutable<{
        readonly key: -1;
        readonly level: -1;
        readonly data: {};
    }>, unknown, unknown, unknown>;
    readonly expanded: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly checked: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly indeterminate: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showCheckbox: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly disabled: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly current: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly hiddenExpandIcon: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
}, {
    indent: import("vue").ComputedRef<number>;
    icon: import("vue").ComputedRef<string>;
    handleClick: () => void;
    handleExpandIconClick: () => void;
    handleCheckChange: (value: boolean) => void;
    handleContextMenu: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (node: import("./types").TreeNode) => boolean;
    toggle: (node: import("./types").TreeNode) => boolean;
    check: (node: import("./types").TreeNode, checked: boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly node?: unknown;
    readonly expanded?: unknown;
    readonly checked?: unknown;
    readonly indeterminate?: unknown;
    readonly showCheckbox?: unknown;
    readonly disabled?: unknown;
    readonly current?: unknown;
    readonly hiddenExpandIcon?: unknown;
} & {
    disabled: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    expanded: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    indeterminate: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    checked: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    node: import("./types").TreeNode;
    showCheckbox: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    current: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    hiddenExpandIcon: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
} & {}> & {
    onClick?: ((node: import("./types").TreeNode) => any) | undefined;
    onCheck?: ((node: import("./types").TreeNode, checked: boolean) => any) | undefined;
    onToggle?: ((node: import("./types").TreeNode) => any) | undefined;
}, {
    disabled: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    expanded: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    indeterminate: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    checked: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    node: import("./types").TreeNode;
    showCheckbox: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    current: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    hiddenExpandIcon: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
}>;
export default _default;
