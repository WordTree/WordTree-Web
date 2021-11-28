import { cloneVNode } from 'vue';
import { throwError } from '../../../../utils/error.mjs';
import { getFirstValidNode } from '../../../../utils/vnode.mjs';

function renderTrigger(trigger, extraProps) {
  const firstElement = getFirstValidNode(trigger, 1);
  if (!firstElement)
    throwError("renderTrigger", "trigger expects single rooted node");
  return cloneVNode(firstElement, extraProps, true);
}

export { renderTrigger as default };
//# sourceMappingURL=trigger.mjs.map
