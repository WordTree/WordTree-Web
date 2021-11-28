'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var props = require('../../../utils/props.js');

const colProps = props.buildProps({
  tag: {
    type: String,
    default: "div"
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  },
  xs: {
    type: props.definePropType([Number, Object]),
    default: () => props.mutable({})
  },
  sm: {
    type: props.definePropType([Number, Object]),
    default: () => props.mutable({})
  },
  md: {
    type: props.definePropType([Number, Object]),
    default: () => props.mutable({})
  },
  lg: {
    type: props.definePropType([Number, Object]),
    default: () => props.mutable({})
  },
  xl: {
    type: props.definePropType([Number, Object]),
    default: () => props.mutable({})
  }
});
var Col = vue.defineComponent({
  name: "ElCol",
  props: colProps,
  setup(props, { slots }) {
    const { gutter } = vue.inject("ElRow", { gutter: { value: 0 } });
    const style = vue.computed(() => {
      if (gutter.value) {
        return {
          paddingLeft: `${gutter.value / 2}px`,
          paddingRight: `${gutter.value / 2}px`
        };
      }
      return {};
    });
    const classList = vue.computed(() => {
      const classes = [];
      const pos = ["span", "offset", "pull", "push"];
      pos.forEach((prop) => {
        const size = props[prop];
        if (typeof size === "number") {
          if (prop === "span")
            classes.push(`el-col-${props[prop]}`);
          else if (size > 0)
            classes.push(`el-col-${prop}-${props[prop]}`);
        }
      });
      const sizes = ["xs", "sm", "md", "lg", "xl"];
      sizes.forEach((size) => {
        if (typeof props[size] === "number") {
          classes.push(`el-col-${size}-${props[size]}`);
        } else if (typeof props[size] === "object") {
          const sizeProps = props[size];
          Object.keys(sizeProps).forEach((prop) => {
            classes.push(prop !== "span" ? `el-col-${size}-${prop}-${sizeProps[prop]}` : `el-col-${size}-${sizeProps[prop]}`);
          });
        }
      });
      if (gutter.value) {
        classes.push("is-guttered");
      }
      return classes;
    });
    return () => vue.h(props.tag, {
      class: ["el-col", classList.value],
      style: style.value
    }, [vue.renderSlot(slots, "default")]);
  }
});

exports.colProps = colProps;
exports["default"] = Col;
//# sourceMappingURL=col.js.map
