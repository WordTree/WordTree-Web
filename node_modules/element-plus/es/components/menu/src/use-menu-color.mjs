import { computed } from 'vue';
import { darken } from '../../../utils/color.mjs';

function useMenuColor(props) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor;
    if (!color) {
      return "";
    } else {
      return darken(color);
    }
  });
  return menuBarColor;
}

export { useMenuColor as default };
//# sourceMappingURL=use-menu-color.mjs.map
