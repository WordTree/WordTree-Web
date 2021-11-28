import { defineComponent, getCurrentInstance, inject, ref, computed, watch, reactive, markRaw } from 'vue';
import { eagerComputed } from '@vueuse/core';
import '../../../tokens/index.mjs';
import { throwError } from '../../../utils/error.mjs';
import { tabPaneProps } from './tab-pane.mjs';
import { tabsRootContextKey } from '../../../tokens/tabs.mjs';

const COMPONENT_NAME = "ElTabPane";
var script = defineComponent({
  name: COMPONENT_NAME,
  props: tabPaneProps,
  setup(props) {
    const instance = getCurrentInstance();
    const tabsRoot = inject(tabsRootContextKey);
    if (!tabsRoot)
      throwError(COMPONENT_NAME, `must use with ElTabs`);
    const index = ref();
    const loaded = ref(false);
    const isClosable = computed(() => props.closable || tabsRoot.props.closable);
    const active = eagerComputed(() => tabsRoot.currentName.value === (props.name || index.value));
    const paneName = computed(() => props.name || index.value);
    const shouldBeRender = eagerComputed(() => !props.lazy || loaded.value || active.value);
    watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    tabsRoot.updatePaneState(reactive({
      uid: instance.uid,
      instance: markRaw(instance),
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

export { script as default };
//# sourceMappingURL=tab-pane.vue_vue_type_script_lang.mjs.map
