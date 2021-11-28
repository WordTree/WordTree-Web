'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../tooltip/index.js');
require('../../popper/index.js');
var error = require('../../../utils/error.js');
var useMenu = require('./use-menu.js');
var menuItem = require('./menu-item.js');
var defaults = require('../../popper/src/use-popper/defaults.js');

const COMPONENT_NAME = "ElMenuItem";
var script = vue.defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElTooltip: index["default"]
  },
  props: menuItem.menuItemProps,
  emits: menuItem.menuItemEmits,
  setup(props, { emit }) {
    const instance = vue.getCurrentInstance();
    const rootMenu = vue.inject("rootMenu");
    if (!rootMenu)
      error.throwError(COMPONENT_NAME, "can not inject root menu");
    const { parentMenu, paddingStyle, indexPath } = useMenu["default"](instance, vue.toRef(props, "index"));
    const subMenu = vue.inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      error.throwError(COMPONENT_NAME, "can not inject sub menu");
    const active = vue.computed(() => props.index === rootMenu.activeIndex);
    const item = vue.reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    vue.onMounted(() => {
      subMenu.addSubMenu(item);
      rootMenu.addMenuItem(item);
    });
    vue.onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeMenuItem(item);
    });
    return {
      Effect: defaults.Effect,
      parentMenu,
      rootMenu,
      paddingStyle,
      active,
      handleClick
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=menu-item.vue_vue_type_script_lang.js.map
