'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var resizeEvent = require('../../../utils/resize-event.js');
var token = require('./token.js');

var script = vue.defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = vue.inject(token.selectKey);
    const popperClass = vue.computed(() => select.props.popperClass);
    const isMultiple = vue.computed(() => select.props.multiple);
    const isFitInputWidth = vue.computed(() => select.props.fitInputWidth);
    const minWidth = vue.ref("");
    function updateMinWidth() {
      var _a;
      minWidth.value = `${(_a = select.selectWrapper) == null ? void 0 : _a.getBoundingClientRect().width}px`;
    }
    vue.onMounted(() => {
      resizeEvent.addResizeListener(select.selectWrapper, updateMinWidth);
    });
    vue.onBeforeUnmount(() => {
      resizeEvent.removeResizeListener(select.selectWrapper, updateMinWidth);
    });
    return {
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=select-dropdown.vue_vue_type_script_lang.js.map
