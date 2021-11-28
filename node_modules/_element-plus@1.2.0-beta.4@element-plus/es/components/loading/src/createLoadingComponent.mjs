import { ref, reactive, toRefs, h, Transition, withCtx, withDirectives, createVNode, vShow, render } from 'vue';
import { removeClass } from '../../../utils/dom.mjs';

function createLoadingComponent({
  options,
  globalLoadingOption
}) {
  let vm = null;
  let afterLeaveTimer = null;
  const afterLeaveFlag = ref(false);
  const data = reactive({
    ...options,
    originalPosition: "",
    originalOverflow: "",
    visible: false
  });
  function setText(text) {
    data.text = text;
  }
  function destroySelf() {
    const target = data.parent;
    if (!target.vLoadingAddClassList) {
      let loadingNumber = target.getAttribute("loading-number");
      loadingNumber = Number.parseInt(loadingNumber) - 1;
      if (!loadingNumber) {
        removeClass(target, "el-loading-parent--relative");
        target.removeAttribute("loading-number");
      } else {
        target.setAttribute("loading-number", loadingNumber.toString());
      }
      removeClass(target, "el-loading-parent--hidden");
    }
    if (vm.el && vm.el.parentNode) {
      vm.el.parentNode.removeChild(vm.el);
    }
  }
  function close() {
    const target = data.parent;
    target.vLoadingAddClassList = null;
    if (data.fullscreen) {
      globalLoadingOption.fullscreenLoading = void 0;
    }
    afterLeaveFlag.value = true;
    clearTimeout(afterLeaveTimer);
    afterLeaveTimer = window.setTimeout(() => {
      if (afterLeaveFlag.value) {
        afterLeaveFlag.value = false;
        destroySelf();
      }
    }, 400);
    data.visible = false;
  }
  function handleAfterLeave() {
    if (!afterLeaveFlag.value)
      return;
    afterLeaveFlag.value = false;
    destroySelf();
  }
  const componentSetupConfig = {
    ...toRefs(data),
    setText,
    close,
    handleAfterLeave
  };
  const elLoadingComponent = {
    name: "ElLoading",
    setup() {
      return componentSetupConfig;
    },
    render() {
      const svg = this.spinner || this.svg;
      const spinner = h("svg", {
        class: "circular",
        viewBox: this.svgViewBox ? this.svgViewBox : "25 25 50 50",
        ...svg ? { innerHTML: svg } : {}
      }, [
        h("circle", {
          class: "path",
          cx: "50",
          cy: "50",
          r: "20",
          fill: "none"
        })
      ]);
      const spinnerText = h("p", { class: "el-loading-text" }, [this.text]);
      return h(Transition, {
        name: "el-loading-fade",
        onAfterLeave: this.handleAfterLeave
      }, {
        default: withCtx(() => [
          withDirectives(createVNode("div", {
            style: {
              backgroundColor: this.background || ""
            },
            class: [
              "el-loading-mask",
              this.customClass,
              this.fullscreen ? "is-fullscreen" : ""
            ]
          }, [
            h("div", {
              class: "el-loading-spinner"
            }, [spinner, this.text ? spinnerText : null])
          ]), [[vShow, this.visible]])
        ])
      });
    }
  };
  vm = createVNode(elLoadingComponent);
  render(vm, document.createElement("div"));
  return {
    ...componentSetupConfig,
    vm,
    get $el() {
      return vm.el;
    }
  };
}

export { createLoadingComponent };
//# sourceMappingURL=createLoadingComponent.mjs.map
