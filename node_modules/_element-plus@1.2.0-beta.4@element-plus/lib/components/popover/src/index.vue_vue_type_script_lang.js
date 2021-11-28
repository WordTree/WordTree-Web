'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../directives/index.js');
var index = require('../../popper/index.js');
var error = require('../../../utils/error.js');
var vnode = require('../../../utils/vnode.js');
var usePopover = require('./usePopover.js');
var defaults = require('../../popper/src/use-popper/defaults.js');
var popper = require('../../popper/src/renderers/popper.js');
var arrow = require('../../popper/src/renderers/arrow.js');
var trigger = require('../../popper/src/renderers/trigger.js');
var index$1 = require('../../../directives/click-outside/index.js');

const emits = [
  "update:visible",
  "after-enter",
  "after-leave",
  usePopover.SHOW_EVENT,
  usePopover.HIDE_EVENT
];
const NAME = "ElPopover";
const _hoist = { key: 0, class: "el-popover__title", role: "title" };
var script = vue.defineComponent({
  name: NAME,
  components: {
    ElPopper: index["default"]
  },
  props: {
    ...defaults["default"],
    content: {
      type: String
    },
    trigger: {
      type: String,
      default: "click"
    },
    title: {
      type: String
    },
    transition: {
      type: String,
      default: "fade-in-linear"
    },
    width: {
      type: [String, Number],
      default: 150
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    tabindex: [String, Number]
  },
  emits,
  setup(props, ctx) {
    if (props.visible && !ctx.slots.reference) {
      error.debugWarn(NAME, `
        You cannot init popover without given reference
      `);
    }
    const states = usePopover["default"](props, ctx);
    return states;
  },
  render() {
    const { $slots } = this;
    const trigger$1 = $slots.reference ? $slots.reference() : null;
    const title = vnode.renderIf(!!this.title, "div", _hoist, vue.toDisplayString(this.title), vnode.PatchFlags.TEXT);
    const content = vue.renderSlot($slots, "default", {}, () => [
      vue.createTextVNode(vue.toDisplayString(this.content), vnode.PatchFlags.TEXT)
    ]);
    const {
      events,
      onAfterEnter,
      onAfterLeave,
      onPopperMouseEnter,
      onPopperMouseLeave,
      popperStyle,
      popperId,
      popperClass,
      showArrow,
      transition,
      visibility,
      tabindex
    } = this;
    const kls = [
      this.content ? "el-popover--plain" : "",
      "el-popover",
      popperClass
    ].join(" ");
    const popover = popper["default"]({
      effect: defaults.Effect.LIGHT,
      name: transition,
      popperClass: kls,
      popperStyle,
      popperId,
      visibility,
      onMouseenter: onPopperMouseEnter,
      onMouseleave: onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      stopPopperMouseEvent: false
    }, [title, content, arrow["default"](showArrow)]);
    const _trigger = trigger$1 ? trigger["default"](trigger$1, {
      ariaDescribedby: popperId,
      ref: "triggerRef",
      tabindex,
      ...events
    }) : vue.createCommentVNode("v-if", true);
    return vue.h(vue.Fragment, null, [
      this.trigger === "click" ? vue.withDirectives(_trigger, [[index$1["default"], this.hide]]) : _trigger,
      vue.h(vue.Teleport, {
        disabled: !this.appendToBody,
        to: "body"
      }, [popover])
    ]);
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue_type_script_lang.js.map
