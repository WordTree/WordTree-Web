'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var props = require('../../../utils/props.js');

const spaceItem = props.buildProps({
  prefixCls: {
    type: String,
    default: "el-space"
  }
});
var script = vue.defineComponent({
  props: spaceItem,
  setup(props) {
    const classes = vue.computed(() => [`${props.prefixCls}__item`]);
    return {
      classes
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=item.vue_vue_type_script_lang.js.map
