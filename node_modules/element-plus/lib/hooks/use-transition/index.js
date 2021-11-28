'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const useTransitionProps = {
  transitionDuration: {
    type: Number,
    default: 0.3
  },
  transitionShow: String,
  transitionHide: String
};
const useTransition = (props, indicator) => {
  const transitionState = vue.ref(indicator.value);
  vue.watch(indicator, (val) => {
    vue.nextTick(() => transitionState.value = val);
  });
  return {
    transition: vue.computed(() => {
      return `el-transition--${transitionState.value ? props.transitionShow : props.transitionHide}`;
    }),
    transitionStyle: vue.computed(() => `--el-transition-duration: ${props.transitionDuration}s`)
  };
};

exports.useTransition = useTransition;
exports.useTransitionProps = useTransitionProps;
//# sourceMappingURL=index.js.map
