'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ElTimeline",
  setup(_, ctx) {
    vue.provide("timeline", ctx);
    return () => {
      var _a, _b;
      return vue.h("ul", {
        class: { "el-timeline": true }
      }, (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a));
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue_type_script_lang.js.map
