'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var mapStateHelper = require('./mapState-helper.js');

function useStyle(props) {
  const instance = vue.getCurrentInstance();
  const table = instance.parent;
  const store = table.store;
  const {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns
  } = mapStateHelper["default"]();
  const hasGutter = vue.computed(() => {
    return !props.fixed && !table.layout.gutterWidth;
  });
  const isCellHidden = (index, columns2, column) => {
    if (props.fixed || props.fixed === "left") {
      return index >= leftFixedLeafCount.value;
    } else if (props.fixed === "right") {
      let before = 0;
      for (let i = 0; i < index; i++) {
        before += columns2[i].colSpan;
      }
      return before < columnsCount.value - rightFixedLeafCount.value;
    } else if (!props.fixed && column.fixed) {
      return true;
    } else {
      return index < leftFixedCount.value || index >= columnsCount.value - rightFixedCount.value;
    }
  };
  const getRowClasses = (column, cellIndex) => {
    const classes = [column.id, column.align, column.labelClassName];
    if (column.className) {
      classes.push(column.className);
    }
    if (isCellHidden(cellIndex, store.states.columns.value, column)) {
      classes.push("is-hidden");
    }
    if (!column.children) {
      classes.push("is-leaf");
    }
    return classes;
  };
  return {
    hasGutter,
    getRowClasses,
    columns
  };
}

exports["default"] = useStyle;
//# sourceMappingURL=style-helper.js.map
