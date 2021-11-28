import type { InjectionKey } from 'vue';
import type { TreeNodeData } from '../../tree/src/tree.type';
import type { TreeNode, TreeKey, TreeData, TreeOptionProps, FilterMethod, CheckedInfo, TreeContext } from './types';
export declare const ROOT_TREE_INJECTION_KEY: InjectionKey<TreeContext>;
export declare enum TreeOptionsEnum {
    KEY = "id",
    LABEL = "label",
    CHILDREN = "children",
    DISABLED = "disabled"
}
export declare const enum SetOperationEnum {
    ADD = "add",
    DELETE = "delete"
}
export declare const treeProps: {
    readonly data: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<TreeData>, () => [], unknown, unknown, unknown>;
    readonly emptyText: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly height: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
    readonly props: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<TreeOptionProps>, () => import("../../../utils/types").Mutable<{
        readonly children: TreeOptionsEnum.CHILDREN;
        readonly label: TreeOptionsEnum.LABEL;
        readonly disabled: TreeOptionsEnum.DISABLED;
        readonly value: TreeOptionsEnum.KEY;
    }>, unknown, unknown, unknown>;
    readonly highlightCurrent: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showCheckbox: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly defaultCheckedKeys: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<TreeKey[]>, () => [], unknown, unknown, unknown>;
    readonly checkStrictly: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly defaultExpandedKeys: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<TreeKey[]>, () => [], unknown, unknown, unknown>;
    readonly indent: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 16, unknown, unknown, unknown>;
    readonly icon: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly expandOnClickNode: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly checkOnClickNode: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly currentNodeKey: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<TreeKey>, unknown, unknown, unknown, unknown>;
    readonly accordion: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly filterMethod: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<FilterMethod>, unknown, unknown, unknown, unknown>;
    readonly perfMode: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
};
export declare const treeNodeProps: {
    readonly node: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<TreeNode>, () => import("../../../utils/types").Mutable<{
        readonly key: -1;
        readonly level: -1;
        readonly data: {};
    }>, unknown, unknown, unknown>;
    readonly expanded: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly checked: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly indeterminate: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showCheckbox: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly disabled: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly current: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly hiddenExpandIcon: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
};
export declare const treeNodeContentProps: {
    readonly node: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<TreeNode>, unknown, true, unknown, unknown>;
};
export declare const NODE_CLICK = "node-click";
export declare const NODE_EXPAND = "node-expand";
export declare const NODE_COLLAPSE = "node-collapse";
export declare const CURRENT_CHANGE = "current-change";
export declare const NODE_CHECK = "check";
export declare const NODE_CHECK_CHANGE = "check-change";
export declare const NODE_CONTEXTMENU = "node-contextmenu";
export declare const treeEmits: {
    "node-click": (data: TreeNodeData, node: TreeNode) => TreeNode;
    "node-expand": (data: TreeNodeData, node: TreeNode) => TreeNode;
    "node-collapse": (data: TreeNodeData, node: TreeNode) => TreeNode;
    "current-change": (data: TreeNodeData, node: TreeNode) => TreeNode;
    check: (data: TreeNodeData, checkedInfo: CheckedInfo) => CheckedInfo;
    "check-change": (data: TreeNodeData, checked: boolean) => boolean;
    "node-contextmenu": (event: Event, data: TreeNodeData, node: TreeNode) => TreeNode;
};
export declare const treeNodeEmits: {
    click: (node: TreeNode) => boolean;
    toggle: (node: TreeNode) => boolean;
    check: (node: TreeNode, checked: boolean) => boolean;
};
