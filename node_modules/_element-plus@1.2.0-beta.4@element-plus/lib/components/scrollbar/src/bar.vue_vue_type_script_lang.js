'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../tokens/index.js');
var error = require('../../../utils/error.js');
var util = require('./util.js');
var bar = require('./bar.js');
var scrollbar = require('../../../tokens/scrollbar.js');

const COMPONENT_NAME = "Bar";
var script = vue.defineComponent({
  name: COMPONENT_NAME,
  props: bar.barProps,
  setup(props) {
    const scrollbar$1 = vue.inject(scrollbar.scrollbarContextKey);
    if (!scrollbar$1)
      error.throwError(COMPONENT_NAME, "can not inject scrollbar context");
    const instance = vue.ref();
    const thumb = vue.ref();
    const barStore = vue.ref({});
    const visible = vue.ref(false);
    let cursorDown = false;
    let cursorLeave = false;
    let onselectstartStore = null;
    const bar = vue.computed(() => util.BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
    const thumbStyle = vue.computed(() => util.renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value
    }));
    const offsetRatio = vue.computed(() => instance.value[bar.value.offset] ** 2 / scrollbar$1.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
    const clickThumbHandler = (e) => {
      var _a;
      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button))
        return;
      (_a = window.getSelection()) == null ? void 0 : _a.removeAllRanges();
      startDrag(e);
      const el = e.currentTarget;
      if (!el)
        return;
      barStore.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e) => {
      if (!thumb.value || !instance.value || !scrollbar$1.wrapElement)
        return;
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar$1.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar$1.wrapElement[bar.value.scrollSize] / 100;
    };
    const startDrag = (e) => {
      e.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      onselectstartStore = document.onselectstart;
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e) => {
      if (!instance.value || !thumb.value)
        return;
      if (cursorDown === false)
        return;
      const prevPage = barStore.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar$1.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar$1.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown = false;
      barStore.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      document.onselectstart = onselectstartStore;
      if (cursorLeave)
        visible.value = false;
    };
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true;
      visible.value = cursorDown;
    };
    vue.onBeforeUnmount(() => document.removeEventListener("mouseup", mouseUpDocumentHandler));
    core.useEventListener(vue.toRef(scrollbar$1, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
    core.useEventListener(vue.toRef(scrollbar$1, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
    return {
      instance,
      thumb,
      bar,
      thumbStyle,
      visible,
      clickTrackHandler,
      clickThumbHandler
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=bar.vue_vue_type_script_lang.js.map
