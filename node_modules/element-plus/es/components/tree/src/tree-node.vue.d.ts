import Node from './model/node';
import type { ComponentInternalInstance, PropType } from 'vue';
import type { Nullable } from 'element-plus/es/utils/types';
import type { TreeOptionProps, TreeNodeData, RootTreeType } from './tree.type';
declare const _default: import("vue").DefineComponent<{
    node: {
        type: typeof Node;
        default: () => {};
    };
    props: {
        type: PropType<TreeOptionProps>;
        default: () => {};
    };
    accordion: BooleanConstructor;
    renderContent: FunctionConstructor;
    renderAfterExpand: BooleanConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    node$: import("vue").Ref<Nullable<HTMLElement>>;
    tree: RootTreeType | undefined;
    expanded: import("vue").Ref<boolean>;
    childNodeRendered: import("vue").Ref<boolean>;
    oldChecked: import("vue").Ref<boolean>;
    oldIndeterminate: import("vue").Ref<boolean>;
    getNodeKey: (node: Node) => any;
    getNodeClass: (node: Node) => any;
    handleSelectChange: (checked: boolean, indeterminate: boolean) => void;
    handleClick: () => void;
    handleContextMenu: (event: Event) => void;
    handleExpandIconClick: () => void;
    handleCheckChange: (value: any, ev: any) => void;
    handleChildNodeExpand: (nodeData: TreeNodeData, node: Node, instance: ComponentInternalInstance) => void;
    handleDragStart: (event: DragEvent) => void;
    handleDragOver: (event: DragEvent) => void;
    handleDrop: (event: DragEvent) => void;
    handleDragEnd: (event: DragEvent) => void;
    CaretRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "node-expand"[], "node-expand", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    node?: unknown;
    props?: unknown;
    accordion?: unknown;
    renderContent?: unknown;
    renderAfterExpand?: unknown;
    showCheckbox?: unknown;
} & {
    props: TreeOptionProps;
    node: Node;
    accordion: boolean;
    renderAfterExpand: boolean;
    showCheckbox: boolean;
} & {
    renderContent?: Function | undefined;
}> & {
    "onNode-expand"?: ((...args: any[]) => any) | undefined;
}, {
    props: TreeOptionProps;
    node: Node;
    accordion: boolean;
    renderAfterExpand: boolean;
    showCheckbox: boolean;
}>;
export default _default;
