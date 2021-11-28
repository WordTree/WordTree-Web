import { watch } from 'vue';
import { on, off } from '../../utils/dom.mjs';

var index = (el, events) => {
  watch(el, (val) => {
    if (val) {
      events.forEach(({ name, handler }) => {
        on(el.value, name, handler);
      });
    } else {
      events.forEach(({ name, handler }) => {
        off(el.value, name, handler);
      });
    }
  });
};

export { index as default };
//# sourceMappingURL=index.mjs.map
