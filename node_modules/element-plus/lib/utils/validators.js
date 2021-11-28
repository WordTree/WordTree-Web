'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('./util.js');

const isValidWidthUnit = (val) => {
  if (util.isNumber(val)) {
    return true;
  } else {
    return ["px", "rem", "em", "vw", "%", "vmin", "vmax"].some((unit) => val.endsWith(unit)) || val.startsWith("calc");
  }
};
const isValidComponentSize = (val) => ["", "large", "medium", "small", "mini"].includes(val);
const isValidDatePickType = (val) => [
  "year",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
].includes(val);

exports.isValidComponentSize = isValidComponentSize;
exports.isValidDatePickType = isValidDatePickType;
exports.isValidWidthUnit = isValidWidthUnit;
//# sourceMappingURL=validators.js.map
