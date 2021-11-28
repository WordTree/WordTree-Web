import { onBeforeUnmount } from 'vue';

function useTimeout() {
  let timeoutHandle;
  onBeforeUnmount(() => {
    clearTimeout(timeoutHandle);
  });
  return {
    registerTimeout: (fn, delay) => {
      clearTimeout(timeoutHandle);
      timeoutHandle = setTimeout(fn, delay);
    },
    cancelTimeout: () => {
      clearTimeout(timeoutHandle);
    }
  };
}

export { useTimeout as default };
//# sourceMappingURL=index.mjs.map
