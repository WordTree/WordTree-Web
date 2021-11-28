import { defineComponent, provide, h } from 'vue';

var script = defineComponent({
  name: "ElTimeline",
  setup(_, ctx) {
    provide("timeline", ctx);
    return () => {
      var _a, _b;
      return h("ul", {
        class: { "el-timeline": true }
      }, (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a));
    };
  }
});

export { script as default };
//# sourceMappingURL=index.vue_vue_type_script_lang.mjs.map
