'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var isEqualWith = require('lodash/isEqualWith');
var isServer = require('./isServer.js');
var error = require('./error.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var isEqualWith__default = /*#__PURE__*/_interopDefaultLegacy(isEqualWith);

const SCOPE = "Util";
function toObject(arr) {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      shared.extend(res, arr[i]);
    }
  }
  return res;
}
const getValueByPath = (obj, paths = "") => {
  let ret = obj;
  paths.split(".").map((path) => {
    ret = ret == null ? void 0 : ret[path];
  });
  return ret;
};
function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  let key, value;
  if (obj && shared.hasOwn(obj, path)) {
    key = path;
    value = tempObj == null ? void 0 : tempObj[path];
  } else {
    path = path.replace(/\[(\w+)\]/g, ".$1");
    path = path.replace(/^\./, "");
    const keyArr = path.split(".");
    let i = 0;
    for (i; i < keyArr.length - 1; i++) {
      if (!tempObj && !strict)
        break;
      const key2 = keyArr[i];
      if (key2 in tempObj) {
        tempObj = tempObj[key2];
      } else {
        if (strict) {
          error.throwError(SCOPE, "Please transfer a valid prop path to form item!");
        }
        break;
      }
    }
    key = keyArr[i];
    value = tempObj == null ? void 0 : tempObj[keyArr[i]];
  }
  return {
    o: tempObj,
    k: key,
    v: value
  };
}
const generateId = () => Math.floor(Math.random() * 1e4);
const escapeRegexpString = (value = "") => String(value).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
const coerceTruthyValueToArray = (arr) => {
  if (!arr && arr !== 0) {
    return [];
  }
  return Array.isArray(arr) ? arr : [arr];
};
const isFirefox = function() {
  return !isServer["default"] && !!window.navigator.userAgent.match(/firefox/i);
};
const autoprefixer = function(style) {
  const rules = ["transform", "transition", "animation"];
  const prefixes = ["ms-", "webkit-"];
  rules.forEach((rule) => {
    const value = style[rule];
    if (rule && value) {
      prefixes.forEach((prefix) => {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};
const kebabCase = shared.hyphenate;
const isBool = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isHTMLElement = (val) => shared.toRawType(val).startsWith("HTML");
function rafThrottle(fn) {
  let locked = false;
  return function(...args) {
    if (locked)
      return;
    locked = true;
    window.requestAnimationFrame(() => {
      Reflect.apply(fn, this, args);
      locked = false;
    });
  };
}
const clearTimer = (timer) => {
  clearTimeout(timer.value);
  timer.value = null;
};
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function isUndefined(val) {
  return val === void 0;
}
function useGlobalConfig() {
  const vm = vue.getCurrentInstance();
  if ("$ELEMENT" in vm.proxy) {
    return vm.proxy.$ELEMENT;
  }
  return {};
}
function isEmpty(val) {
  if (!val && val !== 0 || shared.isArray(val) && !val.length || shared.isObject(val) && !Object.keys(val).length)
    return true;
  return false;
}
function arrayFlat(arr) {
  return arr.reduce((acm, item) => {
    const val = Array.isArray(item) ? arrayFlat(item) : item;
    return acm.concat(val);
  }, []);
}
function deduplicate(arr) {
  return Array.from(new Set(arr));
}
function addUnit(value) {
  if (shared.isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}px`;
  }
  error.debugWarn(SCOPE, "binding value must be a string or number");
  return "";
}
function isEqualWithFunction(obj, other) {
  return isEqualWith__default["default"](obj, other, (objVal, otherVal) => {
    return shared.isFunction(objVal) && shared.isFunction(otherVal) ? `${objVal}` === `${otherVal}` : void 0;
  });
}
const refAttacher = (ref) => {
  return (val) => {
    ref.value = val;
  };
};

Object.defineProperty(exports, 'isVNode', {
  enumerable: true,
  get: function () { return vue.isVNode; }
});
Object.defineProperty(exports, 'camelize', {
  enumerable: true,
  get: function () { return shared.camelize; }
});
Object.defineProperty(exports, 'capitalize', {
  enumerable: true,
  get: function () { return shared.capitalize; }
});
Object.defineProperty(exports, 'extend', {
  enumerable: true,
  get: function () { return shared.extend; }
});
Object.defineProperty(exports, 'hasOwn', {
  enumerable: true,
  get: function () { return shared.hasOwn; }
});
Object.defineProperty(exports, 'isArray', {
  enumerable: true,
  get: function () { return shared.isArray; }
});
Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function () { return shared.isObject; }
});
Object.defineProperty(exports, 'isString', {
  enumerable: true,
  get: function () { return shared.isString; }
});
Object.defineProperty(exports, 'looseEqual', {
  enumerable: true,
  get: function () { return shared.looseEqual; }
});
exports.SCOPE = SCOPE;
exports.addUnit = addUnit;
exports.arrayFlat = arrayFlat;
exports.autoprefixer = autoprefixer;
exports.clearTimer = clearTimer;
exports.coerceTruthyValueToArray = coerceTruthyValueToArray;
exports.deduplicate = deduplicate;
exports.escapeRegexpString = escapeRegexpString;
exports.generateId = generateId;
exports.getPropByPath = getPropByPath;
exports.getRandomInt = getRandomInt;
exports.getValueByPath = getValueByPath;
exports.isBool = isBool;
exports.isEmpty = isEmpty;
exports.isEqualWithFunction = isEqualWithFunction;
exports.isFirefox = isFirefox;
exports.isHTMLElement = isHTMLElement;
exports.isNumber = isNumber;
exports.isUndefined = isUndefined;
exports.kebabCase = kebabCase;
exports.rafThrottle = rafThrottle;
exports.refAttacher = refAttacher;
exports.toObject = toObject;
exports.useGlobalConfig = useGlobalConfig;
//# sourceMappingURL=util.js.map
