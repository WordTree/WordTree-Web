import { getCurrentInstance, computed, watch, onMounted } from 'vue';
import { isFunction } from '@vue/shared';
import { isBool } from '../../utils/util.mjs';
import { UPDATE_MODEL_EVENT } from '../../utils/constants.mjs';
import isServer from '../../utils/isServer.mjs';

const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": Function
};
const useModelToggleEmits = [UPDATE_MODEL_EVENT];
const useModelToggle = ({
  indicator,
  shouldHideWhenRouteChanges,
  shouldProceed,
  onShow,
  onHide
}) => {
  const { appContext, props, proxy, emit } = getCurrentInstance();
  const hasUpdateHandler = computed(() => isFunction(props["onUpdate:modelValue"]));
  const isModelBindingAbsent = computed(() => props.modelValue === null);
  const doShow = () => {
    if (indicator.value === true) {
      return;
    }
    indicator.value = true;
    if (isFunction(onShow)) {
      onShow();
    }
  };
  const doHide = () => {
    if (indicator.value === false) {
      return;
    }
    indicator.value = false;
    if (isFunction(onHide)) {
      onHide();
    }
  };
  const show = () => {
    if (props.disabled === true || isFunction(shouldProceed) && !shouldProceed())
      return;
    const shouldEmit = hasUpdateHandler.value && !isServer;
    if (shouldEmit) {
      emit(UPDATE_MODEL_EVENT, true);
    }
    if (isModelBindingAbsent.value || !shouldEmit) {
      doShow();
    }
  };
  const hide = () => {
    if (props.disabled === true || isServer)
      return;
    const shouldEmit = hasUpdateHandler.value && !isServer;
    if (shouldEmit) {
      emit(UPDATE_MODEL_EVENT, false);
    }
    if (isModelBindingAbsent.value || !shouldEmit) {
      doHide();
    }
  };
  const onChange = (val) => {
    if (!isBool(val))
      return;
    if (props.disabled && val) {
      if (hasUpdateHandler.value) {
        emit(UPDATE_MODEL_EVENT, false);
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
  watch(() => props.modelValue, onChange);
  if (shouldHideWhenRouteChanges && appContext.config.globalProperties.$route !== void 0) {
    watch(() => ({
      ...proxy.$route
    }), () => {
      if (shouldHideWhenRouteChanges.value && indicator.value) {
        hide();
      }
    });
  }
  onMounted(() => {
    onChange(props.modelValue);
  });
  return {
    hide,
    show,
    toggle
  };
};

export { useModelToggle, useModelToggleEmits, useModelToggleProps };
//# sourceMappingURL=index.mjs.map
