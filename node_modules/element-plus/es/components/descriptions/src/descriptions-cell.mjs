import { defineComponent, inject, h } from 'vue';
import { addUnit } from '../../../utils/util.mjs';
import { getNormalizedProps } from '../../../utils/vnode.mjs';
import { elDescriptionsKey } from './token.mjs';

var DescriptionsCell = defineComponent({
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
    const descriptions = inject(elDescriptionsKey, {});
    return {
      descriptions
    };
  },
  render() {
    var _a, _b, _c, _d, _e, _f;
    const item = getNormalizedProps(this.cell);
    const label = ((_c = (_b = (_a = this.cell) == null ? void 0 : _a.children) == null ? void 0 : _b.label) == null ? void 0 : _c.call(_b)) || item.label;
    const content = (_f = (_e = (_d = this.cell) == null ? void 0 : _d.children) == null ? void 0 : _e.default) == null ? void 0 : _f.call(_e);
    const span = item.span;
    const align = item.align ? `is-${item.align}` : "";
    const labelAlign = item.labelAlign ? `is-${item.labelAlign}` : align;
    const className = item.className;
    const labelClassName = item.labelClassName;
    const style = {
      width: addUnit(item.width),
      minWidth: addUnit(item.minWidth)
    };
    switch (this.type) {
      case "label":
        return h(this.tag, {
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
        return h(this.tag, {
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
        return h("td", {
          style,
          class: ["el-descriptions__cell", align],
          colSpan: span
        }, [
          h("span", {
            class: ["el-descriptions__label", labelClassName]
          }, label),
          h("span", {
            class: ["el-descriptions__content", className]
          }, content)
        ]);
    }
  }
});

export { DescriptionsCell as default };
//# sourceMappingURL=descriptions-cell.mjs.map
