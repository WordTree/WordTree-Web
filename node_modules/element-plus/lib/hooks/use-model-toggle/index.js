'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var util = require('../../utils/util.js');
var constants = require('../../utils/constants.js');
var isServer = require('../../utils/isServer.js');

const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": Function
};
const useModelToggleEmits = [constants.UPDATE_MODEL_EVENT];
const useModelToggle = ({
  indicator,
  shouldHideWhenRouteChanges,
  shouldProceed,
  onShow,
  onHide
}) => {
  const { appContext, props, proxy, emit } = vue.getCurrentInstance();
  const hasUpdateHandler = vue.computed(() => shared.isFunction(props["onUpdate:modelValue"]));
  const isModelBindingAbsent = vue.computed(() => props.modelValue === null);
  const doShow = () => {
    if (indicator.value === true) {
      return;
    }
    indicator.value = true;
    if (shared.isFunction(onShow)) {
      onShow();
    }
  };
  const doHide = () => {
    if (indicator.value === false) {
      return;
    }
    indicator.value = false;
    if (shared.isFunction(onHide)) {
      onHide();
    }
  };
  const show = () => {
    if (props.disabled === true || shared.isFunction(shouldProceed) && !shouldProceed())
      return;
    const shouldEmit = hasUpdateHandler.value && !isServer["default"];
    if (shouldEmit) {
      emit(constants.UPDATE_MODEL_EVENT, true);
    }
    if (isModelBindingAbsent.value || !shouldEmit) {
      doShow();
    }
  };
  const hide = () => {
    if (props.disabled === true || isServer["default"])
      return;
    const shouldEmit = hasUpdateHandler.value && !isServer["default"];
    if (shouldEmit) {
      emit(constants.UPDATE_MODEL_EVENT, false);
    }
    if (isModelBindingAbsent.value || !shouldEmit) {
      doHide();
    }
  };
  const onChange = (val) => {
    if (!util.isBool(val))
      return;
    if (props.disabled && val) {
      if (hasUpdateHandler.value) {
        emit(constants.UPDATE_MODEL_EVENT, false);
      }
    } else if (indicator.value !== val) {
      if (val) {
        doShow();
      } else {
        doHide();
      }
    }
  };
  const toggle = () => {
    if (indicator.value) {
      hide();
    } else {
      show();
    }
  };
  vue.watch(() => props.modelValue, onChange);
  if (shouldHideWhenRouteChanges && appContext.config.globalProperties.$route !== void 0) {
    vue.watch(() => ({
      ...proxy.$route
    }), () => {
      if (shouldHideWhenRouteChanges.value && indicator.value) {
        hide();
      }
    });
  }
  vue.onMounted(() => {
    onChange(props.modelValue);
  });
  return {
    hide,
    show,
    toggle
  };
};

exports.useModelToggle = useModelToggle;
exports.useModelToggleEmits = useModelToggleEmits;
exports.useModelToggleProps = useModelToggleProps;
//# sourceMappingURL=index.js.map
