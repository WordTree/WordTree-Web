'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var color = require('../../../utils/color.js');

function useMenuColor(props) {
  const menuBarColor = vue.computed(() => {
    const color$1 = props.backgroundColor;
    if (!color$1) {
      return "";
    } else {
      return color.darken(color$1);
    }
  });
  return menuBarColor;
}

exports["default"] = useMenuColor;
//# sourceMappingURL=use-menu-color.js.map
