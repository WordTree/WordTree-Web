import type { VNode, Ref } from 'vue';
declare const _default: (contentRenderer: () => VNode, appendToBody: Ref<boolean>) => {
    isTeleportVisible: Ref<boolean>;
    showTeleport: () => void;
    hideTeleport: () => void;
    renderTeleport: () => void;
};
export default _default;
