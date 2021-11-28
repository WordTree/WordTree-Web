'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var error = require('../../utils/error.js');
var util = require('../../utils/util.js');

const useMigrating = function() {
  vue.onMounted(() => {
    var _a;
    const instance = vue.getCurrentInstance();
    if (process.env.NODE_ENV === "production")
      return;
    if (!instance.vnode)
      return;
    const { props = {} } = getMigratingConfig();
    const { data } = instance;
    const definedProps = data.attrs || {};
    for (let propName in definedProps) {
      propName = util.kebabCase(propName);
      if (props[propName]) {
        error.debugWarn("Element Migrating", `[${(_a = instance.proxy) == null ? void 0 : _a.$options.name}][Attribute]: ${props[propName]}`);
      }
    }
  });
  const getMigratingConfig = function() {
    return {
      props: {},
      events: {}
    };
  };
  return {
    getMigratingConfig
  };
};

exports["default"] = useMigrating;
//# sourceMappingURL=index.js.map
