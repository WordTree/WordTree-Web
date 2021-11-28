'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../directives/index.js');
var index$1 = require('../../popper/index.js');
var index = require('../../tag/index.js');
var index$2 = require('../../icon/index.js');
var constants = require('../../../utils/constants.js');
require('./select-dropdown.js');
var useSelect = require('./useSelect.js');
var token = require('./token.js');
var defaults = require('./defaults.js');
var selectDropdown_vue_vue_type_script_lang = require('./select-dropdown.vue_vue_type_script_lang.js');
var index$3 = require('../../../directives/click-outside/index.js');

var script = vue.defineComponent({
  name: "ElSelectV2",
  components: {
    ElSelectMenu: selectDropdown_vue_vue_type_script_lang["default"],
    ElTag: index.ElTag,
    ElPopper: index$1["default"],
    ElIcon: index$2.ElIcon
  },
  directives: { ClickOutside: index$3["default"], ModelText: vue.vModelText },
  props: defaults.SelectProps,
  emits: [
    constants.UPDATE_MODEL_EVENT,
    constants.CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, { emit }) {
    const API = useSelect["default"](props, emit);
    vue.provide(token.selectV2InjectionKey, {
      props: vue.reactive({
        ...vue.toRefs(props),
        height: API.popupHeight
      }),
      onSelect: API.onSelect,
      onHover: API.onHover,
      onKeyboardNavigate: API.onKeyboardNavigate,
      onKeyboardSelect: API.onKeyboardSelect
    });
    return API;
  }
});

exports["default"] = script;
//# sourceMappingURL=select.vue_vue_type_script_lang.js.map
