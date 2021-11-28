import { defineComponent, ref, computed } from 'vue';
import { ElIcon } from '../../icon/index.mjs';
import { TypeComponents, TypeComponentsMap } from '../../../utils/icon.mjs';
import { alertProps, alertEmits } from './alert.mjs';

var script = defineComponent({
  name: "ElAlert",
  components: {
    ElIcon,
    ...TypeComponents
  },
  props: alertProps,
  emits: alertEmits,
  setup(props, { emit, slots }) {
    const visible = ref(true);
    const typeClass = computed(() => `el-alert--${props.type}`);
    const iconComponent = computed(() => TypeComponentsMap[props.type] || TypeComponentsMap["info"]);
    const isBigIcon = computed(() => props.description || slots.default ? "is-big" : "");
    const isBoldTitle = computed(() => props.description || slots.default ? "is-bold" : "");
    const close = (evt) => {
      visible.value = false;
      emit("close", evt);
    };
    return {
      visible,
      typeClass,
      iconComponent,
      isBigIcon,
      isBoldTitle,
      close
    };
  }
});

export { script as default };
//# sourceMappingURL=alert.vue_vue_type_script_lang.mjs.map
