'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var props = require('../../../utils/props.js');

const rowProps = props.buildProps({
  tag: {
    type: String,
    default: "div"
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    values: ["start", "center", "end", "space-around", "space-between"],
    default: "start"
  },
  align: {
    type: String,
    values: ["top", "middle", "bottom"],
    default: "top"
  }
});
var Row = vue.defineComponent({
  name: "ElRow",
  props: rowProps,
  setup(props, { slots }) {
    const gutter = vue.computed(() => props.gutter);
    vue.provide("ElRow", {
      gutter
    });
    const style = vue.computed(() => {
      const ret = {
        marginLeft: "",
        marginRight: ""
      };
      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    });
    return () => {
      var _a;
      return vue.h(props.tag, {
        class: [
          "el-row",
          props.justify !== "start" ? `is-justify-${props.justify}` : "",
          props.align !== "top" ? `is-align-${props.align}` : ""
        ],
        style: style.value
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});

exports["default"] = Row;
exports.rowProps = rowProps;
//# sourceMappingURL=row.js.map
