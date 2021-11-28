import { defineComponent, computed } from 'vue';

var script = defineComponent({
  name: "ElHeader",
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(props) {
    return {
      style: computed(() => props.height ? {
        "--el-header-height": props.height
      } : {})
    };
  }
});

export { script as default };
//# sourceMappingURL=header.vue_vue_type_script_lang.mjs.map
