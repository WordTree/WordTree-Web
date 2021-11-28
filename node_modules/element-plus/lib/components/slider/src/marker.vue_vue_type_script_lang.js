'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ElMarker",
  props: {
    mark: {
      type: [String, Object],
      default: () => void 0
    }
  },
  setup(props) {
    const label = vue.computed(() => {
      return typeof props.mark === "string" ? props.mark : props.mark.label;
    });
    return {
      label
    };
  },
  render() {
    var _a;
    return vue.h("div", {
      class: "el-slider__marks-text",
      style: (_a = this.mark) == null ? void 0 : _a.style
    }, this.label);
  }
});

exports["default"] = script;
//# sourceMappingURL=marker.vue_vue_type_script_lang.js.map
