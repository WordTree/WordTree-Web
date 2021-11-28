import { defineComponent, computed, h } from 'vue';

var script = defineComponent({
  name: "ElMarker",
  props: {
    mark: {
      type: [String, Object],
      default: () => void 0
    }
  },
  setup(props) {
    const label = computed(() => {
      return typeof props.mark === "string" ? props.mark : props.mark.label;
    });
    return {
      label
    };
  },
  render() {
    var _a;
    return h("div", {
      class: "el-slider__marks-text",
      style: (_a = this.mark) == null ? void 0 : _a.style
    }, this.label);
  }
});

export { script as default };
//# sourceMappingURL=marker.vue_vue_type_script_lang.mjs.map
