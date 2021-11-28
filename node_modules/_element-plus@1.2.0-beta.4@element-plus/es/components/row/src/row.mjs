import { defineComponent, computed, provide, h } from 'vue';
import { buildProps } from '../../../utils/props.mjs';

const rowProps = buildProps({
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
var Row = defineComponent({
  name: "ElRow",
  props: rowProps,
  setup(props, { slots }) {
    const gutter = computed(() => props.gutter);
    provide("ElRow", {
      gutter
    });
    const style = computed(() => {
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
      return h(props.tag, {
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

export { Row as default, rowProps };
//# sourceMappingURL=row.mjs.map
