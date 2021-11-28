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

export { DEFAULT_FALLBACK_PLACEMENTS, defaultModifiers, defaultPopperOptions };
//# sourceMappingURL=use-popper-options.mjs.map
