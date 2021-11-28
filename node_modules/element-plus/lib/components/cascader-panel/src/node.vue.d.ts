import type { default as CascaderNode } from './node';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    node: {
        type: PropType<CascaderNode>;
        required: true;
    };
    menuId: StringConstructor;
}, {
    panel: import("./types").ElCascaderPanelContext;
    isHoverMenu: import("vue").ComputedRef<boolean>;
    multiple: import("vue").ComputedRef<boolean>;
    checkStrictly: import("vue").ComputedRef<boolean>;
    checkedNodeId: import("vue").ComputedRef<number>;
    isDisabled: import("vue").ComputedRef<boolean>;
    isLeaf: import("vue").ComputedRef<boolean>;
    expandable: import("vue").ComputedRef<boolean>;
    inExpandingPath: import("vue").ComputedRef<boolean>;
    inCheckedPath: import("vue").ComputedRef<boolean>;
    handleHoverExpand: (e: Event) => void;
    handleExpand: () => void;
    handleClick: () => void;
    handleCheck: (checked: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "expand"[], "expand", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    node?: unknown;
    menuId?: unknown;
} & {
    node: CascaderNode;
} & {
    menuId?: string | undefined;
}> & {
    onExpand?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
