import { defineComponent, getCurrentInstance, ref, computed, watch, onMounted } from 'vue';
import { getClientXY } from '../../../../utils/dom.mjs';
import draggable from '../draggable.mjs';

var script = defineComponent({
  name: "ElSlPanel",
  props: {
    color: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const cursorTop = ref(0);
    const cursorLeft = ref(0);
    const background = ref("hsl(0, 100%, 50%)");
    const colorValue = computed(() => {
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
      const { clientX, clientY } = getClientXY(event);
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
    watch(() => colorValue.value, () => {
      update();
    });
    onMounted(() => {
      draggable(instance.vnode.el, {
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

export { script as default };
//# sourceMappingURL=sv-panel.vue_vue_type_script_lang.mjs.map
