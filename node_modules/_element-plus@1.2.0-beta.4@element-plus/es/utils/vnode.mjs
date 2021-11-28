import { isVNode, Fragment, Text, Comment, openBlock, createBlock, createCommentVNode, camelize } from 'vue';
import { hasOwn } from '@vue/shared';
import { debugWarn } from './error.mjs';

const TEMPLATE = "template";
const SCOPE = "VNode";
var PatchFlags = /* @__PURE__ */ ((PatchFlags2) => {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
  return PatchFlags2;
})(PatchFlags || {});
const isFragment = (node) => isVNode(node) && node.type === Fragment;
const isText = (node) => node.type === Text;
const isComment = (node) => node.type === Comment;
const isTemplate = (node) => node.type === TEMPLATE;
function getChildren(node, depth) {
  if (isComment(node))
    return;
  if (isFragment(node) || isTemplate(node)) {
    return depth > 0 ? getFirstValidNode(node.children, depth - 1) : void 0;
  }
  return node;
}
const isValidElementNode = (node) => isVNode(node) && !isFragment(node) && !isComment(node);
const getFirstValidNode = (nodes, maxDepth = 3) => {
  if (Array.isArray(nodes)) {
    return getChildren(nodes[0], maxDepth);
  } else {
    return getChildren(nodes, maxDepth);
  }
};
function renderIf(condition, node, props, children, patchFlag, patchProps) {
  return condition ? renderBlock(node, props, children, patchFlag, patchProps) : createCommentVNode("v-if", true);
}
function renderBlock(node, props, children, patchFlag, patchProps) {
  return openBlock(), createBlock(node, props, children, patchFlag, patchProps);
}
const getNormalizedProps = (node) => {
  if (!isVNode(node)) {
    debugWarn(SCOPE, "value must be a VNode");
    return;
  }
  const raw = node.props || {};
  const type = node.type.props || {};
  const props = {};
  Object.keys(type).forEach((key) => {
    if (hasOwn(type[key], "default")) {
      props[key] = type[key].default;
    }
  });
  Object.keys(raw).forEach((key) => {
    props[camelize(key)] = raw[key];
  });
  return props;
};

export { PatchFlags, SCOPE, getFirstValidNode, getNormalizedProps, isComment, isFragment, isTemplate, isText, isValidElementNode, renderBlock, renderIf };
//# sourceMappingURL=vnode.mjs.map
