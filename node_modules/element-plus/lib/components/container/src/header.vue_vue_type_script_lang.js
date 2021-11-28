'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ElHeader",
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(props) {
    return {
      style: vue.computed(() => props.height ? {
        "--el-header-height": props.height
      } : {})
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=header.vue_vue_type_script_lang.js.map
