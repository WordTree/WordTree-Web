'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var util = require('../../../utils/util.js');
var vnode = require('../../../utils/vnode.js');
var token = require('./token.js');

var DescriptionsCell = vue.defineComponent({
  name: "ElDescriptionsCell",
  props: {
    cell: {
      type: Object
    },
    tag: {
      type: String
    },
    type: {
      type: String
    }
  },
  setup() {
    const descriptions = vue.inject(token.elDescriptionsKey, {});
    return {
      descriptions
    };
  },
  render() {
    var _a, _b, _c, _d, _e, _f;
    const item = vnode.getNormalizedProps(this.cell);
    const label = ((_c = (_b = (_a = this.cell) == null ? void 0 : _a.children) == null ? void 0 : _b.label) == null ? void 0 : _c.call(_b)) || item.label;
    const content = (_f = (_e = (_d = this.cell) == null ? void 0 : _d.children) == null ? void 0 : _e.default) == null ? void 0 : _f.call(_e);
    const span = item.span;
    const align = item.align ? `is-${item.align}` : "";
    const labelAlign = item.labelAlign ? `is-${item.labelAlign}` : align;
    const className = item.className;
    const labelClassName = item.labelClassName;
    const style = {
      width: util.addUnit(item.width),
      minWidth: util.addUnit(item.minWidth)
    };
    switch (this.type) {
      case "label":
        return vue.h(this.tag, {
          style,
          class: [
            "el-descriptions__cell",
            "el-descriptions__label",
            { "is-bordered-label": this.descriptions.border },
            labelAlign,
            labelClassName
          ],
          colSpan: this.descriptions.direction === "vertical" ? span : 1
        }, label);
      case "content":
        return vue.h(this.tag, {
          style,
          class: [
            "el-descriptions__cell",
            "el-descriptions__content",
            align,
            className
          ],
          colSpan: this.descriptions.direction === "vertical" ? span : span * 2 - 1
        }, content);
      default:
        return vue.h("td", {
          style,
          class: ["el-descriptions__cell", align],
          colSpan: span
        }, [
          vue.h("span", {
            class: ["el-descriptions__label", labelClassName]
          }, label),
          vue.h("span", {
            class: ["el-descriptions__content", className]
          }, content)
        ]);
    }
  }
});

exports["default"] = DescriptionsCell;
//# sourceMappingURL=descriptions-cell.js.map
