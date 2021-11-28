'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var resizeEvent = require('../../../utils/resize-event.js');
require('../../../tokens/index.js');
var form = require('../../../tokens/form.js');

var LabelWrap = vue.defineComponent({
  name: "ElLabelWrap",
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(props, { slots }) {
    const el = vue.ref(null);
    const elForm = vue.inject(form.elFormKey);
    const elFormItem = vue.inject(form.elFormItemKey);
    const computedWidth = vue.ref(0);
    vue.watch(computedWidth, (val, oldVal) => {
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
      vue.nextTick(() => {
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
    vue.onMounted(() => {
      resizeEvent.addResizeListener(el.value.firstElementChild, updateLabelWidthFn);
      updateLabelWidthFn();
    });
    vue.onUpdated(updateLabelWidthFn);
    vue.onBeforeUnmount(() => {
      var _a;
      updateLabelWidth("remove");
      resizeEvent.removeResizeListener((_a = el.value) == null ? void 0 : _a.firstElementChild, updateLabelWidthFn);
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
        return vue.h("div", {
          ref: el,
          class: ["el-form-item__label-wrap"],
          style
        }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      } else {
        return vue.h(vue.Fragment, { ref: el }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      }
    }
    return render;
  }
});

exports["default"] = LabelWrap;
//# sourceMappingURL=label-wrap.js.map
