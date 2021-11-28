import { on } from '../../../utils/dom.mjs';

const attachEvents = (el, binding, vnode) => {
  const _ref = binding.arg || binding.value;
  const popover = vnode.dirs[0].instance.$refs[_ref];
  if (popover) {
    popover.triggerRef = el;
    el.setAttribute("tabindex", popover.tabindex);
    Object.entries(popover.events).forEach(([eventName, e]) => {
      on(el, eventName.toLowerCase().slice(2), e);
    });
  }
};
var PopoverDirective = {
  mounted(el, binding, vnode) {
    attachEvents(el, binding, vnode);
  },
  updated(el, binding, vnode) {
    attachEvents(el, binding, vnode);
  }
};
const VPopover = "popover";

export { VPopover, PopoverDirective as default };
//# sourceMappingURL=directive.mjs.map
