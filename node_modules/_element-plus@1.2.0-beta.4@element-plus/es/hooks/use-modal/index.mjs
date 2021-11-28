import { watch } from 'vue';
import { on } from '../../utils/dom.mjs';
import { EVENT_CODE } from '../../utils/aria.mjs';
import isServer from '../../utils/isServer.mjs';

const modalStack = [];
const closeModal = (e) => {
  if (modalStack.length === 0)
    return;
  if (e.code === EVENT_CODE.esc) {
    e.stopPropagation();
    const topModal = modalStack[modalStack.length - 1];
    topModal.handleClose();
  }
};
var useModal = (instance, visibleRef) => {
  watch(() => visibleRef.value, (val) => {
    if (val) {
      modalStack.push(instance);
    } else {
      modalStack.splice(modalStack.findIndex((modal) => modal === instance), 1);
    }
  });
};
if (!isServer) {
  on(document, "keydown", closeModal);
}

export { useModal as default };
//# sourceMappingURL=index.mjs.map
