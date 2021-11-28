'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var raf = require('../../../../utils/raf.js');
var utils = require('../utils.js');

const useGridWheel = ({ atXEndEdge, atXStartEdge, atYEndEdge, atYStartEdge }, onWheelDelta) => {
  let frameHandle = null;
  let xOffset = 0;
  let yOffset = 0;
  const hasReachedEdge = (x, y) => {
    const xEdgeReached = x < 0 && atXStartEdge.value || x > 0 && atXEndEdge.value;
    const yEdgeReached = y < 0 && atYStartEdge.value || y > 0 && atYEndEdge.value;
    return xEdgeReached && yEdgeReached;
  };
  const onWheel = (e) => {
    raf.cAF(frameHandle);
    const x = e.deltaX;
    const y = e.deltaY;
    if (hasReachedEdge(xOffset, yOffset) && hasReachedEdge(xOffset + x, yOffset + y))
      return;
    xOffset += x;
    yOffset += y;
    if (!utils.isFF) {
      e.preventDefault();
    }
    frameHandle = raf.rAF(() => {
      onWheelDelta(xOffset, yOffset);
      xOffset = 0;
      yOffset = 0;
    });
  };
  return {
    hasReachedEdge,
    onWheel
  };
};

exports.useGridWheel = useGridWheel;
//# sourceMappingURL=use-grid-wheel.js.map
