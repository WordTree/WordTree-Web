'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../hooks/index.js');
var constants = require('../../../utils/constants.js');
var isServer = require('../../../utils/isServer.js');
var popupManager = require('../../../utils/popup-manager.js');
var util = require('../../../utils/util.js');
var index = require('../../../hooks/use-lockscreen/index.js');
var index$1 = require('../../../hooks/use-modal/index.js');
var index$2 = require('../../../hooks/use-restore-active/index.js');

const useDialog = (props, { emit }, targetRef) => {
  const visible = vue.ref(false);
  const closed = vue.ref(false);
  const rendered = vue.ref(false);
  const zIndex = vue.ref(props.zIndex || popupManager["default"].nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const normalizeWidth = vue.computed(() => util.isNumber(props.width) ? `${props.width}px` : props.width);
  const style = vue.computed(() => {
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
    emit(constants.UPDATE_MODEL_EVENT, false);
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
      ({ stop: openTimer } = core.useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ;
      ({ stop: closeTimer } = core.useTimeoutFn(() => doClose(), props.closeDelay));
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
    if (isServer["default"]) {
      return;
    }
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  if (props.lockScroll) {
    index["default"](visible);
  }
  if (props.closeOnPressEscape) {
    index$1["default"]({
      handleClose
    }, visible);
  }
  index$2["default"](visible);
  vue.watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      emit("open");
      zIndex.value = props.zIndex ? zIndex.value++ : popupManager["default"].nextZIndex();
      vue.nextTick(() => {
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
  vue.onMounted(() => {
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

exports.useDialog = useDialog;
//# sourceMappingURL=use-dialog.js.map
