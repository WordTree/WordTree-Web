import { ref, computed, watch, nextTick, onMounted } from 'vue';
import { useTimeoutFn } from '@vueuse/core';
import '../../../hooks/index.mjs';
import { UPDATE_MODEL_EVENT } from '../../../utils/constants.mjs';
import isServer from '../../../utils/isServer.mjs';
import PopupManager from '../../../utils/popup-manager.mjs';
import { isNumber } from '../../../utils/util.mjs';
import useLockScreen from '../../../hooks/use-lockscreen/index.mjs';
import useModal from '../../../hooks/use-modal/index.mjs';
import useRestoreActive from '../../../hooks/use-restore-active/index.mjs';

const useDialog = (props, { emit }, targetRef) => {
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex = ref(props.zIndex || PopupManager.nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const normalizeWidth = computed(() => isNumber(props.width) ? `${props.width}px` : props.width);
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--el-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = normalizeWidth.value;
      }
    }
    return style2;
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ;
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ;
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function hide(shouldCancel) {
    if (shouldCancel)
      return;
    closed.value = true;
    visible.value = false;
  }
  function handleClose() {
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (isServer) {
      return;
    }
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  if (props.lockScroll) {
    useLockScreen(visible);
  }
  if (props.closeOnPressEscape) {
    useModal({
      handleClose
    }, visible);
  }
  useRestoreActive(visible);
  watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      emit("open");
      zIndex.value = props.zIndex ? zIndex.value++ : PopupManager.nextZIndex();
      nextTick(() => {
        if (targetRef.value) {
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      rendered.value = true;
      open();
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    closed,
    style,
    rendered,
    visible,
    zIndex
  };
};

export { useDialog };
//# sourceMappingURL=use-dialog.mjs.map
