'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const DEFAULT_FALLBACK_PLACEMENTS = [];
const defaultModifiers = [
  {
    name: "offset",
    options: {
      offset: [0, 12]
    }
  },
  {
    name: "preventOverflow",
    options: {
      padding: {
        top: 2,
        bottom: 2,
        left: 5,
        right: 5
      }
    }
  },
  {
    name: "flip",
    options: {
      padding: 5,
      fallbackPlacements: []
    }
  },
  {
    name: "computeStyles",
    options: {
      gpuAcceleration: true,
      adaptive: true
    }
  }
];
const defaultPopperOptions = {
  type: Object,
  default: () => {
    return {
      fallbackPlacements: DEFAULT_FALLBACK_PLACEMENTS,
      strategy: "fixed",
      modifiers: defaultModifiers
    };
  }
};

exports.DEFAULT_FALLBACK_PLACEMENTS = DEFAULT_FALLBACK_PLACEMENTS;
exports.defaultModifiers = defaultModifiers;
exports.defaultPopperOptions = defaultPopperOptions;
//# sourceMappingURL=use-popper-options.js.map
