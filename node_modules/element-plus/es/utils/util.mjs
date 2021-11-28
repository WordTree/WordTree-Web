import { getCurrentInstance } from 'vue';
export { isVNode } from 'vue';
import { extend, hasOwn, hyphenate, toRawType, isArray, isObject, isString, isFunction } from '@vue/shared';
export { camelize, capitalize, extend, hasOwn, isArray, isObject, isString, looseEqual } from '@vue/shared';
import isEqualWith from 'lodash/isEqualWith';
import isServer from './isServer.mjs';
import { throwError, debugWarn } from './error.mjs';

const SCOPE = "Util";
function toObject(arr) {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
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
  if (obj && hasOwn(obj, path)) {
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
          throwError(SCOPE, "Please transfer a valid prop path to form item!");
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
  return !isServer && !!window.navigator.userAgent.match(/firefox/i);
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
const kebabCase = hyphenate;
const isBool = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isHTMLElement = (val) => toRawType(val).startsWith("HTML");
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
  const vm = getCurrentInstance();
  if ("$ELEMENT" in vm.proxy) {
    return vm.proxy.$ELEMENT;
  }
  return {};
}
function isEmpty(val) {
  if (!val && val !== 0 || isArray(val) && !val.length || isObject(val) && !Object.keys(val).length)
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
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}px`;
  }
  debugWarn(SCOPE, "binding value must be a string or number");
  return "";
}
function isEqualWithFunction(obj, other) {
  return isEqualWith(obj, other, (objVal, otherVal) => {
    return isFunction(objVal) && isFunction(otherVal) ? `${objVal}` === `${otherVal}` : void 0;
  });
}
const refAttacher = (ref) => {
  return (val) => {
    ref.value = val;
  };
};

export { SCOPE, addUnit, arrayFlat, autoprefixer, clearTimer, coerceTruthyValueToArray, deduplicate, escapeRegexpString, generateId, getPropByPath, getRandomInt, getValueByPath, isBool, isEmpty, isEqualWithFunction, isFirefox, isHTMLElement, isNumber, isUndefined, kebabCase, rafThrottle, refAttacher, toObject, useGlobalConfig };
//# sourceMappingURL=util.mjs.map
