'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useOption = require('../useOption.js');
var color = require('../color.js');

var script = vue.defineComponent({
  props: {
    colors: { type: Array, required: true },
    color: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { currentColor } = useOption.useOptions();
    const rgbaColors = vue.ref(parseColors(props.colors, props.color));
    vue.watch(() => currentColor.value, (val) => {
      const color$1 = new color["default"]();
      color$1.fromString(val);
      rgbaColors.value.forEach((item) => {
        item.selected = color$1.compare(item);
      });
    });
    vue.watchEffect(() => {
      rgbaColors.value = parseColors(props.colors, props.color);
    });
    function handleSelect(index) {
      props.color.fromString(props.colors[index]);
    }
    function parseColors(colors, color$1) {
      return colors.map((value) => {
        const c = new color["default"]();
        c.enableAlpha = true;
        c.format = "rgba";
        c.fromString(value);
        c.selected = c.value === color$1.value;
        return c;
      });
    }
    return {
      rgbaColors,
      handleSelect
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=predefine.vue_vue_type_script_lang.js.map
