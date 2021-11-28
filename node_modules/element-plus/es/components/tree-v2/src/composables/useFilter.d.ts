import type { Ref } from 'vue';
import type { TreeProps, TreeKey, TreeNode, Tree } from '../types';
export declare function useFilter(props: TreeProps, tree: Ref<Tree | undefined>): {
    hiddenExpandIconKeySet: Ref<Set<TreeKey>>;
    hiddenNodeKeySet: Ref<Set<TreeKey>>;
    doFilter: (query: string) => Set<TreeKey> | undefined;
    isForceHiddenExpandIcon: (node: TreeNode) => boolean;
};
