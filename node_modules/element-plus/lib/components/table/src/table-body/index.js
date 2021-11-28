'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dom = require('../../../../utils/dom.js');
var isServer = require('../../../../utils/isServer.js');
var hHelper = require('../h-helper.js');
var layoutObserver = require('../layout-observer.js');
var util = require('../util.js');
var renderHelper = require('./render-helper.js');
var defaults = require('./defaults.js');

var TableBody = vue.defineComponent({
  name: "ElTableBody",
  props: defaults["default"],
  setup(props) {
    const instance = vue.getCurrentInstance();
    const parent = instance.parent;
    const { wrappedRowRender, tooltipContent, tooltipTrigger } = renderHelper["default"](props);
    const { onColumnsChange, onScrollableChange } = layoutObserver["default"](parent);
    vue.watch(props.store.states.hoverRow, (newVal, oldVal) => {
      if (!props.store.states.isComplex.value || isServer["default"])
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
          dom.removeClass(oldRow, "hover-row");
        }
        if (newRow) {
          dom.addClass(newRow, "hover-row");
        }
      });
    });
    vue.onUnmounted(() => {
      var _a;
      (_a = util.removePopper) == null ? void 0 : _a();
    });
    vue.onUpdated(() => {
      var _a;
      (_a = util.removePopper) == null ? void 0 : _a();
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
    return vue.h("table", {
      class: "el-table__body",
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      hHelper.hColgroup(this.store.states.columns.value),
      vue.h("tbody", {}, [
        data.reduce((acc, row) => {
          return acc.concat(this.wrappedRowRender(row, acc.length));
        }, [])
      ])
    ]);
  }
});

exports["default"] = TableBody;
//# sourceMappingURL=index.js.map
