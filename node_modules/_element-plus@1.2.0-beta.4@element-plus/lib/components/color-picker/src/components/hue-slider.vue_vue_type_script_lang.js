'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dom = require('../../../../utils/dom.js');
var draggable = require('../draggable.js');

var script = vue.defineComponent({
  name: "ElColorHueSlider",
  props: {
    color: {
      type: Object,
      required: true
    },
    vertical: Boolean
  },
  setup(props) {
    const instance = vue.getCurrentInstance();
    const thumb = vue.ref(null);
    const bar = vue.ref(null);
    const thumbLeft = vue.ref(0);
    const thumbTop = vue.ref(0);
    const hueValue = vue.computed(() => {
      return props.color.get("hue");
    });
    vue.watch(() => hueValue.value, () => {
      update();
    });
    function handleClick(event) {
      const target = event.target;
      if (target !== thumb.value) {
        handleDrag(event);
      }
    }
    function handleDrag(event) {
      const el = instance.vnode.el;
      const rect = el.getBoundingClientRect();
      const { clientX, clientY } = dom.getClientXY(event);
      let hue;
      if (!props.vertical) {
        let left = clientX - rect.left;
        left = Math.min(left, rect.width - thumb.value.offsetWidth / 2);
        left = Math.max(thumb.value.offsetWidth / 2, left);
        hue = Math.round((left - thumb.value.offsetWidth / 2) / (rect.width - thumb.value.offsetWidth) * 360);
      } else {
        let top = clientY - rect.top;
        top = Math.min(top, rect.height - thumb.value.offsetHeight / 2);
        top = Math.max(thumb.value.offsetHeight / 2, top);
        hue = Math.round((top - thumb.value.offsetHeight / 2) / (rect.height - thumb.value.offsetHeight) * 360);
      }
      props.color.set("hue", hue);
    }
    function getThumbLeft() {
      const el = instance.vnode.el;
      if (props.vertical)
        return 0;
      const hue = props.color.get("hue");
      if (!el)
        return 0;
      return Math.round(hue * (el.offsetWidth - thumb.value.offsetWidth / 2) / 360);
    }
    function getThumbTop() {
      const el = instance.vnode.el;
      if (!props.vertical)
        return 0;
      const hue = props.color.get("hue");
      if (!el)
        return 0;
      return Math.round(hue * (el.offsetHeight - thumb.value.offsetHeight / 2) / 360);
    }
    function update() {
      thumbLeft.value = getThumbLeft();
      thumbTop.value = getThumbTop();
    }
    vue.onMounted(() => {
      const dragConfig = {
        drag: (event) => {
          handleDrag(event);
        },
        end: (event) => {
          handleDrag(event);
        }
      };
      draggable["default"](bar.value, dragConfig);
      draggable["default"](thumb.value, dragConfig);
      update();
    });
    return {
      bar,
      thumb,
      thumbLeft,
      thumbTop,
      hueValue,
      handleClick,
      update
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=hue-slider.vue_vue_type_script_lang.js.map
