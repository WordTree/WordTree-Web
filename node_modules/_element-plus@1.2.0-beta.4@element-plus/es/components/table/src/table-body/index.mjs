import { defineComponent, getCurrentInstance, watch, onUnmounted, onUpdated, h } from 'vue';
import { removeClass, addClass } from '../../../../utils/dom.mjs';
import isServer from '../../../../utils/isServer.mjs';
import { hColgroup } from '../h-helper.mjs';
import useLayoutObserver from '../layout-observer.mjs';
import { removePopper } from '../util.mjs';
import useRender from './render-helper.mjs';
import defaultProps from './defaults.mjs';

var TableBody = defineComponent({
  name: "ElTableBody",
  props: defaultProps,
  setup(props) {
    const instance = getCurrentInstance();
    const parent = instance.parent;
    const { wrappedRowRender, tooltipContent, tooltipTrigger } = useRender(props);
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    watch(props.store.states.hoverRow, (newVal, oldVal) => {
      if (!props.store.states.isComplex.value || isServer)
        return;
      let raf = window.requestAnimationFrame;
      if (!raf) {
        raf = (fn) => window.setTimeout(fn, 16);
      }
      raf(() => {
        const rows = instance.vnode.el.querySelectorAll(".el-table__row");
        const oldRow = rows[oldVal];
        const newRow = rows[newVal];
        if (oldRow) {
          removeClass(oldRow, "hover-row");
        }
        if (newRow) {
          addClass(newRow, "hover-row");
        }
      });
    });
    onUnmounted(() => {
      var _a;
      (_a = removePopper) == null ? void 0 : _a();
    });
    onUpdated(() => {
      var _a;
      (_a = removePopper) == null ? void 0 : _a();
    });
    return {
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipContent,
      tooltipTrigger
    };
  },
  render() {
    const data = this.store.states.data.value || [];
    return h("table", {
      class: "el-table__body",
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      hColgroup(this.store.states.columns.value),
      h("tbody", {}, [
        data.reduce((acc, row) => {
          return acc.concat(this.wrappedRowRender(row, acc.length));
        }, [])
      ])
    ]);
  }
});

export { TableBody as default };
//# sourceMappingURL=index.mjs.map
