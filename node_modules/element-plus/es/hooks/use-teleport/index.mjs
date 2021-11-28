import { ref, h, Teleport, onUnmounted } from 'vue';
import { NOOP } from '@vue/shared';
import isServer from '../../utils/isServer.mjs';
import { createGlobalNode, removeGlobalNode } from '../../utils/global-nodes.mjs';

var useTeleport = (contentRenderer, appendToBody) => {
  const isTeleportVisible = ref(false);
  if (isServer) {
    return {
      isTeleportVisible,
      showTeleport: NOOP,
      hideTeleport: NOOP,
      renderTeleport: NOOP
    };
  }
  let $el = null;
  const showTeleport = () => {
    isTeleportVisible.value = true;
    if ($el !== null)
      return;
    $el = createGlobalNode();
  };
  const hideTeleport = () => {
    isTeleportVisible.value = false;
    if ($el !== null) {
      removeGlobalNode($el);
      $el = null;
    }
  };
  const renderTeleport = () => {
    return appendToBody.value !== true ? contentRenderer() : isTeleportVisible.value ? [h(Teleport, { to: $el }, contentRenderer())] : void 0;
  };
  onUnmounted(hideTeleport);
  return {
    isTeleportVisible,
    showTeleport,
    hideTeleport,
    renderTeleport
  };
};

export { useTeleport as default };
//# sourceMappingURL=index.mjs.map
