'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const NODE_KEY = "$treeNodeId";
const markNodeData = function(node, data) {
  if (!data || data[NODE_KEY])
    return;
  Object.defineProperty(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false
  });
};
const getNodeKey = function(key, data) {
  if (!key)
    return data[NODE_KEY];
  return data[key];
};

exports.NODE_KEY = NODE_KEY;
exports.getNodeKey = getNodeKey;
exports.markNodeData = markNodeData;
//# sourceMappingURL=util.js.map
