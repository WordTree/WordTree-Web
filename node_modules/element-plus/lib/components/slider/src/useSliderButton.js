'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var debounce = require('lodash/debounce');
var constants = require('../../../utils/constants.js');
var dom = require('../../../utils/dom.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

const useTooltip = (props, formatTooltip, showTooltip) => {
  const tooltip = vue.ref(null);
  const tooltipVisible = vue.ref(false);
  const enableFormat = vue.computed(() => {
    return formatTooltip.value instanceof Function;
  });
  const formatValue = vue.computed(() => {
    return enableFormat.value && formatTooltip.value(props.modelValue) || props.modelValue;
  });
  const displayTooltip = debounce__default["default"](() => {
    showTooltip.value && (tooltipVisible.value = true);
  }, 50);
  const hideTooltip = debounce__default["default"](() => {
    showTooltip.value && (tooltipVisible.value = false);
  }, 50);
  return {
    tooltip,
    tooltipVisible,
    formatValue,
    displayTooltip,
    hideTooltip
  };
};
const useSliderButton = (props, initData, emit) => {
  const {
    disabled,
    min,
    max,
    step,
    showTooltip,
    precision,
    sliderSize,
    formatTooltip,
    emitChange,
    resetSize,
    updateDragging
  } = vue.inject("SliderProvider");
  const { tooltip, tooltipVisible, formatValue, displayTooltip, hideTooltip } = useTooltip(props, formatTooltip, showTooltip);
  const currentPosition = vue.computed(() => {
    return `${(props.modelValue - min.value) / (max.value - min.value) * 100}%`;
  });
  const wrapperStyle = vue.computed(() => {
    return props.vertical ? { bottom: currentPosition.value } : { left: currentPosition.value };
  });
  const handleMouseEnter = () => {
    initData.hovering = true;
    displayTooltip();
  };
  const handleMouseLeave = () => {
    initData.hovering = false;
    if (!initData.dragging) {
      hideTooltip();
    }
  };
  const onButtonDown = (event) => {
    if (disabled.value)
      return;
    event.preventDefault();
    onDragStart(event);
    dom.on(window, "mousemove", onDragging);
    dom.on(window, "touchmove", onDragging);
    dom.on(window, "mouseup", onDragEnd);
    dom.on(window, "touchend", onDragEnd);
    dom.on(window, "contextmenu", onDragEnd);
  };
  const onLeftKeyDown = () => {
    if (disabled.value)
      return;
    initData.newPosition = parseFloat(currentPosition.value) - step.value / (max.value - min.value) * 100;
    setPosition(initData.newPosition);
    emitChange();
  };
  const onRightKeyDown = () => {
    if (disabled.value)
      return;
    initData.newPosition = parseFloat(currentPosition.value) + step.value / (max.value - min.value) * 100;
    setPosition(initData.newPosition);
    emitChange();
  };
  const getClientXY = (event) => {
    let clientX;
    let clientY;
    if (event.type.startsWith("touch")) {
      clientY = event.touches[0].clientY;
      clientX = event.touches[0].clientX;
    } else {
      clientY = event.clientY;
      clientX = event.clientX;
    }
    return {
      clientX,
      clientY
    };
  };
  const onDragStart = (event) => {
    initData.dragging = true;
    initData.isClick = true;
    const { clientX, clientY } = getClientXY(event);
    if (props.vertical) {
      initData.startY = clientY;
    } else {
      initData.startX = clientX;
    }
    initData.startPosition = parseFloat(currentPosition.value);
    initData.newPosition = initData.startPosition;
  };
  const onDragging = (event) => {
    if (initData.dragging) {
      initData.isClick = false;
      displayTooltip();
      resetSize();
      let diff;
      const { clientX, clientY } = getClientXY(event);
      if (props.vertical) {
        initData.currentY = clientY;
        diff = (initData.startY - initData.currentY) / sliderSize.value * 100;
      } else {
        initData.currentX = clientX;
        diff = (initData.currentX - initData.startX) / sliderSize.value * 100;
      }
      initData.newPosition = initData.startPosition + diff;
      setPosition(initData.newPosition);
    }
  };
  const onDragEnd = () => {
    if (initData.dragging) {
      setTimeout(() => {
        initData.dragging = false;
        if (!initData.hovering) {
          hideTooltip();
        }
        if (!initData.isClick) {
          setPosition(initData.newPosition);
          emitChange();
        }
      }, 0);
      dom.off(window, "mousemove", onDragging);
      dom.off(window, "touchmove", onDragging);
      dom.off(window, "mouseup", onDragEnd);
      dom.off(window, "touchend", onDragEnd);
      dom.off(window, "contextmenu", onDragEnd);
    }
  };
  const setPosition = async (newPosition) => {
    if (newPosition === null || isNaN(newPosition))
      return;
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > 100) {
      newPosition = 100;
    }
    const lengthPerStep = 100 / ((max.value - min.value) / step.value);
    const steps = Math.round(newPosition / lengthPerStep);
    let value = steps * lengthPerStep * (max.value - min.value) * 0.01 + min.value;
    value = parseFloat(value.toFixed(precision.value));
    emit(constants.UPDATE_MODEL_EVENT, value);
    if (!initData.dragging && props.modelValue !== initData.oldValue) {
      initData.oldValue = props.modelValue;
    }
    await vue.nextTick();
    initData.dragging && displayTooltip();
    tooltip.value.updatePopper();
  };
  vue.watch(() => initData.dragging, (val) => {
    updateDragging(val);
  });
  return {
    tooltip,
    tooltipVisible,
    showTooltip,
    wrapperStyle,
    formatValue,
    handleMouseEnter,
    handleMouseLeave,
    onButtonDown,
    onLeftKeyDown,
    onRightKeyDown,
    setPosition
  };
};

exports.useSliderButton = useSliderButton;
//# sourceMappingURL=useSliderButton.js.map
