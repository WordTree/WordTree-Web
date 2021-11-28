import { defineComponent, toDisplayString, renderSlot, createTextVNode, createCommentVNode, h, Fragment, withDirectives, Teleport } from 'vue';
import '../../../directives/index.mjs';
import _Popper from '../../popper/index.mjs';
import { debugWarn } from '../../../utils/error.mjs';
import { renderIf, PatchFlags } from '../../../utils/vnode.mjs';
import usePopover, { SHOW_EVENT, HIDE_EVENT } from './usePopover.mjs';
import popperDefaultProps, { Effect } from '../../popper/src/use-popper/defaults.mjs';
import renderPopper from '../../popper/src/renderers/popper.mjs';
import renderArrow from '../../popper/src/renderers/arrow.mjs';
import renderTrigger from '../../popper/src/renderers/trigger.mjs';
import ClickOutside from '../../../directives/click-outside/index.mjs';

const emits = [
  "update:visible",
  "after-enter",
  "after-leave",
  SHOW_EVENT,
  HIDE_EVENT
];
const NAME = "ElPopover";
const _hoist = { key: 0, class: "el-popover__title", role: "title" };
var script = defineComponent({
  name: NAME,
  components: {
    ElPopper: _Popper
  },
  props: {
    ...popperDefaultProps,
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
      debugWarn(NAME, `
        You cannot init popover without given reference
      `);
    }
    const states = usePopover(props, ctx);
    return states;
  },
  render() {
    const { $slots } = this;
    const trigger = $slots.reference ? $slots.reference() : null;
    const title = renderIf(!!this.title, "div", _hoist, toDisplayString(this.title), PatchFlags.TEXT);
    const content = renderSlot($slots, "default", {}, () => [
      createTextVNode(toDisplayString(this.content), PatchFlags.TEXT)
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
    const popover = renderPopper({
      effect: Effect.LIGHT,
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
    }, [title, content, renderArrow(showArrow)]);
    const _trigger = trigger ? renderTrigger(trigger, {
      ariaDescribedby: popperId,
      ref: "triggerRef",
      tabindex,
      ...events
    }) : createCommentVNode("v-if", true);
    return h(Fragment, null, [
      this.trigger === "click" ? withDirectives(_trigger, [[ClickOutside, this.hide]]) : _trigger,
      h(Teleport, {
        disabled: !this.appendToBody,
        to: "body"
      }, [popover])
    ]);
  }
});

export { script as default };
//# sourceMappingURL=index.vue_vue_type_script_lang.mjs.map
