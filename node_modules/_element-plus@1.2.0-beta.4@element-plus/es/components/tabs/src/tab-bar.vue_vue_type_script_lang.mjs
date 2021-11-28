import { defineComponent, getCurrentInstance, inject, ref, watch, nextTick } from 'vue';
import { capitalize } from '@vue/shared';
import { useResizeObserver } from '@vueuse/core';
import '../../../tokens/index.mjs';
import { throwError } from '../../../utils/error.mjs';
import { tabBar } from './tab-bar.mjs';
import { tabsRootContextKey } from '../../../tokens/tabs.mjs';

const COMPONENT_NAME = "ElTabBar";
var script = defineComponent({
  name: COMPONENT_NAME,
  props: tabBar,
  setup(props) {
    const instance = getCurrentInstance();
    const rootTabs = inject(tabsRootContextKey);
    if (!rootTabs)
      throwError(COMPONENT_NAME, "must use with ElTabs");
    const bar$ = ref();
    const barStyle = ref();
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
        tabSize = $el[`client${capitalize(sizeName)}`];
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
        transform: `translate${capitalize(sizeDir)}(${offset}px)`
      };
    };
    const update = () => barStyle.value = getBarStyle();
    watch(() => props.tabs, async () => {
      await nextTick();
      update();
    }, { immediate: true });
    useResizeObserver(bar$, () => update());
    return {
      bar$,
      rootTabs,
      barStyle,
      update
    };
  }
});

export { script as default };
//# sourceMappingURL=tab-bar.vue_vue_type_script_lang.mjs.map
