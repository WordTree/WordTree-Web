'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../tokens/index.js');
var error = require('../../../utils/error.js');
var tabPane = require('./tab-pane.js');
var tabs = require('../../../tokens/tabs.js');

const COMPONENT_NAME = "ElTabPane";
var script = vue.defineComponent({
  name: COMPONENT_NAME,
  props: tabPane.tabPaneProps,
  setup(props) {
    const instance = vue.getCurrentInstance();
    const tabsRoot = vue.inject(tabs.tabsRootContextKey);
    if (!tabsRoot)
      error.throwError(COMPONENT_NAME, `must use with ElTabs`);
    const index = vue.ref();
    const loaded = vue.ref(false);
    const isClosable = vue.computed(() => props.closable || tabsRoot.props.closable);
    const active = core.eagerComputed(() => tabsRoot.currentName.value === (props.name || index.value));
    const paneName = vue.computed(() => props.name || index.value);
    const shouldBeRender = core.eagerComputed(() => !props.lazy || loaded.value || active.value);
    vue.watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    tabsRoot.updatePaneState(vue.reactive({
      uid: instance.uid,
      instance: vue.markRaw(instance),
      props,
      paneName,
      active,
      index,
      isClosable
    }));
    return {
      active,
      paneName,
      shouldBeRender
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=tab-pane.vue_vue_type_script_lang.js.map
