'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isEqual = require('lodash/isEqual');
var node = require('./node.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var isEqual__default = /*#__PURE__*/_interopDefaultLegacy(isEqual);

const flatNodes = (nodes, leafOnly) => {
  return nodes.reduce((res, node) => {
    if (node.isLeaf) {
      res.push(node);
    } else {
      !leafOnly && res.push(node);
      res = res.concat(flatNodes(node.children, leafOnly));
    }
    return res;
  }, []);
};
class Store {
  constructor(data, config) {
    this.config = config;
    const nodes = (data || []).map((nodeData) => new node["default"](nodeData, this.config));
    this.nodes = nodes;
    this.allNodes = flatNodes(nodes, false);
    this.leafNodes = flatNodes(nodes, true);
  }
  getNodes() {
    return this.nodes;
  }
  getFlattedNodes(leafOnly) {
    return leafOnly ? this.leafNodes : this.allNodes;
  }
  appendNode(nodeData, parentNode) {
    const node$1 = parentNode ? parentNode.appendChild(nodeData) : new node["default"](nodeData, this.config);
    if (!parentNode)
      this.nodes.push(node$1);
    this.allNodes.push(node$1);
    node$1.isLeaf && this.leafNodes.push(node$1);
  }
  appendNodes(nodeDataList, parentNode) {
    nodeDataList.forEach((nodeData) => this.appendNode(nodeData, parentNode));
  }
  getNodeByValue(value, leafOnly = false) {
    if (!value && value !== 0)
      return null;
    const nodes = this.getFlattedNodes(leafOnly).filter((node) => isEqual__default["default"](node.value, value) || isEqual__default["default"](node.pathValues, value));
    return nodes[0] || null;
  }
  getSameNode(node) {
    if (!node)
      return null;
    const nodes = this.getFlattedNodes(false).filter(({ value, level }) => isEqual__default["default"](node.value, value) && node.level === level);
    return nodes[0] || null;
  }
}

exports["default"] = Store;
//# sourceMappingURL=store.js.map
