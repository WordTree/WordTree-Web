'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dom = require('../../../../utils/dom.js');
var draggable = require('../draggable.js');

var script = vue.defineComponent({
  name: "ElSlPanel",
  props: {
    color: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const instance = vue.getCurrentInstance();
    const cursorTop = vue.ref(0);
    const cursorLeft = vue.ref(0);
    const background = vue.ref("hsl(0, 100%, 50%)");
    const colorValue = vue.computed(() => {
      const hue = props.color.get("hue");
      const value = props.color.get("value");
      return { hue, value };
    });
    function update() {
      const saturation = props.color.get("saturation");
      const value = props.color.get("value");
      const el = instance.vnode.el;
      const { clientWidth: width, clientHeight: height } = el;
      cursorLeft.value = saturation * width / 100;
      cursorTop.value = (100 - value) * height / 100;
      background.value = `hsl(${props.color.get("hue")}, 100%, 50%)`;
    }
    function handleDrag(event) {
      const el = instance.vnode.el;
      const rect = el.getBoundingClientRect();
      const { clientX, clientY } = dom.getClientXY(event);
      let left = clientX - rect.left;
      let top = clientY - rect.top;
      left = Math.max(0, left);
      left = Math.min(left, rect.width);
      top = Math.max(0, top);
      top = Math.min(top, rect.height);
      cursorLeft.value = left;
      cursorTop.value = top;
      props.color.set({
        saturation: left / rect.width * 100,
        value: 100 - top / rect.height * 100
      });
    }
    vue.watch(() => colorValue.value, () => {
      update();
    });
    vue.onMounted(() => {
      draggable["default"](instance.vnode.el, {
        drag: (event) => {
          handleDrag(event);
        },
        end: (event) => {
          handleDrag(event);
        }
      });
      update();
    });
    return {
      cursorTop,
      cursorLeft,
      background,
      colorValue,
      handleDrag,
      update
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=sv-panel.vue_vue_type_script_lang.js.map
