'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useMenuColor = require('./use-menu-color.js');

const useMenuCssVar = (props) => {
  return vue.computed(() => {
    return {
      "--el-menu-text-color": props.textColor || "",
      "--el-menu-hover-text-color": props.textColor || "",
      "--el-menu-bg-color": props.backgroundColor || "",
      "--el-menu-hover-bg-color": useMenuColor["default"](props).value || "",
      "--el-menu-active-color": props.activeTextColor || ""
    };
  });
};

exports.useMenuCssVar = useMenuCssVar;
//# sourceMappingURL=use-menu-css-var.js.map
