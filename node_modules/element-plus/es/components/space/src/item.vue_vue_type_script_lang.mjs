import { defineComponent, computed } from 'vue';
import { buildProps } from '../../../utils/props.mjs';

const spaceItem = buildProps({
  prefixCls: {
    type: String,
    default: "el-space"
  }
});
var script = defineComponent({
  props: spaceItem,
  setup(props) {
    const classes = computed(() => [`${props.prefixCls}__item`]);
    return {
      classes
    };
  }
});

export { script as default };
//# sourceMappingURL=item.vue_vue_type_script_lang.mjs.map
