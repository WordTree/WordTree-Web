import { computed } from 'vue';
import buildModifier from './build-modifiers.mjs';

function usePopperOptions(props, state) {
  return computed(() => {
    var _a;
    return {
      placement: props.placement,
      ...props.popperOptions,
      modifiers: buildModifier({
        arrow: state.arrow.value,
        arrowOffset: props.arrowOffset,
        offset: props.offset,
        gpuAcceleration: props.gpuAcceleration,
        fallbackPlacements: props.fallbackPlacements
      }, (_a = props.popperOptions) == null ? void 0 : _a.modifiers)
    };
  });
}

export { usePopperOptions as default };
//# sourceMappingURL=popper-options.mjs.map
