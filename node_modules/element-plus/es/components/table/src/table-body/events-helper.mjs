import { getCurrentInstance, ref, h } from 'vue';
import debounce from 'lodash/debounce';
import { hasClass, getStyle } from '../../../../utils/dom.mjs';
import { getCell, getColumnByCell, createTablePopper } from '../util.mjs';

function useEvents(props) {
  const instance = getCurrentInstance();
  const parent = instance.parent;
  const tooltipContent = ref("");
  const tooltipTrigger = ref(h("div"));
  const handleEvent = (event, row, name) => {
    const table = parent;
    const cell = getCell(event);
    let column;
    if (cell) {
      column = getColumnByCell({
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
  const handleMouseEnter = debounce(function(index) {
    props.store.commit("setHoverRow", index);
  }, 30);
  const handleMouseLeave = debounce(function() {
    props.store.commit("setHoverRow", null);
  }, 30);
  const handleCellMouseEnter = (event, row) => {
    const table = parent;
    const cell = getCell(event);
    if (cell) {
      const column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell);
      const hoverState = table.hoverState = { cell, column, row };
      table.emit("cell-mouse-enter", hoverState.row, hoverState.column, hoverState.cell, event);
    }
    const cellChild = event.target.querySelector(".cell");
    if (!(hasClass(cellChild, "el-tooltip") && cellChild.childNodes.length)) {
      return;
    }
    const range = document.createRange();
    range.setStart(cellChild, 0);
    range.setEnd(cellChild, cellChild.childNodes.length);
    const rangeWidth = range.getBoundingClientRect().width;
    const padding = (parseInt(getStyle(cellChild, "paddingLeft"), 10) || 0) + (parseInt(getStyle(cellChild, "paddingRight"), 10) || 0);
    if (rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) {
      createTablePopper(cell, cell.innerText || cell.textContent, {
        placement: "top",
        strategy: "fixed"
      }, row.tooltipEffect);
    }
  };
  const handleCellMouseLeave = (event) => {
    const cell = getCell(event);
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

export { useEvents as default };
//# sourceMappingURL=events-helper.mjs.map
