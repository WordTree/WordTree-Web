import { ref, watch, nextTick, computed } from 'vue';

const useTransitionProps = {
  transitionDuration: {
    type: Number,
    default: 0.3
  },
  transitionShow: String,
  transitionHide: String
};
const useTransition = (props, indicator) => {
  const transitionState = ref(indicator.value);
  watch(indicator, (val) => {
    nextTick(() => transitionState.value = val);
  });
  return {
    transition: computed(() => {
      return `el-transition--${transitionState.value ? props.transitionShow : props.transitionHide}`;
    }),
    transitionStyle: computed(() => `--el-transition-duration: ${props.transitionDuration}s`)
  };
};

export { useTransition, useTransitionProps };
//# sourceMappingURL=index.mjs.map
