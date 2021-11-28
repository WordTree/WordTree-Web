'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var buildModifiers = require('./build-modifiers.js');

function usePopperOptions(props, state) {
  return vue.computed(() => {
    var _a;
    return {
      placement: props.placement,
      ...props.popperOptions,
      modifiers: buildModifiers["default"]({
        arrow: state.arrow.value,
        arrowOffset: props.arrowOffset,
        offset: props.offset,
        gpuAcceleration: props.gpuAcceleration,
        fallbackPlacements: props.fallbackPlacements
      }, (_a = props.popperOptions) == null ? void 0 : _a.modifiers)
    };
  });
}

exports["default"] = usePopperOptions;
//# sourceMappingURL=popper-options.js.map
