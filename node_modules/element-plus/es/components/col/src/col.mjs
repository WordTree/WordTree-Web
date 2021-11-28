import { defineComponent, inject, computed, h, renderSlot } from 'vue';
import { buildProps, definePropType, mutable } from '../../../utils/props.mjs';

const colProps = buildProps({
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
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  sm: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  md: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  lg: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  xl: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  }
});
var Col = defineComponent({
  name: "ElCol",
  props: colProps,
  setup(props, { slots }) {
    const { gutter } = inject("ElRow", { gutter: { value: 0 } });
    const style = computed(() => {
      if (gutter.value) {
        return {
          paddingLeft: `${gutter.value / 2}px`,
          paddingRight: `${gutter.value / 2}px`
        };
      }
      return {};
    });
    const classList = computed(() => {
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
    return () => h(props.tag, {
      class: ["el-col", classList.value],
      style: style.value
    }, [renderSlot(slots, "default")]);
  }
});

export { colProps, Col as default };
//# sourceMappingURL=col.mjs.map
