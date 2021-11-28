'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ElAside",
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(props) {
    return {
      style: vue.computed(() => {
        return props.width ? { "--el-aside-width": props.width } : {};
      })
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=aside.vue_vue_type_script_lang.js.map
