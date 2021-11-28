import { defineComponent, computed } from 'vue';

var script = defineComponent({
  name: "ElFooter",
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(props) {
    return {
      style: computed(() => props.height ? {
        "--el-footer-height": props.height
      } : {})
    };
  }
});

export { script as default };
//# sourceMappingURL=footer.vue_vue_type_script_lang.mjs.map
