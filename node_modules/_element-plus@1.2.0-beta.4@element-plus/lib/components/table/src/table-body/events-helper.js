'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var debounce = require('lodash/debounce');
var dom = require('../../../../utils/dom.js');
var util = require('../util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

function useEvents(props) {
  const instance = vue.getCurrentInstance();
  const parent = instance.parent;
  const tooltipContent = vue.ref("");
  const tooltipTrigger = vue.ref(vue.h("div"));
  const handleEvent = (event, row, name) => {
    const table = parent;
    const cell = util.getCell(event);
    let column;
    if (cell) {
      column = util.getColumnByCell({
        columns: props.store.states.columns.value
      }, cell);
      if (column) {
        table.emit(`cell-${name}`, row, column, cell, event);
      }
    }
    table.emit(`row-${name}`, row, column, event);
  };
  const handleDoubleClick = (event, row) => {
    handleEvent(event, row, "dblclick");
  };
  const handleClick = (event, row) => {
    props.store.commit("setCurrentRow", row);
    handleEvent(event, row, "click");
  };
  const handleContextMenu = (event, row) => {
    handleEvent(event, row, "contextmenu");
  };
  const handleMouseEnter = debounce__default["default"](function(index) {
    props.store.commit("setHoverRow", index);
  }, 30);
  const handleMouseLeave = debounce__default["default"](function() {
    props.store.commit("setHoverRow", null);
  }, 30);
  const handleCellMouseEnter = (event, row) => {
    const table = parent;
    const cell = util.getCell(event);
    if (cell) {
      const column = util.getColumnByCell({
        columns: props.store.states.columns.value
      }, cell);
      const hoverState = table.hoverState = { cell, column, row };
      table.emit("cell-mouse-enter", hoverState.row, hoverState.column, hoverState.cell, event);
    }
    const cellChild = event.target.querySelector(".cell");
    if (!(dom.hasClass(cellChild, "el-tooltip") && cellChild.childNodes.length)) {
      return;
    }
    const range = document.createRange();
    range.setStart(cellChild, 0);
    range.setEnd(cellChild, cellChild.childNodes.length);
    const rangeWidth = range.getBoundingClientRect().width;
    const padding = (parseInt(dom.getStyle(cellChild, "paddingLeft"), 10) || 0) + (parseInt(dom.getStyle(cellChild, "paddingRight"), 10) || 0);
    if (rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) {
      util.createTablePopper(cell, cell.innerText || cell.textContent, {
        placement: "top",
        strategy: "fixed"
      }, row.tooltipEffect);
    }
  };
  const handleCellMouseLeave = (event) => {
    const cell = util.getCell(event);
    if (!cell)
      return;
    const oldHoverState = parent.hoverState;
    parent.emit("cell-mouse-leave", oldHoverState == null ? void 0 : oldHoverState.row, oldHoverState == null ? void 0 : oldHoverState.column, oldHoverState == null ? void 0 : oldHoverState.cell, event);
  };
  return {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  };
}

exports["default"] = useEvents;
//# sourceMappingURL=events-helper.js.map
