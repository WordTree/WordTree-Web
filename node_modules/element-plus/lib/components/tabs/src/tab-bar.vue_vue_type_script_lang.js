'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var core = require('@vueuse/core');
require('../../../tokens/index.js');
var error = require('../../../utils/error.js');
var tabBar = require('./tab-bar.js');
var tabs = require('../../../tokens/tabs.js');

const COMPONENT_NAME = "ElTabBar";
var script = vue.defineComponent({
  name: COMPONENT_NAME,
  props: tabBar.tabBar,
  setup(props) {
    const instance = vue.getCurrentInstance();
    const rootTabs = vue.inject(tabs.tabsRootContextKey);
    if (!rootTabs)
      error.throwError(COMPONENT_NAME, "must use with ElTabs");
    const bar$ = vue.ref();
    const barStyle = vue.ref();
    const getBarStyle = () => {
      let offset = 0;
      let tabSize = 0;
      const sizeName = ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
      const sizeDir = sizeName === "width" ? "x" : "y";
      props.tabs.every((tab) => {
        var _a, _b, _c, _d;
        const $el = (_b = (_a = instance.parent) == null ? void 0 : _a.refs) == null ? void 0 : _b[`tab-${tab.paneName}`];
        if (!$el)
          return false;
        if (!tab.active) {
          return true;
        }
        tabSize = $el[`client${shared.capitalize(sizeName)}`];
        const position = sizeDir === "x" ? "left" : "top";
        offset = $el.getBoundingClientRect()[position] - ((_d = (_c = $el.parentElement) == null ? void 0 : _c.getBoundingClientRect()[position]) != null ? _d : 0);
        const tabStyles = window.getComputedStyle($el);
        if (sizeName === "width") {
          if (props.tabs.length > 1) {
            tabSize -= parseFloat(tabStyles.paddingLeft) + parseFloat(tabStyles.paddingRight);
          }
          offset += parseFloat(tabStyles.paddingLeft);
        }
        return false;
      });
      return {
        [sizeName]: `${tabSize}px`,
        transform: `translate${shared.capitalize(sizeDir)}(${offset}px)`
      };
    };
    const update = () => barStyle.value = getBarStyle();
    vue.watch(() => props.tabs, async () => {
      await vue.nextTick();
      update();
    }, { immediate: true });
    core.useResizeObserver(bar$, () => update());
    return {
      bar$,
      rootTabs,
      barStyle,
      update
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=tab-bar.vue_vue_type_script_lang.js.map
