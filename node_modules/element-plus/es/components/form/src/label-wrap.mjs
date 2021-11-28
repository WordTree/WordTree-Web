import { defineComponent, ref, inject, watch, nextTick, onMounted, onUpdated, onBeforeUnmount, h, Fragment } from 'vue';
import { addResizeListener, removeResizeListener } from '../../../utils/resize-event.mjs';
import '../../../tokens/index.mjs';
import { elFormKey, elFormItemKey } from '../../../tokens/form.mjs';

var LabelWrap = defineComponent({
  name: "ElLabelWrap",
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(props, { slots }) {
    const el = ref(null);
    const elForm = inject(elFormKey);
    const elFormItem = inject(elFormItemKey);
    const computedWidth = ref(0);
    watch(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        elForm.registerLabelWidth(val, oldVal);
        elFormItem.updateComputedLabelWidth(val);
      }
    });
    const getLabelWidth = () => {
      var _a;
      if ((_a = el.value) == null ? void 0 : _a.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild).width;
        return Math.ceil(parseFloat(width));
      } else {
        return 0;
      }
    };
    const updateLabelWidth = (action = "update") => {
      nextTick(() => {
        if (slots.default && props.isAutoWidth) {
          if (action === "update") {
            computedWidth.value = getLabelWidth();
          } else if (action === "remove") {
            elForm.deregisterLabelWidth(computedWidth.value);
          }
        }
      });
    };
    const updateLabelWidthFn = () => updateLabelWidth("update");
    onMounted(() => {
      addResizeListener(el.value.firstElementChild, updateLabelWidthFn);
      updateLabelWidthFn();
    });
    onUpdated(updateLabelWidthFn);
    onBeforeUnmount(() => {
      var _a;
      updateLabelWidth("remove");
      removeResizeListener((_a = el.value) == null ? void 0 : _a.firstElementChild, updateLabelWidthFn);
    });
    function render() {
      var _a, _b;
      if (!slots)
        return null;
      if (props.isAutoWidth) {
        const autoLabelWidth = elForm.autoLabelWidth;
        const style = {};
        if (autoLabelWidth && autoLabelWidth !== "auto") {
          const marginWidth = Math.max(0, parseInt(autoLabelWidth, 10) - computedWidth.value);
          const marginPosition = elForm.labelPosition === "left" ? "marginRight" : "marginLeft";
          if (marginWidth) {
            style[marginPosition] = `${marginWidth}px`;
          }
        }
        return h("div", {
          ref: el,
          class: ["el-form-item__label-wrap"],
          style
        }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      } else {
        return h(Fragment, { ref: el }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      }
    }
    return render;
  }
});

export { LabelWrap as default };
//# sourceMappingURL=label-wrap.mjs.map
