import { ref, computed, watch } from 'vue';
import '../../../utils/util.mjs';
import '../../popper/index.mjs';
import PopupManager from '../../../utils/popup-manager.mjs';
import { isString } from '@vue/shared';
import usePopper from '../../popper/src/use-popper/index.mjs';

const SHOW_EVENT = "show";
const HIDE_EVENT = "hide";
function usePopover(props, ctx) {
  const zIndex = ref(PopupManager.nextZIndex());
  const width = computed(() => {
    if (isString(props.width)) {
      return props.width;
    }
    return `${props.width}px`;
  });
  const popperStyle = computed(() => {
    return {
      width: width.value,
      zIndex: zIndex.value
    };
  });
  const popperProps = usePopper(props, ctx);
  watch(popperProps.visibility, (val) => {
    if (val) {
      zIndex.value = PopupManager.nextZIndex();
    }
    ctx.emit(val ? SHOW_EVENT : HIDE_EVENT);
  });
  return {
    ...popperProps,
    popperStyle
  };
}

export { HIDE_EVENT, SHOW_EVENT, usePopover as default };
//# sourceMappingURL=usePopover.mjs.map
