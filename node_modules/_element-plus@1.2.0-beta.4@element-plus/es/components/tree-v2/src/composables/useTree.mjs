import { ref, shallowRef, watch, computed, nextTick } from 'vue';
import { TreeOptionsEnum, NODE_CLICK, CURRENT_CHANGE, NODE_EXPAND, NODE_COLLAPSE } from '../virtual-tree.mjs';
import { useCheck } from './useCheck.mjs';
import { useFilter } from './useFilter.mjs';

function useTree(props, emit) {
  const expandedKeySet = ref(new Set(props.defaultExpandedKeys));
  const currentKey = ref();
  const tree = shallowRef();
  watch(() => props.currentNodeKey, (key) => {
    currentKey.value = key;
  }, {
    immediate: true
  });
  watch(() => props.data, (data) => {
    setData(data);
  }, {
    immediate: true
  });
  const {
    isIndeterminate,
    isChecked,
    toggleCheckbox,
    getCheckedKeys,
    getCheckedNodes,
    getHalfCheckedKeys,
    getHalfCheckedNodes,
    setChecked,
    setCheckedKeys
  } = useCheck(props, tree);
  const { doFilter, hiddenNodeKeySet, isForceHiddenExpandIcon } = useFilter(props, tree);
  const valueKey = computed(() => {
    var _a;
    return ((_a = props.props) == null ? void 0 : _a.value) || TreeOptionsEnum.KEY;
  });
  const childrenKey = computed(() => {
    var _a;
    return ((_a = props.props) == null ? void 0 : _a.children) || TreeOptionsEnum.CHILDREN;
  });
  const disabledKey = computed(() => {
    var _a;
    return ((_a = props.props) == null ? void 0 : _a.disabled) || TreeOptionsEnum.DISABLED;
  });
  const labelKey = computed(() => {
    var _a;
    return ((_a = props.props) == null ? void 0 : _a.label) || TreeOptionsEnum.LABEL;
  });
  const flattenTree = computed(() => {
    const expandedKeys = expandedKeySet.value;
    const hiddenKeys = hiddenNodeKeySet.value;
    const flattenNodes = [];
    const nodes = tree.value && tree.value.treeNodes || [];
    function traverse() {
      const stack = [];
      for (let i = nodes.length - 1; i >= 0; --i) {
        stack.push(nodes[i]);
      }
      while (stack.length) {
        const node = stack.pop();
        if (!node)
          continue;
        if (!hiddenKeys.has(node.key)) {
          flattenNodes.push(node);
        }
        if (expandedKeys.has(node.key)) {
          const children = node.children;
          if (children) {
            const length = children.length;
            for (let i = length - 1; i >= 0; --i) {
              stack.push(children[i]);
            }
          }
        }
      }
    }
    traverse();
    return flattenNodes;
  });
  const isNotEmpty = computed(() => {
    return flattenTree.value.length > 0;
  });
  function createTree(data) {
    const treeNodeMap = /* @__PURE__ */ new Map();
    const levelTreeNodeMap = /* @__PURE__ */ new Map();
    let maxLevel = 1;
    function traverse(nodes, level = 1, parent = void 0) {
      var _a;
      const siblings = [];
      for (let index = 0; index < nodes.length; ++index) {
        const rawNode = nodes[index];
        const value = getKey(rawNode);
        const node = {
          level,
          key: value,
          data: rawNode
        };
        node.label = getLabel(rawNode);
        node.parent = parent;
        const children = getChildren(rawNode);
        node.disabled = getDisabled(rawNode);
        node.isLeaf = !children || children.length === 0;
        if (children && children.length) {
          node.children = traverse(children, level + 1, node);
        }
        siblings.push(node);
        treeNodeMap.set(value, node);
        if (!levelTreeNodeMap.has(level)) {
          levelTreeNodeMap.set(level, []);
        }
        (_a = levelTreeNodeMap.get(level)) == null ? void 0 : _a.push(node);
      }
      if (level > maxLevel) {
        maxLevel = level;
      }
      return siblings;
    }
    const treeNodes = traverse(data);
    return {
      treeNodeMap,
      levelTreeNodeMap,
      maxLevel,
      treeNodes
    };
  }
  function filter(query) {
    const keys = doFilter(query);
    if (keys) {
      expandedKeySet.value = keys;
    }
  }
  function getChildren(node) {
    return node[childrenKey.value];
  }
  function getKey(node) {
    if (!node) {
      return "";
    }
    return node[valueKey.value];
  }
  function getDisabled(node) {
    return node[disabledKey.value];
  }
  function getLabel(node) {
    return node[labelKey.value];
  }
  function toggleExpand(node) {
    const expandedKeys = expandedKeySet.value;
    if (expandedKeys.has(node.key)) {
      collapse(node);
    } else {
      expand(node);
    }
  }
  function handleNodeClick(node) {
    emit(NODE_CLICK, node.data, node);
    handleCurrentChange(node);
    if (props.expandOnClickNode) {
      toggleExpand(node);
    }
    if (props.showCheckbox && props.checkOnClickNode && !node.disabled) {
      toggleCheckbox(node, !isChecked(node), true);
    }
  }
  function handleCurrentChange(node) {
    if (!isCurrent(node)) {
      currentKey.value = node.key;
      emit(CURRENT_CHANGE, node.data, node);
    }
  }
  function handleNodeCheck(node, checked) {
    toggleCheckbox(node, checked);
  }
  function expand(node) {
    const keySet = expandedKeySet.value;
    if ((tree == null ? void 0 : tree.value) && props.accordion) {
      const { treeNodeMap } = tree.value;
      keySet.forEach((key) => {
        const node2 = treeNodeMap.get(key);
        if (node2 && node2.level === node2.level) {
          keySet.delete(key);
        }
      });
    }
    keySet.add(node.key);
    emit(NODE_EXPAND, node.data, node);
  }
  function collapse(node) {
    expandedKeySet.value.delete(node.key);
    emit(NODE_COLLAPSE, node.data, node);
  }
  function isExpanded(node) {
    return expandedKeySet.value.has(node.key);
  }
  function isDisabled(node) {
    return !!node.disabled;
  }
  function isCurrent(node) {
    const current = currentKey.value;
    return !!current && current === node.key;
  }
  function getCurrentNode() {
    var _a, _b;
    if (!currentKey.value)
      return void 0;
    return (_b = (_a = tree == null ? void 0 : tree.value) == null ? void 0 : _a.treeNodeMap.get(currentKey.value)) == null ? void 0 : _b.data;
  }
  function getCurrentKey() {
    return currentKey.value;
  }
  function setCurrentKey(key) {
    currentKey.value = key;
  }
  function setData(data) {
    nextTick(() => tree.value = createTree(data));
  }
  return {
    tree,
    flattenTree,
    isNotEmpty,
    getKey,
    getChildren,
    toggleExpand,
    toggleCheckbox,
    isExpanded,
    isChecked,
    isIndeterminate,
    isDisabled,
    isCurrent,
    isForceHiddenExpandIcon,
    handleNodeClick,
    handleNodeCheck,
    getCurrentNode,
    getCurrentKey,
    setCurrentKey,
    getCheckedKeys,
    getCheckedNodes,
    getHalfCheckedKeys,
    getHalfCheckedNodes,
    setChecked,
    setCheckedKeys,
    filter,
    setData
  };
}

export { useTree };
//# sourceMappingURL=useTree.mjs.map
