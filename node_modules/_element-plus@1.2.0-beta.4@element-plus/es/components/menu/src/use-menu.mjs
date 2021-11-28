import { inject, computed } from 'vue';
import { throwError } from '../../../utils/error.mjs';

function useMenu(instance, currentIndex) {
  const rootMenu = inject("rootMenu");
  if (!rootMenu)
    throwError("useMenu", "can not inject root menu");
  const indexPath = computed(() => {
    let parent = instance.parent;
    const path = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = computed(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  const paddingStyle = computed(() => {
    let parent = instance.parent;
    if (rootMenu.props.mode !== "vertical")
      return {};
    let padding = 20;
    if (rootMenu.props.collapse) {
      padding = 20;
    } else {
      while (parent && parent.type.name !== "ElMenu") {
        if (parent.type.name === "ElSubMenu") {
          padding += 20;
        }
        parent = parent.parent;
      }
    }
    return { paddingLeft: `${padding}px` };
  });
  return {
    parentMenu,
    paddingStyle,
    indexPath
  };
}

export { useMenu as default };
//# sourceMappingURL=use-menu.mjs.map
