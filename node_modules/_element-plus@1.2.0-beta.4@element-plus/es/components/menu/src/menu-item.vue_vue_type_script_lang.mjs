import { defineComponent, getCurrentInstance, inject, toRef, computed, reactive, onMounted, onBeforeUnmount } from 'vue';
import _Tooltip from '../../tooltip/index.mjs';
import '../../popper/index.mjs';
import { throwError } from '../../../utils/error.mjs';
import useMenu from './use-menu.mjs';
import { menuItemProps, menuItemEmits } from './menu-item.mjs';
import { Effect } from '../../popper/src/use-popper/defaults.mjs';

const COMPONENT_NAME = "ElMenuItem";
var script = defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElTooltip: _Tooltip
  },
  props: menuItemProps,
  emits: menuItemEmits,
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const rootMenu = inject("rootMenu");
    if (!rootMenu)
      throwError(COMPONENT_NAME, "can not inject root menu");
    const { parentMenu, paddingStyle, indexPath } = useMenu(instance, toRef(props, "index"));
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME, "can not inject sub menu");
    const active = computed(() => props.index === rootMenu.activeIndex);
    const item = reactive({
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
    onMounted(() => {
      subMenu.addSubMenu(item);
      rootMenu.addMenuItem(item);
    });
    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeMenuItem(item);
    });
    return {
      Effect,
      parentMenu,
      rootMenu,
      paddingStyle,
      active,
      handleClick
    };
  }
});

export { script as default };
//# sourceMappingURL=menu-item.vue_vue_type_script_lang.mjs.map
