import { defineComponent, ref, watch, watchEffect } from 'vue';
import { useOptions } from '../useOption.mjs';
import Color from '../color.mjs';

var script = defineComponent({
  props: {
    colors: { type: Array, required: true },
    color: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { currentColor } = useOptions();
    const rgbaColors = ref(parseColors(props.colors, props.color));
    watch(() => currentColor.value, (val) => {
      const color = new Color();
      color.fromString(val);
      rgbaColors.value.forEach((item) => {
        item.selected = color.compare(item);
      });
    });
    watchEffect(() => {
      rgbaColors.value = parseColors(props.colors, props.color);
    });
    function handleSelect(index) {
      props.color.fromString(props.colors[index]);
    }
    function parseColors(colors, color) {
      return colors.map((value) => {
        const c = new Color();
        c.enableAlpha = true;
        c.format = "rgba";
        c.fromString(value);
        c.selected = c.value === color.value;
        return c;
      });
    }
    return {
      rgbaColors,
      handleSelect
    };
  }
});

export { script as default };
//# sourceMappingURL=predefine.vue_vue_type_script_lang.mjs.map
