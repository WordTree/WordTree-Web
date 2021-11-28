import { inject, shallowRef, ref, computed, nextTick } from 'vue';
import { UPDATE_MODEL_EVENT, INPUT_EVENT, CHANGE_EVENT } from '../../../utils/constants.mjs';
import '../../../tokens/index.mjs';
import { elFormKey, elFormItemKey } from '../../../tokens/form.mjs';

const useSlide = (props, initData, emit) => {
  const elForm = inject(elFormKey, {});
  const elFormItem = inject(elFormItemKey, {});
  const slider = shallowRef(null);
  const firstButton = ref(null);
  const secondButton = ref(null);
  const buttonRefs = {
    firstButton,
    secondButton
  };
  const sliderDisabled = computed(() => {
    return props.disabled || elForm.disabled || false;
  });
  const minValue = computed(() => {
    return Math.min(initData.firstValue, initData.secondValue);
  });
  const maxValue = computed(() => {
    return Math.max(initData.firstValue, initData.secondValue);
  });
  const barSize = computed(() => {
    return props.range ? `${100 * (maxValue.value - minValue.value) / (props.max - props.min)}%` : `${100 * (initData.firstValue - props.min) / (props.max - props.min)}%`;
  });
  const barStart = computed(() => {
    return props.range ? `${100 * (minValue.value - props.min) / (props.max - props.min)}%` : "0%";
  });
  const runwayStyle = computed(() => {
    return props.vertical ? { height: props.height } : {};
  });
  const barStyle = computed(() => {
    return props.vertical ? {
      height: barSize.value,
      bottom: barStart.value
    } : {
      width: barSize.value,
      left: barStart.value
    };
  });
  const resetSize = () => {
    if (slider.value) {
      initData.sliderSize = slider.value[`client${props.vertical ? "Height" : "Width"}`];
    }
  };
  const setPosition = (percent) => {
    const targetValue = props.min + percent * (props.max - props.min) / 100;
    if (!props.range) {
      firstButton.value.setPosition(percent);
      return;
    }
    let buttonRefName;
    if (Math.abs(minValue.value - targetValue) < Math.abs(maxValue.value - targetValue)) {
      buttonRefName = initData.firstValue < initData.secondValue ? "firstButton" : "secondButton";
    } else {
      buttonRefName = initData.firstValue > initData.secondValue ? "firstButton" : "secondButton";
    }
    buttonRefs[buttonRefName].value.setPosition(percent);
  };
  const setFirstValue = (firstValue) => {
    initData.firstValue = firstValue;
    _emit(props.range ? [minValue.value, maxValue.value] : firstValue);
  };
  const setSecondValue = (secondValue) => {
    initData.secondValue = secondValue;
    if (props.range) {
      _emit([minValue.value, maxValue.value]);
    }
  };
  const _emit = (val) => {
    emit(UPDATE_MODEL_EVENT, val);
    emit(INPUT_EVENT, val);
  };
  const emitChange = async () => {
    await nextTick();
    emit(CHANGE_EVENT, props.range ? [minValue.value, maxValue.value] : props.modelValue);
  };
  const onSliderClick = (event) => {
    if (sliderDisabled.value || initData.dragging)
      return;
    resetSize();
    if (props.vertical) {
      const sliderOffsetBottom = slider.value.getBoundingClientRect().bottom;
      setPosition((sliderOffsetBottom - event.clientY) / initData.sliderSize * 100);
    } else {
      const sliderOffsetLeft = slider.value.getBoundingClientRect().left;
      setPosition((event.clientX - sliderOffsetLeft) / initData.sliderSize * 100);
    }
    emitChange();
  };
  return {
    elFormItem,
    slider,
    firstButton,
    secondButton,
    sliderDisabled,
    minValue,
    maxValue,
    runwayStyle,
    barStyle,
    resetSize,
    setPosition,
    emitChange,
    onSliderClick,
    setFirstValue,
    setSecondValue
  };
};

export { useSlide };
//# sourceMappingURL=useSlide.mjs.map
