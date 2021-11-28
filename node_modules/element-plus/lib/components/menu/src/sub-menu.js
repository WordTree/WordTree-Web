'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
var index$2 = require('../../collapse-transition/index.js');
var index$1 = require('../../popper/index.js');
var props = require('../../../utils/props.js');
var error = require('../../../utils/error.js');
var icons = require('@element-plus/icons');
var index = require('../../icon/index.js');
var useMenu = require('./use-menu.js');
var useMenuCssVar = require('./use-menu-css-var.js');

const subMenuProps = props.buildProps({
  index: {
    type: String,
    required: true
  },
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  },
  popperClass: String,
  disabled: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: void 0
  }
});
const COMPONENT_NAME = "ElSubMenu";
var SubMenu = vue.defineComponent({
  name: COMPONENT_NAME,
  props: subMenuProps,
  setup(props, { slots, expose }) {
    const instance = vue.getCurrentInstance();
    const { paddingStyle, indexPath, parentMenu } = useMenu["default"](instance, vue.computed(() => props.index));
    const rootMenu = vue.inject("rootMenu");
    if (!rootMenu)
      error.throwError(COMPONENT_NAME, "can not inject root menu");
    const subMenu = vue.inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      error.throwError(COMPONENT_NAME, "can not inject sub menu");
    const items = vue.ref({});
    const subMenus = vue.ref({});
    let timeout;
    const currentPlacement = vue.ref("");
    const mouseInChild = vue.ref(false);
    const verticalTitleRef = vue.ref();
    const vPopper = vue.ref();
    const subMenuTitleIcon = vue.computed(() => {
      return mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse ? icons.ArrowDown : icons.ArrowRight;
    });
    const isFirstLevel = vue.computed(() => {
      let isFirstLevel2 = true;
      let parent = instance.parent;
      while (parent && parent.type.name !== "ElMenu") {
        if (["ElSubMenu", "ElMenuItemGroup"].includes(parent.type.name)) {
          isFirstLevel2 = false;
          break;
        } else {
          parent = parent.parent;
        }
      }
      return isFirstLevel2;
    });
    const appendToBody = vue.computed(() => {
      return props.popperAppendToBody === void 0 ? isFirstLevel.value : Boolean(props.popperAppendToBody);
    });
    const menuTransitionName = vue.computed(() => rootMenu.props.collapse ? "el-zoom-in-left" : "el-zoom-in-top");
    const fallbackPlacements = vue.computed(() => mode.value === "horizontal" && isFirstLevel.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]);
    const opened = vue.computed(() => rootMenu.openedMenus.includes(props.index));
    const active = vue.computed(() => {
      let isActive = false;
      Object.values(items.value).forEach((item2) => {
        if (item2.active) {
          isActive = true;
        }
      });
      Object.values(subMenus.value).forEach((subItem) => {
        if (subItem.active) {
          isActive = true;
        }
      });
      return isActive;
    });
    const backgroundColor = vue.computed(() => rootMenu.props.backgroundColor || "");
    const activeTextColor = vue.computed(() => rootMenu.props.activeTextColor || "");
    const textColor = vue.computed(() => rootMenu.props.textColor || "");
    const mode = vue.computed(() => rootMenu.props.mode);
    const item = vue.reactive({
      index: props.index,
      indexPath,
      active
    });
    const titleStyle = vue.computed(() => {
      if (mode.value !== "horizontal") {
        return {
          color: textColor.value
        };
      }
      return {
        borderBottomColor: active.value ? rootMenu.props.activeTextColor ? activeTextColor.value : "" : "transparent",
        color: active.value ? activeTextColor.value : textColor.value
      };
    });
    const doDestroy = () => {
      var _a;
      return (_a = vPopper.value) == null ? void 0 : _a.doDestroy();
    };
    const handleCollapseToggle = (value) => {
      if (value) {
        updatePlacement();
      } else {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled)
        return;
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      });
    };
    const handleMouseenter = (event, showTimeout = props.showTimeout) => {
      var _a;
      if (event.type === "focus" && !event.relatedTarget) {
        return;
      }
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) {
        return;
      }
      mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = core.useTimeoutFn(() => rootMenu.openMenu(props.index, indexPath.value), showTimeout));
      if (appendToBody.value) {
        (_a = parentMenu.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a, _b;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        return;
      }
      mouseInChild.value = false;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = core.useTimeoutFn(() => !mouseInChild.value && rootMenu.closeMenu(props.index, indexPath.value), props.hideTimeout));
      if (appendToBody.value && deepDispatch) {
        if (((_a = instance.parent) == null ? void 0 : _a.type.name) === "ElSubMenu") {
          (_b = subMenu.handleMouseleave) == null ? void 0 : _b.call(subMenu, true);
        }
      }
    };
    const updatePlacement = () => {
      currentPlacement.value = mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start";
    };
    vue.watch(() => rootMenu.props.collapse, (value) => handleCollapseToggle(Boolean(value)));
    {
      const addSubMenu = (item2) => {
        subMenus.value[item2.index] = item2;
      };
      const removeSubMenu = (item2) => {
        delete subMenus.value[item2.index];
      };
      vue.provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave
      });
    }
    expose({
      opened
    });
    vue.onMounted(() => {
      rootMenu.addSubMenu(item);
      subMenu.addSubMenu(item);
      updatePlacement();
    });
    vue.onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeSubMenu(item);
    });
    return () => {
      var _a;
      const titleTag = [
        (_a = slots.title) == null ? void 0 : _a.call(slots),
        vue.h(index.ElIcon, {
          class: ["el-sub-menu__icon-arrow"]
        }, { default: () => vue.h(subMenuTitleIcon.value) })
      ];
      const ulStyle = useMenuCssVar.useMenuCssVar(rootMenu.props);
      const child = rootMenu.isMenuPopup ? vue.h(index$1["default"], {
        ref: vPopper,
        manualMode: true,
        visible: opened.value,
        effect: "light",
        pure: true,
        offset: 6,
        showArrow: false,
        popperClass: props.popperClass,
        placement: currentPlacement.value,
        appendToBody: appendToBody.value,
        fallbackPlacements: fallbackPlacements.value,
        transition: menuTransitionName.value,
        gpuAcceleration: false
      }, {
        default: () => {
          var _a2;
          return vue.h("div", {
            class: [`el-menu--${mode.value}`, props.popperClass],
            onMouseenter: (evt) => handleMouseenter(evt, 100),
            onMouseleave: () => handleMouseleave(true),
            onFocus: (evt) => handleMouseenter(evt, 100)
          }, [
            vue.h("ul", {
              class: [
                "el-menu el-menu--popup",
                `el-menu--popup-${currentPlacement.value}`
              ],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])
          ]);
        },
        trigger: () => vue.h("div", {
          class: "el-sub-menu__title",
          style: [
            paddingStyle.value,
            titleStyle.value,
            { backgroundColor: backgroundColor.value }
          ],
          onClick: handleClick
        }, titleTag)
      }) : vue.h(vue.Fragment, {}, [
        vue.h("div", {
          class: "el-sub-menu__title",
          style: [
            paddingStyle.value,
            titleStyle.value,
            { backgroundColor: backgroundColor.value }
          ],
          ref: verticalTitleRef,
          onClick: handleClick
        }, titleTag),
        vue.h(index$2["default"], {}, {
          default: () => {
            var _a2;
            return vue.withDirectives(vue.h("ul", {
              role: "menu",
              class: "el-menu el-menu--inline",
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]), [[vue.vShow, opened.value]]);
          }
        })
      ]);
      return vue.h("li", {
        class: [
          "el-sub-menu",
          {
            "is-active": active.value,
            "is-opened": opened.value,
            "is-disabled": props.disabled
          }
        ],
        role: "menuitem",
        ariaHaspopup: true,
        ariaExpanded: opened.value,
        onMouseenter: handleMouseenter,
        onMouseleave: () => handleMouseleave(true),
        onFocus: handleMouseenter
      }, [child]);
    };
  }
});

exports["default"] = SubMenu;
exports.subMenuProps = subMenuProps;
//# sourceMappingURL=sub-menu.js.map
