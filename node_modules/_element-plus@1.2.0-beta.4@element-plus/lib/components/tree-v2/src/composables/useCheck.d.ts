import type { Ref } from 'vue';
import type { TreeProps, TreeKey, TreeNode, Tree, TreeNodeData } from '../types';
export declare function useCheck(props: TreeProps, tree: Ref<Tree | undefined>): {
    updateCheckedKeys: () => void;
    toggleCheckbox: (node: TreeNode, isChecked: boolean, nodeClick?: boolean) => void;
    isChecked: (node: TreeNode) => boolean;
    isIndeterminate: (node: TreeNode) => boolean;
    getCheckedKeys: (leafOnly?: boolean) => TreeKey[];
    getCheckedNodes: (leafOnly?: boolean) => TreeNodeData[];
    getHalfCheckedKeys: () => TreeKey[];
    getHalfCheckedNodes: () => TreeNodeData[];
    setChecked: (key: TreeKey, isChecked: boolean) => void;
    setCheckedKeys: (keys: TreeKey[]) => void;
};
