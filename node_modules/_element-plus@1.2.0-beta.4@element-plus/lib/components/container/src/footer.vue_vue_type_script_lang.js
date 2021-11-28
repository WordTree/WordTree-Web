'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ElFooter",
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(props) {
    return {
      style: vue.computed(() => props.height ? {
        "--el-footer-height": props.height
      } : {})
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=footer.vue_vue_type_script_lang.js.map
