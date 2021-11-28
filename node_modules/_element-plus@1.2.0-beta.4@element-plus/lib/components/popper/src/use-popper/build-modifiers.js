'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function buildModifier(props, externalModifiers = []) {
  const { arrow, arrowOffset, offset, gpuAcceleration, fallbackPlacements } = props;
  const modifiers = [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
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
        fallbackPlacements: fallbackPlacements != null ? fallbackPlacements : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration,
        adaptive: gpuAcceleration
      }
    }
  ];
  if (arrow) {
    modifiers.push({
      name: "arrow",
      options: {
        element: arrow,
        padding: arrowOffset != null ? arrowOffset : 5
      }
    });
  }
  modifiers.push(...externalModifiers);
  return modifiers;
}

exports["default"] = buildModifier;
//# sourceMappingURL=build-modifiers.js.map
